<?php

namespace App\Http\Controllers;

use App\Models\Client;
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

        return Inertia::render('Clients/Index', [
            'clients' => $clients
        ]);
    }

    public function createClient(Request $request, Project $project)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email']
        ]);

         Client::create([
             'account_id' => auth()->user()->account_id,
             'name' => $request->input('name'),
             'email' => $request->input('email'),
             'uuid' => Str::uuid()->toString()
        ]);

        return back();
    }

    public function updateClient(Request $request, $id)
    {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email']
        ]);

        $client = Client::where('account_id', auth()->user()->account_id)
            ->findOrFail($id);

        $client->update([
            'name' => $request->input('name'),
            'email' => $request->input('email')
        ]);

        session()->flash('toast', [
            'title'   => 'Updated',
            'message' => 'Client updated.',
            'type'    => 'success'
        ]);

        return back();
    }

    public function deleteClient(Request $request, $id)
    {
        $client = Client::where('account_id', auth()->user()->account_id)
            ->findOrFail($id);

        $client->delete();

        session()->flash('toast', [
            'title'   => 'Deleted',
            'message' => 'Client deleted.',
            'type'    => 'success'
        ]);

        return back();
    }
}
