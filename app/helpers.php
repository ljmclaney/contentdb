<?php

if (! function_exists('planType')) {
    function planType($planPrice) {
        $planType = null;

        switch ($planPrice) {
            case $planPrice === env('STRIPE_FREELANCER_PLAN') || $planPrice === env('STRIPE_FREELANCER_ANNUAL_PLAN'):
                $planType = 'freelancer';
                break;
            case $planPrice === env('STRIPE_AGENCY_PLAN') || $planPrice === env('STRIPE_AGENCY_ANNUAL_PLAN'):
                $planType = 'agency';
                break;
            case $planPrice === env('STRIPE_UNLIMITED_PLAN') || $planPrice === env('STRIPE_UNLIMITED_ANNUAL_PLAN'):
                $planType = 'unlimited';
                break;
        };

        return $planType;
    }
}

if (! function_exists('getPermissions')) {
    function getPermissions()
    {

        if (session()->has('permissions')) {

            return session()->get('permissions');
        }

        $permissions = auth()->user()->allPermissions(null, session()->get('account')->name);

        $userPermissions = [];

        if ($permissions->count()) {
            foreach ($permissions as $permission) {
                $userPermissions[$permission->name] = true;
            }
        }

        session()->put('permissions', $userPermissions);

        return $userPermissions;
    }
}

if (! function_exists('getRoles')) {
    function getRoles()
    {

        if (session()->has('roles')) {

            return session()->get('roles');
        }

        $roles = auth()->user()->getRoles(session()->get('account')->name);

        session()->put('role', $roles[0]);

        return $roles;
    }
}
