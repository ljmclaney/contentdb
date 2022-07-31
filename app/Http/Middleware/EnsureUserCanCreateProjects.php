<?php

namespace App\Http\Middleware;

use App\Models\Project;
use Closure;

class EnsureUserCanCreateProjects
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
        if ($request->user() && $request->user()->account->subscribed('default')) {

            $planType = planType($request->user()->account->subscription('default')->stripe_prices);

            $projectCount = Project::where('account_id', $request->user()->account->id)->count();

            if ($planType === 'freelancer' && $projectCount >= 2) {

                session()->flash('toast', [
                    'title'   => 'Project limit reached',
                    'message' => 'You will need to archive a project before creating or restoring a project.',
                    'type'    => 'error'
                ]);

                return back();
            }
        }

        return $next($request);
    }
}
