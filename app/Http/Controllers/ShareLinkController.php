<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\Page;
use App\Models\Project;
use App\Models\ShareLink;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ShareLinkController extends Controller
{
    public function store(Request $request, Project $project)
    {
        ShareLink::create([
            'account_id' => auth()->user()->account_id,
            'project_id' => $project->id,
            'uuid' => Str::uuid()->toString()
        ]);

        $project->touch();

        return response()->json([

        ]);
    }
}
