<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\Page;
use App\Models\Project;
use App\Models\Section;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ClientController extends Controller
{

    public function index()
    {
        $clients = Client::where('account_id', auth()->id())
            ->get();

        return Inertia::render('Client/Index', [
            'clients' => $clients
        ]);
    }

    public function store(Request $request, Project $project)
    {

        $request->validate([
            'name' => ['required']
        ]);

        $page = Page::create([
            'account_id' => auth()->user()->account_id,
            'project_id' => $project->id,
            'name' => $request->input('name'),
            'parent_id' => $request->input('parentPageId')
        ]);

        Section::create([
            'account_id' => auth()->user()->account_id,
            'page_id' => $page->id,
            'name' => 'Content',
            'sort_order' => 0
        ]);

        $project->touch();

        return back();
    }

    public function view(Request $request, Project $project, $pageID)
    {
        $page = Page::where('account_id', auth()->user()->account_id)
            ->with('sections.fields')
            ->findOrFail($pageID);

        if ($page->fields->isEmpty()) {
            return redirect()->route('pageStructure', [$project->id, $page->id]);
        }

        if (!$page->sections->isEmpty()) {
            $fields = $page->sections[0]->fields->sortBy('sort_order')->values();
        }

        $sections = $page->sections->sortBy('sort_order')->values();

        return Inertia::render('Projects/Page', [
            'project' => $project,
            'page' => $page,
            'sections' => $sections,
            'fields' => !empty($fields) ? $fields : null,
            'selectedSection' => !$page->sections->isEmpty() ? $page->sections[0] : null
        ]);
    }

    public function viewSection(Project $project, $pageID, $sectionID)
    {
        $page = Page::where('account_id', auth()->user()->account_id)
            ->with('sections')->with('sections.fields', function($query) {
                $query->orderBy('sort_order');
            })
            ->with('sections.fields', function($query) {
                $query->orderBy('sort_order');
            })
            ->findOrFail($pageID);

        $section = $page->sections->where('id', $sectionID)->first();

        if ($section->fields->isEmpty()) {
            return redirect()->route('pageStructureSection', [$project->id, $page->id, $sectionID]);
        }

        return Inertia::render('Projects/Page', [
            'project' => $project,
            'page' => $page,
            'sections' => $page->sections,
            'fields' => $section->fields,
            'selectedSection' => $section
        ]);
    }

    public function pageStructure(Project $project, $pageID)
    {
        $page = Page::where('account_id', auth()->user()->account_id)
            ->with('sections')->with('sections.fields', function($query) {
                $query->orderBy('sort_order');
            })
            ->with('sections.fields', function($query) {
                $query->orderBy('sort_order');
            })
            ->findOrFail($pageID);

        if (!$page->sections->isEmpty()) {
            $fields = $page->sections[0]->fields;
        }

        return Inertia::render('Projects/Structure', [
            'project' => $project,
            'page' => $page,
            'sections' => $page->sections,
            'fields' => !empty($fields) ? $fields : null,
            'selectedSection' => !empty($page->sections) ? $page->sections[0] : null
        ]);
    }

    public function pageStructureSection(Project $project,$pageID, $sectionID)
    {
        $page = Page::where('account_id', auth()->user()->account_id)
            ->with('sections')->with('sections.fields', function($query) {
                $query->orderBy('sort_order');
            })
            ->with('sections.fields', function($query) {
                $query->orderBy('sort_order');
            })
            ->findOrFail($pageID);

        $section = $page->sections->where('id', $sectionID)->first();

        return Inertia::render('Projects/Structure', [
            'project' => $project,
            'page' => $page,
            'sections' => $page->sections,
            'fields' => $section->fields,
            'selectedSection' => $section
        ]);
    }

    public function saveFields(Request $request, Project $project, Page $page)
    {

        $section = Section::findOrFail($request->input('sectionID'));

        foreach ($request->input('fields') as $field) {

            $data = [
                'account_id' => !empty($field['account_id']) ? $field['account_id'] : auth()->user()->account_id,
                'page_id' => $page->id,
                'section_id' => $section->id,
                'type' => $field['type'],
                'uuid' => $field['uuid'],
                'label' => !empty($field['label']) ? $field['label'] : 'Enter content here',
                'instructions' => !empty($field['instructions']) ? $field['instructions'] : null,
                'sort_order'=> $field['sort_order'],
                'settings' => !empty($field['settings']) ? $field['settings'] : null,
                'json_content' => !empty($field['json_content']) ? $field['json_content'] : null,
                'html_content' => !empty($field['html_content']) ? ($field['html_content']) : null
            ];

            if (!empty($field['id'])) {
                Field::where('id', $field['id'])
                    ->update($data);
                continue;
            }

            Field::create($data);
        }

        if (!empty($request->input('deletedFields'))) {
            Field::destroy($request->input('deletedFields'));
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

    public function saveSection(Request $request, Project $project, Page $page)
    {
        $lastSection = $page->sections->last();

        Section::create([
            'account_id' => auth()->user()->id,
            'page_id' => $page->id,
            'name' => $request->input('newSection'),
            'sort_order' => !empty($lastSection) ? $lastSection->sort_order + 1 : 0
        ]);

        $page->touch();
        $project->touch();

        session()->flash('toast', [
            'title'   => 'Saved',
            'message' => 'Section saved.',
            'type'    => 'success'
        ]);

        return back();
    }

    public function uploadImage(Request $request, Project $project, Page $page)
    {
        $uuid = Str::uuid()->toString();

        $file = $request->file('image');

        $image = $file->storeAs('/public/files/account-' . $request->input('account_id'), $uuid . '.' . $file->extension());

        $field = Field::where('id', $request->input('field_id'))->first();

        $images = !empty($field->json_content) ? $field->json_content : [];

        $type = 'file';

        if (in_array(strtolower($file->extension()), ['jpg', 'jpeg', 'png', 'svg', 'gif'])) {
            $type = 'image';
        }

        $newImage = [
            'uuid' => $uuid,
            'file' => str_replace('public', '', $image),
            'type' => $type
        ];

        array_unshift($images, $newImage);

        $field->update([
            'json_content' => $images
        ]);

        $field = Field::where('id', $request->input('field_id'))->first();

        return response()->json([
           'files' => $field->json_content
        ]);

    }

    public function update(Request $request, Project $project, $pageID)
    {

        $request->validate([
            'name' => ['required']
        ]);

        $page = Page::where('account_id', auth()->user()->account_id)
            ->with('sections.fields')
            ->findOrFail($pageID);

        $page->update([
            'name' => $request->input('name'),
            'parent_id' => $request->input('parent_id')
        ]);

        session()->flash('toast', [
            'title'   => 'Updated',
            'message' => 'Page updated.',
            'type'    => 'success'
        ]);

        return back();
    }

    public function delete(Request $request, Project $project, $pageID)
    {
        $page = Page::where('account_id', auth()->user()->account_id)
            ->with('sections.fields')
            ->findOrFail($pageID);

        $page->delete();

        session()->flash('toast', [
            'title'   => 'Deleted',
            'message' => 'Page paged.',
            'type'    => 'success'
        ]);

        return back();
    }

    public function markAsCompleted(Request $request, Project $project, $pageID)
    {
        $page = Page::findOrFail($pageID);

        $page->update([
            'status' => 'completed'
        ]);

        session()->flash('toast', [
            'title'   => 'Page updated',
            'message' => 'Page marked as completed.',
            'type'    => 'success'
        ]);

        return back();
    }
}
