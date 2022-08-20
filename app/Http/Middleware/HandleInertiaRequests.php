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
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'toast' => session()->get('toast', null)
        ]);

        if (auth()->check()) {

            // todo - move to login, add a check here e.g. permission not set then set it here
            $roles = auth()->user()->getRoles(session()->get('account')->name);
            $permissions = auth()->user()->allPermissions(null, session()->get('account')->name);

            $userPermissions = [];

            if ($permissions->count()) {
                foreach ($permissions as $permission) {
                    $userPermissions[$permission->name] = true;
                }
            }

            $data = array_merge($data, [
                'roles' => $roles,
                'permissions' => $userPermissions
            ]);

            $planType = null;

            if ($request->user()->account->subscribed('default')) {
                $price = $request->user()->account->subscription('default')->stripe_price;

                $planType = planType($price);
            }

            $data = array_merge($data, [
                'subscription' => [
                    'onTrial' =>    !empty($request->user()->account->subscription('default')) ? $request->user()->account->subscription('default')->onTrial() : $request->user()->account->onTrial(),
                    'trialEndsAt' => !empty($trialDate = $request->user()->account->trialEndsAt()) ? Carbon::now()->startOfDay()->diffInDays($trialDate->endOfDay(), false) : null,
                    'subscribed' => $request->user()->account->subscribed('default'),
                    'planType' => $planType
                ]
            ]);

        }

        return $data;
    }
}
