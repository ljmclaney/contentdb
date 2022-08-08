<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\FigmaController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ProjectController;
use App\Models\Page;
use App\Models\Project;
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

Route::controller(ProjectController::class)->middleware(['auth', 'ensureUserIsSubscribed'])->prefix('projects')->group(function() {

    Route::get('/', function () {
        $projects = Project::where('account_id', auth()->user()->account_id)->get();

        return Inertia::render('Projects', [
            'projects' => $projects
        ]);
    })->name('projects');

    Route::get('/archive', function () {
        $projects = Project::where('account_id', auth()->user()->account_id)
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

    Route::get('/{project}', function ($projectID) {

        $project = Project::where('account_id', auth()->user()->account_id)
            ->findOrFail($projectID);

        $pages = Page::tree()
            ->where('project_id', $project->id)
            ->where('account_id', auth()->user()->account_id)
            ->get()
            ->toTree()
            ->toArray();

        return Inertia::render('Projects/Index', [
            'project' => $project,
            'pages' => $pages
        ]);

    })->name('viewProject');

    Route::controller(PageController::class)->prefix('/{project}/pages')->group(function() {
        Route::post('/create', 'store')->name('storePage');
        Route::get('/{page}', 'view')->name('viewPage');
        Route::post('/{page}', 'update')->name('updatePage');
        Route::delete('/{page}', 'delete')->name('deletePage');
        Route::get('/{page}/section/{section}', 'viewSection')->name('viewSection');
        Route::get('/{page}/structure', 'pageStructure')->name('pageStructure');
        Route::get('/{page}/structure/{section}', 'pageStructureSection')->name('pageStructureSection');
        Route::post('/{page}/fields', 'saveFields')->name('saveFields');
        Route::post('/{page}/sections', 'saveSection')->name('saveSection');
        Route::post('/{page}/upload-image', 'uploadImage')->name('uploadImage');
        Route::post('/{page}/completed', 'markAsCompleted')->name('markAsCompleted');
    });
});

Route::prefix('share/{project}/{uuid}')->group(function() {
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

Route::controller(PageController::class)->prefix('/projects/{project}/pages')->group(function() {
    Route::post('/{page}/fields', 'saveFields')->name('saveFields');
    Route::post('/{page}/upload-image', 'uploadImage')->name('uploadImage');
    Route::post('/{page}/completed', 'markAsCompleted')->name('markAsCompleted');
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
});

Route::get('/billing-portal', function (Request $request) {

    $request->user()->account->createOrGetStripeCustomer();

    return $request->user()->account->redirectToBillingPortal(route('projects'));

})->middleware(['auth'])->name('billingPortal');

Route::get('/storage/files/{account}/{file}', function ($account, $file) {

    return Storage::disk('spaces')->response(
        '/public/files/'. $account . '/' . $file);

})->name('files');

require __DIR__.'/auth.php';
