<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class BrandAssetController extends Controller
{
    public function index($projectID)
    {
        $brandAssets = BrandAsset::where('account_id', session()->get('account')->id)
            ->where('project_id', $projectID)
            ->orderBy('name', 'desc')
            ->paginate(20);

        return Inertia::render('BrandAssets/Index', [
            'brandAssets' => $brandAssets
        ]);
    }

}
