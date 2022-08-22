<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\FigmaController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\InviteController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TeamMemberController;
use App\Models\Page;
use App\Models\Project;
use App\Models\RestrictedProject;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});

Route::controller(ProjectController::class)->middleware(['auth'])->prefix('projects')->group(function() {

    Route::get('/', function () {

        $restrictredProjects = RestrictedProject::where('user_id', auth()->id())
            ->where('account_id', session()->get('account')->id)
            ->get()
            ->pluck('project_id');

        if ($restrictredProjects->count()) {
            $projects = Project::where('account_id', session()->get('account')->id)
                ->whereIn('id', $restrictredProjects)
                ->get();
        }

        if (!$restrictredProjects->count()) {
            $projects = Project::where('account_id', session()->get('account')->id)
                ->get();
        }

        return Inertia::render('Projects', [
            'projects' => $projects,
            'newUser' => (bool) request()->query('newUser', false)
        ]);
    })->name('projects');

    Route::get('/archive', function () {
        $projects = Project::where('account_id', session()->get('account')->id)
            ->onlyTrashed()
            ->get();

        return Inertia::render('Projects/Archive', [
            'projects' => $projects
        ]);
    })->name('viewArchivedProjects');

    Route::post('/create', 'store')
        ->middleware('ensureUserCanCreateProjects')
        ->name('storeProject');

    Route::get('/edit/{project}', 'edit')->name('editProject');
    Route::get('/archive/{project}', 'archive')->name('archiveProject');
    Route::get('/restore/{project}', 'restore')
        ->withTrashed()
        ->middleware('ensureUserCanCreateProjects')
        ->name('restoreProject');
    Route::post('/password/{id}', 'saveProjectPassword')->name('saveProjectPassword');
    Route::get('/content/{project}', 'viewAllContent')->name('viewAllContent');
    Route::post('/content/{project}', 'saveAllContent')->name('saveAllContent');

    Route::get('/{project}', function ($projectID) {

        $restrictredProjects = RestrictedProject::where('user_id', auth()->id())
            ->where('account_id', session()->get('account')->id)
            ->get()
            ->pluck('project_id')
            ->toArray();

        $project = Project::where('account_id', session()->get('account')->id)
            ->findOrFail($projectID);

        if (!empty($restrictredProjects) && !in_array($project->id, $restrictredProjects)) {
            abort(404);
        }

        $pages = Page::tree()
            ->where('project_id', $project->id)
            ->where('account_id', session()->get('account')->id)
            ->get()
            ->toTree()
            ->toArray();

        return Inertia::render('Projects/Index', [
            'project' => $project,
            'pages' => $pages
        ]);

    })->name('viewProject');

    Route::get('/sitemap/{project}', function ($projectID) {

        $project = Project::where('account_id', session()->get('account')->id)
            ->findOrFail($projectID);

        $pages = Page::tree()
            ->where('project_id', $project->id)
            ->where('account_id', session()->get('account')->id)
            ->get()
            ->toTree()
            ->toArray();

        return Inertia::render('Projects/Sitemap', [
            'project' => $project,
            'pages' => $pages
        ]);

    })->name('viewSitemap');

    Route::controller(PageController::class)->prefix('/{project}/pages')->group(function() {
        Route::post('/create', 'store')->name('storePage');
        Route::get('/{page}', 'view')->name('viewPage');
        Route::post('/{page}', 'update')->name('updatePage');
        Route::delete('/{page}', 'delete')->name('deletePage');
        Route::post('/{page}/clone', 'clonePage')->name('clonePage');
        Route::get('/{page}/section/{section}', 'viewSection')->name('viewSection');
        Route::get('/{page}/structure', 'pageStructure')->name('pageStructure');
        Route::get('/{page}/structure/{section}', 'pageStructureSection')->name('pageStructureSection');
        Route::post('/{page}/fields', 'saveFields')->name('saveFields');
        Route::post('/{page}/sections', 'saveSection')->name('saveSection');
        Route::post('/{page}/upload-image', 'uploadImage')->name('uploadImage');
        Route::post('/{page}/completed', 'markAsCompleted')->name('markAsCompleted');
    });
});

