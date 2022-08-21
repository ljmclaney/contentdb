<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Field;
use App\Models\Page;
use App\Models\Project;
use App\Models\Section;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use function Clue\StreamFilter\fun;

class AccountController extends Controller
{
    public function upgradeAccount()
    {
        return Inertia::render('Account/Upgrade');
    }

    public function selectPlan(Request $request, $planName)
    {
        switch ($planName) {
            case 'freelancer-monthly':
                $plan = env('STRIPE_FREELANCER_PLAN');
                break;
            case 'agency-monthly':
                $plan = env('STRIPE_AGENCY_PLAN');
                break;
            case 'freelancer-annual':
                $plan = env('STRIPE_FREELANCER_ANNUAL_PLAN');
                break;
            case 'agency-annual':
                $plan = env('STRIPE_AGENCY_ANNUAL_PLAN');
                break;
            default: $plan = env('STRIPE_AGENCY_PLAN');
        }

        $request->user()->account->createOrGetStripeCustomer();

        return $request->user()->account
        ->newSubscription('default', $plan)
        ->checkout([
            'success_url' => route('projects'),
            'cancel_url' => route('upgradeAccount'),
        ]);
    }

    public function viewAccounts()
    {
        return Inertia::render('Account/Index', [
            'accounts' => auth()->user()->accounts,
        ]);
    }

    public function switchAccount($accountID)
    {
        $account = Account::where('id', $accountID)
            ->whereHas('users', function ($query) {
                $query->where('user_id', auth()->id());
            })->firstOrFail();

        session()->put('account', $account);

        return redirect()->route('projects');
    }

    public function accountDetails(Request $request)
    {
        $request->validate([
            'userName' => ['required'],
            'accountName' => ['required']
        ]);

        $account = Account::where('id', session()->get('account')->id)
            ->firstOrFail();

        $account = tap($account)->update([
            'name' => $request->input('accountName')
        ]);

        session()->put('account', $account);

        auth()->user()->update([
            'name' => $request->input('userName')
        ]);

        return back();
    }
}
