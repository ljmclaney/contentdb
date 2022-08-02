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
        };

        return $planType;
    }
}