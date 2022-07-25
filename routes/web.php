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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/content', function () {
    return Inertia::render('Content');
});

Route::get('/template', function () {
    return Inertia::render('Template');
});

Route::controller(ProjectController::class)->prefix('projects')->group(function() {

    Route::get('/', function () {

        $projects = \App\Models\Project::all();

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
        Route::post('/{page}/fields', 'saveFields')->name('saveFields');
    });
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
