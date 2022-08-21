<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\Invite;
use App\Models\Role;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email|max:255|unique:users',
            'name' => 'max:255',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'name' => optional($request->name)
        ]);

        event(new Registered($user));

        Auth::login($user);

        if (empty($request->input('action'))) {
            $account = Account::create([
                'trial_ends_at' => now()->addDays(14),
                'name' => 'acct-' . Str::uuid()->toString()
            ]);

            session()->put('account', $account);

            return redirect('/projects?newUser=true');
        }

        if ($request->input('action') === 'connect') {

            $invite = Invite::where('uuid', $request->input('uuid'))
                ->where('token', $request->input('token'))
                ->where('status', 'pending')
                ->firstOrFail();

            $role = Role::where('name', $invite->role)->first();

            $invite->account->users()->attach(auth()->user());

            auth()->user()->attachRole($role, $invite->account);

            session()->put('account', $invite->account);

            $invite->update([
                'status' => 'accepted'
            ]);

        }


        return redirect('/projects');
    }
}
