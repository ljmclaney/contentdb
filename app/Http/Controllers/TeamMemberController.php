<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TeamMemberController extends Controller
{
    public function index() {

        if (!array_key_exists('manage-team-members', session()->get('permissions'))) {
            abort(403);
        }

        $account = Account::where('id', session()->get('account')->id)
            ->with('users')
            ->first();

        $users = [];

        foreach ($account->users as $user) {

            $roles = $user->getRoles($account->name);

            $users[] = [
                'name' => $user->name,
                'email' => $user->email,
                'role' => $roles[0],
                'edit_allowed' => $user->id !== auth()->id()
            ];
        }

        return Inertia::render('TeamMembers/Index', [
            'users' => $users
        ]);
    }

    public function inviteMember(Request $request)
    {
        $account = Account::where('id', session()->get('account')->id)
            ->with('users')
            ->first();

        $user = User::where('email', $request->input('inviteEmail'))
            ->first();

        if ($user) {
            $account->users()->attach($user);

            // send invite email

            return back();
        }

        $user = User::create([
            'email' => $request->input('inviteEmail'),
            'password' => Hash::make(Str::uuid()->toString()),
        ]);

        $account->users()->attach($user);

        // send invite email

        return back();
    }
}
