<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Account;
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
        return Socialite::driver('google')->redirect();
    }

    public function googleCallback()
    {
        try {
            $user = Socialite::driver('google')->user();
        } catch (\Exception $e) {
            return redirect('/login');
        }

        $existingUser = User::where('email', $user->email)
            ->first();

        if ($existingUser){
            auth()->login($existingUser, true);
            return redirect()->to('/projects');
        }

        $account = Account::create([
            'trial_ends_at' => now()->addDays(14),
        ]);

        $newUser = new User;

        $newUser->name = $user->name;
        $newUser->email = $user->email;
        $newUser->google_id = $user->id;
        $newUser->account_id = $account->id;
        $newUser->password = Hash::make(Str::uuid()->toString());

        $newUser->save();

        auth()->login($newUser, true);

        return redirect()->to('/projects');
    }
}
