<?php

namespace App\Http\Controllers;

use App\Models\Page;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function store(Request $request, Project $project)
    {
        Page::create([
            'account_id' => 1,
            'project_id' => $project->id,
            'name' => $request->input('newPage')
        ]);

        return back();
    }

    public function view(Project $project, Page $page)
    {
        return Inertia::render('Projects/Page', [
            'project' => $project,
            'page' => $page
        ]);
    }
}
