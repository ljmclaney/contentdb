<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\Page;
use App\Models\Project;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
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

        $project->touch();

        return back();
    }

    public function view(Project $project, Page $page)
    {
        if ($page->fields->isEmpty()) {
            return redirect()->route('pageStructure', [$project->id, $page->id]);
        }

        return Inertia::render('Projects/Page', [
            'project' => $project,
            'page' => $page,
            'fields' => $page->fields()->orderBy('sort_order')->get()
        ]);
    }

    public function pageStructure(Project $project, Page $page)
    {
        return Inertia::render('Projects/Structure', [
            'project' => $project,
            'page' => $page,
            'fields' => $page->fields()->orderBy('sort_order')->get()
        ]);
    }

    public function saveFields(Request $request, Project $project, Page $page)
    {

        $page->fields()->delete();

        foreach ($request->input('fields') as $field) {

            Field::create(
                [
                    'account_id' => 1,
                    'page_id' => $page->id,
                    'type' => $field['type'],
                    'uuid' => $field['uuid'],
                    'label' => !empty($field['label']) ? $field['label'] : 'Enter content here...',
                    'instructions' => !empty($field['instructions']) ? $field['instructions'] : null,
                    'sort_order'=> $field['sort_order'],
                    'settings' => !empty($field['settings']) ? $field['settings'] : null,
                    'json_content' => !empty($field['json_content']) ? $field['json_content'] : null,
                    'html_content' => !empty($field['html_content']) ? ($field['html_content']) : null
                ]
            );
        }

        $page->touch();
        $project->touch();

        session()->flash('toast', [
            'title'   => 'Saved',
            'message' => 'Content fields saved.',
            'type'    => 'success'
        ]);

        return back();
    }
}
