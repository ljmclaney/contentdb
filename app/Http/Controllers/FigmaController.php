<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\Page;
use App\Models\Project;
use App\Models\Section;
use Carbon\Carbon;
use Illuminate\Http\Client\RequestException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Inertia\Inertia;

class FigmaController extends Controller
{
    public function files()
    {
        $request = Http::withHeaders([
                'X-Figma-Token' => env('FIGMA_TEMP_ACCESS_TOKEN'),
                'Content-type' => 'application/json'
            ])
            ->get('https://api.figma.com/v1/files/GZRXUIdyUhxuhJ6eaArrpB?depth=4');

        $data = $request->json();

        dd($data['document']['children'][13]['children'][39]);

    }
}
