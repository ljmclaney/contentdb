<?php

namespace App\Http\Controllers;

use App\Models\Field;
use App\Models\Page;
use App\Models\Project;
use App\Models\Section;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

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
}
