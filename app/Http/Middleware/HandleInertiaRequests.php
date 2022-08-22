<?php

namespace App\Http\Middleware;

use App\Models\Account;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {

        $data =  array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'toast' => session()->get('toast', null)
        ]);

        if (auth()->check()) {

            // get fresh account data e.g subscription
            $account = Account::where('id', session()->get('account')->id)
                ->first();

            session()->put('account', $account);

            $data = array_merge($data, [
                'auth' => [
                    'user' => $request->user(),
                    'accounts' => !empty($request->user()) ? $request->user()->accounts : null,
                    'account' => $account
                ]
            ]);

            $role = getRoles();
            $permissions = getPermissions();

            $data = array_merge($data, [
                'userRole' => $role,
                'permissions' => $permissions
            ]);

            $planType = null;

            if ($account->subscribed('default')) {
                $price = $account->subscription('default')->stripe_price;

                $planType = planType($price);
            }

            $data = array_merge($data, [
                'subscription' => [
                    'onTrial' =>    !empty($account->subscription('default')) ? $account->subscription('default')->onTrial() : $account->onTrial(),
                    'trialEndsAt' => !empty($trialDate = $account->trialEndsAt()) ? Carbon::now()->startOfDay()->diffInDays($trialDate->endOfDay(), false) : null,
                    'subscribed' => $account->subscribed('default'),
                    'planType' => $planType
                ]
            ]);

        }

        if (session()->get('role') === 'owner' && empty($account->name)) {

            $data = array_merge($data, [
                'accountIncomplete' => true
            ]);
        }

        return $data;
    }
}
