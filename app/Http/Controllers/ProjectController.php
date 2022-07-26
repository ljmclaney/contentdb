<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProjectController extends Controller
{
    public function store(Request $request)
    {
        Project::create([
            'account_id' => 1,
            'name' => $request->input('newProject'),
            'uuid' => Str::uuid()->toString()
        ]);

        return back();
    }
}
