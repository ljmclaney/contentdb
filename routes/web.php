<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
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

        $projects = \App\Models\Project::where('account_id', auth()->user()->account_id)->get();

        return Inertia::render('Projects', [
            'projects' => $projects
        ]);
    });

    Route::post('/create', 'store')->name('storeProject');

    Route::get('/edit/{project}', 'edit')->name('editProject');

    Route::get('/{project}', function (\App\Models\Project $project) {

        return Inertia::render('Projects/Index', [
            'project' => $project,
            'pages' => $project->pages
        ]);

    })->name('viewProject');

    Route::controller(PageController::class)->prefix('/{project}/pages')->group(function() {
        Route::post('/create', 'store')->name('storePage');
        Route::get('/{page}', 'view')->name('viewPage');
        Route::get('/{page}/structure', 'pageStructure')->name('pageStructure');
        Route::post('/{page}/fields', 'saveFields')->name('saveFields');
        Route::post('/{page}/upload-image', 'uploadImage')->name('uploadImage');
    });
});

Route::prefix('share/{project}/{uuid}')->group(function() {
    Route::get('/', function (\App\Models\Project $project, $uuid) {

        if ($project->uuid !== $uuid) {
            abort(404);
        }

        return Inertia::render('SharedProject/Index', [
            'project' => $project,
            'pages' => $project->pages,
            'uuid' => $uuid
        ]);
    })->name('viewSharedProject');

    Route::get('/page/{page}', function (\App\Models\Project $project, $uuid, \App\Models\Page $page) {

        if ($project->uuid !== $uuid) {
            abort(404);
        }

        return Inertia::render('SharedProject/Page', [
            'project' => $project,
            'page' => $page,
            'fields' => $page->fields()->orderBy('sort_order')->get(),
            'uuid' => $uuid
        ]);
    })->name('viewSharedPage');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
