<?php

namespace App\Http\Controllers;

use App\Mail\InviteUser;
use App\Models\Account;
use App\Models\Invite;
use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TeamMemberController extends Controller
{
    public function index()
    {

        if (!array_key_exists('manage-team-members', session()->get('permissions'))) {
            abort(403);
        }

        $account = Account::where('id', session()->get('account')->id)
            ->with('users')
            ->first();

        $users = [];

        foreach ($account->users as $user) {

            $roles = $user->getRoles($account);

            $editAllowed = false;

            if (session()->get('role') === 'owner') {
                $editAllowed = true;
            }

            if (session()->get('role') === 'team-member') {
                $editAllowed = $roles[0] !== 'owner';
            }

            if ($user->id === auth()->id()) {
                $editAllowed = false;
            }

            $users[] = [
                'name' => $user->name,
                'email' => $user->email,
                'role' => !empty($roles) ? $roles[0] : 'member',
                'edit_allowed' => $editAllowed
            ];
        }

        $invites = Invite::where('account_id', session()->get('account')->id)
            ->where('status', 'pending')
            ->get();

        $roles = [
            'owner' => [
                'name' => 'Owner',
                'description' => 'Has full access to everything, can manage billing and team members'
            ],
            'team-member'=> [
                'name' => 'Member',
                'description' => 'Can create and edit projects and pages. Can invite team members and clients'
            ],
            'client' => [
                'name' => 'Client',
                'description' => 'Can add content to pages and change page status'
            ]
        ];

        $selectableRoles = $roles;

        if (session()->get('role') !== 'owner') {
            unset($selectableRoles['owner']);
        }

        $projects = Project::where('account_id', session()->get('account')->id)
            ->get()
            ->pluck('name', 'id');

        return Inertia::render('TeamMembers/Index', [
            'users' => $users,
            'invites' => $invites,
            'roles' => $roles,
            'selectableRoles' => $selectableRoles,
            'projects' => $projects
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
            'status' => 'pending',
            'projects' => $request->input('inviteProjects')
        ]);

        Mail::to($request->input('inviteEmail'))->send(new InviteUser($invite));

        return back();
    }

    public function changeRole(Request $request)
    {

        $user = User::where('email', $request->input('user.email'))
            ->whereHas('accounts', function ($query) {
                $query->where('account_id', session('account')->id);
            })
            ->firstOrFail();

        $user->detachRole($user->role, session('account'));

        $user->attachRole($request->input('user.role'), session('account'));

        session()->flash('toast', [
            'title'   => 'User updated',
            'message' => 'The users role has been updated.',
            'type'    => 'success'
        ]);

        return back();
    }
}
