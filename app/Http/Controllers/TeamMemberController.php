<?php

namespace App\Http\Controllers;

use App\Mail\InviteUser;
use App\Models\Account;
use App\Models\Invite;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
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

        $invite = Invite::create([
            'account_id' => $account->id,
            'user_id' => !empty($user) ? $user->id : null,
            'sender_user_id' => auth()->id(),
            'email' => $request->input('inviteEmail'),
            'message' => $request->input('inviteMessage'),
            'role' => $request->input('inviteRole'),
            'uuid' => Str::uuid()->toString(),
            'token' => Str::uuid()->toString(),
            'status' => 'pending'
        ]);

        Mail::to($request->input('inviteEmail'))->send(new InviteUser($invite));

        return back();
    }
}
