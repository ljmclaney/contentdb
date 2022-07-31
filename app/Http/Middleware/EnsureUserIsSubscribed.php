<?php

namespace App\Http\Middleware;

use Closure;

class EnsureUserIsSubscribed
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->user() && !$request->user()->account->subscribed('default') && !$request->user()->account->subscription('default')->onTrial()) {
            return redirect()->route('upgradeAccount');
        }

        return $next($request);
    }
}
