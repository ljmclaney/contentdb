<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Invite;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Laravel\Socialite\Facades\Socialite;
use Auth;
use Illuminate\Support\Str;

class GoogleController extends Controller
{
    public function redirect()
    {
        if (!empty(request()->query('action'))) {

            return Socialite::driver('google')
                ->with([
                    'state' => base64_encode(implode(',', [
                        request()->query('action'),
                        request()->query('uuid'),
                        request()->query('token')
                    ]))
                ])
                ->redirect();

        }

        return Socialite::driver('google')->redirect();
    }

    public function googleCallback()
    {
        try {
            $user = Socialite::driver('google')->stateless()->user();
        } catch (\Exception $e) {

            return redirect('/login');
        }

        $state = request()->input('state');

        if (!empty($state)) {

            $state = explode(',', base64_decode(request()->input('state')));

            if (is_array($state) && $state[0] === 'connect') {

                $invite = Invite::where('uuid', $state[1])
                    ->where('token', $state[2])
                    ->where('status', 'pending')
                    ->firstOrFail();

            }
        }

        if (empty($invite)) {
            return $this->handleNormalGoogleAuth($user);
        }

        return $this->handleInviteUser($invite, $user);
    }

    public function handleNormalGoogleAuth($user)
    {
        $existingUser = User::where('email', $user->email)
            ->first();

        if ($existingUser) {

            auth()->login($existingUser, true);

            if (auth()->user()->accounts->count()) {
                $account = auth()->user()->accounts[0];
            } else {

                $account = auth()->user()->account;

                $account->users()->attach(auth()->user());
            }

            session()->put('account', $account);

            return redirect()->to('/projects');
        }

        $newUser = User::create([
            'name' => $user->name,
            'email' => $user->email,
            'google_id' => $user->id,
            'password' =>  Hash::make(Str::uuid()->toString())
        ]);

        auth()->login($newUser, true);

        $account = Account::create([
            'trial_ends_at' => now()->addDays(14),
        ]);

        session()->put('account', $account);

        return redirect()->to('/projects?newUser=true');
    }

    public function handleInviteUser($invite, $user)
    {
        if ($invite->email !== $user->email) {

            session()->flash('toast', [
                'title'   => 'Error!',
                'message' => 'You logged in with a Google account that doesn\'t match the invited account.',
                'type'    => 'error'
            ]);

            return redirect()->route('viewInvite', [$invite->uuid, $invite->token]);
        }

        $role = Role::where('name', $invite->role)->first();

        $invitedUser = User::where('email', $user->email)
            ->first();

        if (!$invitedUser) {
            $invitedUser = User::create([
                'name' => $user->name,
                'email' => $user->email,
                'google_id' => $user->id,
                'password' =>  Hash::make(Str::uuid()->toString())
            ]);
        }

        auth()->login($invitedUser, true);

        $invite->account->users()->attach($invitedUser);

        $invitedUser->attachRole($role, $invite->account);

        session()->put('account', $invite->account);

        $invite->update([
            'status' => 'accepted'
        ]);

        return redirect()->to('/projects');
    }
}
