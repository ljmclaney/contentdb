<?php

namespace App\Http\Middleware;

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
            'auth' => [
                'user' => $request->user(),
                'accounts' => !empty($request->user()) ? $request->user()->accounts : null,
                'account' => session()->get('account')
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'toast' => session()->get('toast', null)
        ]);

        if (auth()->check()) {

            $role = getRoles();
            $permissions = getPermissions();

            $data = array_merge($data, [
                'userRole' => $role,
                'permissions' => $permissions
            ]);

            $planType = null;

            if (session()->get('account')->subscribed('default')) {
                $price = session()->get('account')->subscription('default')->stripe_price;

                $planType = planType($price);
            }

            $data = array_merge($data, [
                'subscription' => [
                    'onTrial' =>    !empty(session()->get('account')->subscription('default')) ? session()->get('account')->subscription('default')->onTrial() : session()->get('account')->onTrial(),
                    'trialEndsAt' => !empty($trialDate = session()->get('account')->trialEndsAt()) ? Carbon::now()->startOfDay()->diffInDays($trialDate->endOfDay(), false) : null,
                    'subscribed' => session()->get('account')->subscribed('default'),
                    'planType' => $planType
                ]
            ]);

        }

        if (session()->get('role') === 'owner' && empty(session()->get('account')->name)) {

            $data = array_merge($data, [
                'accountIncomplete' => true
            ]);
        }

        return $data;
    }
}
