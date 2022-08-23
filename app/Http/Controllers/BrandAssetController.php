<?php

namespace App\Http\Controllers;

use App\Models\BrandAsset;
use App\Models\Field;
use App\Models\Page;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class BrandAssetController extends Controller
{
    public function index($projectID)
    {
        $project = Project::where('account_id', session()->get('account')->id)
            ->findOrFail($projectID);

        $brandAssets = BrandAsset::where('account_id', session()->get('account')->id)
            ->where('project_id', $project->id)
            ->orderBy('name', 'desc')
            ->paginate(20);

        return Inertia::render('BrandAssets/Index', [
            'project' => $project,
            'brandAssets' => $brandAssets
        ]);
    }

    public function uploadFile(Request $request, $projectID)
    {
        $request->validate([
            'name' => ['required'],
            'file' => [
                'required',
                File::types([
                    'jpg', 'jpeg', 'png', 'gif', 'svg', 'mp4', 'mp3', 'mp4', 'wav', 'doc', 'docx', 'pdf', 'xls', 'xlsx', 'csv'
                ])
            ]
        ]);

        $project = Project::where('account_id', session()->get('account')->id)
            ->findOrFail($projectID);

        $uuid = Str::uuid()->toString();

        $file = $request->file('file');

        $savedFile = $file->storeAs('/public/files/account-' . session()->get('account')->id, $uuid . '.' . $file->extension());

        $type = 'file';

        if (in_array(strtolower($file->extension()), ['jpg', 'jpeg', 'png', 'svg', 'gif'])) {
            $type = 'image';
        }

        BrandAsset::create([
            'account_id' => session()->get('account')->id,
            'project_id' => $project->id,
            'name' => $request->input('name'),
            'uuid' => $uuid,
            'file' => str_replace('public', '', $savedFile),
            'file_type' => $type
        ]);

        return back();

    }

    public function deleteFile($projectID, $fileID)
    {
        $project = Project::where('account_id', session()->get('account')->id)
            ->findOrFail($projectID);

        $file = BrandAsset::where('account_id', session()->get('account')->id)
            ->where('project_id', $projectID)
            ->findOrFail($fileID);

        $file->delete();

        session()->flash('toast', [
            'title'   => 'Deleted',
            'message' => 'Brand asset deleted.',
            'type'    => 'success'
        ]);

        return back();
    }
}
