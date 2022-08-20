<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Batch;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required']
        ]);

        Project::create([
            'account_id' => session()->get('account')->id,
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

    public function saveProjectPassword(Request $request, $id)
    {
        $project = Project::where('account_id', session()->get('account')->id)
            ->findOrFail($id);

        $project->update([
            'password' => $request->input('password')
        ]);

        session()->flash('toast', [
            'title'   => 'Project updated!',
            'message' => 'Sharing link password saved.',
            'type'    => 'success'
        ]);

        return back();
    }

    public function viewAllContent($id)
    {
        $project = Project::where('account_id', session()->get('account')->id)
            ->with('pages.sections.fields')
            ->findOrFail($id);

        return Inertia::render('Projects/Content', [
            'project' => $project,
            'pages' => $project->pages
        ]);
    }

    public function saveAllContent(Request $request, $id)
    {

        $project = Project::where('account_id', session()->get('account')->id)
            ->with('pages.sections.fields')
            ->findOrFail($id);

        if (empty($request->input('pages'))) {
            return back();
        }

        $fields = [];

        foreach ($request->input('pages') as $page) {
            foreach ($page['sections'] as $section) {
                foreach ($section['fields'] as $field) {

                    $fields[] = [
                        'id' => $field['id'],
                        'html_content' => $field['html_content']
                    ];
                }
            }
        }

        $fieldInstance = new Field();

        Batch::update($fieldInstance, $fields, 'id');

        session()->flash('toast', [
            'title'   => 'Saved',
            'message' => 'Content fields saved.',
            'type'    => 'success'
        ]);

        return back();
    }
}