Route::prefix('share/{project}/{uuid}')->middleware(['ensureUserCanAccessProject'])->group(function() {

    Route::get('/', function (\App\Models\Project $project, $uuid) {

        if ($project->uuid !== $uuid) {
            abort(404);
        }

        $pages = Page::tree()
            ->where('project_id', $project->id)
            ->get()
            ->toTree()
            ->toArray();

        return Inertia::render('SharedProject/Index', [
            'project' => $project,
            'pages' => $pages,
            'uuid' => $uuid
        ]);
    })->name('viewSharedProject');

    Route::get('/page/{page}', function (\App\Models\Project $project, $uuid, \App\Models\Page $page) {

        if ($project->uuid !== $uuid) {
            abort(404);
        }

        $sections = $page->sections()
            ->with('fields')
            ->orderBy('sort_order')
            ->get();

        if (!empty($sections)) {
            $fields = $sections[0]->fields()->orderBy('sort_order')->get();
        }

        return Inertia::render('SharedProject/Page', [
            'project' => $project,
            'page' => $page,
            'sections' => $sections,
            'fields' => !empty($fields) ? $fields : null,
            'selectedSection' => !empty($sections) ? $sections[0] : null,
            'uuid' => $uuid
        ]);
    })->name('viewSharedPage');

    Route::get('/page/{page}/section/{section}', function (\App\Models\Project $project, $uuid, \App\Models\Page $page, \App\Models\Section $section) {

        if ($project->uuid !== $uuid) {
            abort(404);
        }

        $sections = $page->sections()
            ->with('fields')
            ->orderBy('sort_order')
            ->get();

        $fields = $section->fields()->orderBy('sort_order')->get();


        return Inertia::render('SharedProject/Page', [
            'project' => $project,
            'page' => $page,
            'sections' => $sections,
            'fields' => $fields,
            'selectedSection' => $section,
            'uuid' => $uuid
        ]);
    })->name('viewSharedSection');
});

Route::get('/password-protected/{project}/{uuid}', function (\App\Models\Project $project, $uuid) {

    if ($project->uuid !== $uuid) {
        abort(404);
    }

    return Inertia::render('SharedProject/Password', [
        'project' => $project,
        'uuid' => $uuid
    ]);
})->name('passwordProtected');

Route::post('/check-password/{project}', function (Request $request, \App\Models\Project $project) {

    if ($project->password !== $request->input('password')) {

        session()->flash('toast', [
            'title'   => 'Incorrect password!',
            'message' => 'Please try again.',
            'type'    => 'error'
        ]);

        return back();
    }

    session()->put('project_' . $project->uuid . '_has_access', true);

    return redirect()->route('viewSharedProject', [$project->id, $project->uuid]);

})->name('checkPassword');

Route::controller(PageController::class)->prefix('/projects/{project}/pages')->group(function() {
    Route::post('/{page}/fields', 'saveFields')->name('saveFields');
    Route::post('/{page}/upload-image', 'uploadImage')->name('uploadImage');
    Route::post('/{page}/completed', 'markAsCompleted')->name('markAsCompleted');
    Route::post('/{page}/status', 'changeStatus')->name('changeStatus');
});

Route::controller(FigmaController::class)->prefix('/figma')->group(function() {
    Route::get('/', 'files')->name('figma');
    Route::post('/oauth', 'figmaOauth')->name('figmaOauth');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::controller(AccountController::class)->middleware(['auth'])->prefix('account')->group(function() {
    Route::get('/upgrade', 'upgradeAccount')->name('upgradeAccount');
    Route::get('/upgrade/plan/{planName}', 'selectPlan')->name('selectPlan');
    Route::get('/accounts', 'viewAccounts')->name('viewAccounts');
    Route::get('/accounts/{accountID}', 'switchAccount')->name('switchAccount');
    Route::post('/accounts-details', 'accountDetails')->name('accountDetails');
});

Route::get('/billing-portal', function (Request $request) {

    $request->user()->account->createOrGetStripeCustomer();

    return $request->user()->account->redirectToBillingPortal(route('projects'));

})->middleware(['auth'])->name('billingPortal');

Route::get('/storage/files/{account}/{file}', function ($account, $file) {

    return Storage::disk('spaces')->response(
        '/public/files/'. $account . '/' . $file);

})->name('files');

Route::controller(GoogleController::class)->group(function(){
    Route::get('social/google', 'redirect')->name('auth.google');
    Route::get('social/google/callback', 'googleCallback')->name('googleCallback');
});

Route::controller(TeamMemberController::class)->middleware(['auth'])->prefix('team-members')->group(function(){
    Route::get('/', 'index')->name('viewTeamMembers');
    Route::post('/invite', 'inviteMember')->middleware(['EnsureUserCanAddTeamMembers'])->name('inviteMember');
    Route::post('/role', 'changeRole')->name('changeRole');
});

Route::controller(InviteController::class)->prefix('invite')->group(function(){
    Route::get('/{uuid}/{token}', 'viewInvite')->name('viewInvite');
    Route::post('/{uuid}/{token}', 'acceptInvite')->name('acceptInvite');
});

Route::get('/temp/assign-roles', function() {

    $accounts = \App\Models\Account::with('user')->get();

    $owner = \App\Models\Role::where('name', 'owner')->first();

    foreach ($accounts as $account) {
        if ($account->user) {
            $account->user->attachRole($owner, $account);
        }
    }


});

require __DIR__.'/auth.php';
