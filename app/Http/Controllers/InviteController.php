<?php

namespace App\Http\Controllers;

use App\Mail\InviteUser;
use App\Models\Account;
use App\Models\Invite;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;

class InviteController extends Controller
{
    public function viewInvite($uuid, $token)
    {
        $invite = Invite::where('uuid', $uuid)
            ->where('token', $token)
            ->where('status', 'pending')
            ->firstOrFail();

        $role = Role::where('name', $invite->role)->first();

        if ($invite->user) {

            $invite->account->users()->attach($invite->user);

            $invite->user->attachRole($role, $invite->account);

            $invite->setRestrictedProjects($invite->user, $invite->account);

            $invite->update([
                'status' => 'accepted'
            ]);

            session()->flash('toast', [
                'title'   => 'Success!',
                'message' => 'Invitation accepted.',
                'type'    => 'success'
            ]);

            return redirect()->route('projects');
        }

        return Inertia::render('Invite/Register', [
            'sender' => $invite->sender->email,
            'email' => $invite->email,
            'uuid' => $invite->uuid,
            'token' => $invite->token
        ]);

    }
}
