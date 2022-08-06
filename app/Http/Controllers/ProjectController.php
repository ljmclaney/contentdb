<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required']
        ]);

        Project::create([
            'account_id' => auth()->user()->account_id,
            'name' => $request->input('name'),
            'uuid' => Str::uuid()->toString()
        ]);

        return back();
    }

    public function archive(Project $project)
    {
        $project->delete();

        session()->flash('toast', [
            'title'   => 'Project archived!',
            'message' => 'Your project has been archived.',
            'type'    => 'success'
        ]);

        return redirect()->route('projects');
    }

    public function restore(Project $project)
    {
        $project->restore();

        session()->flash('toast', [
            'title'   => 'Project restored!',
            'message' => 'Your project has been restored.',
            'type'    => 'success'
        ]);

        return redirect()->route('projects');
    }
}
