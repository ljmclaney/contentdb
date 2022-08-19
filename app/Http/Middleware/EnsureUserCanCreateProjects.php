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
        $projectCount = Project::where('account_id', $request->user()->account->id)
            ->count();

        if ($request->user()->account->onTrial()) {
            return $next($request);
        }

        if (empty($request->user()->account->subscribed('default')) && $projectCount >= 1) {
            session()->flash('toast', [
                'title'   => 'Project limit reached',
                'message' => 'You will need to archive a project before creating or restoring a project.',
                'type'    => 'error'
            ]);

            return back();
        }

        if ($request->user() && $request->user()->account->subscribed('default')) {

            $planType = planType($request->user()->account->subscription('default')->stripe_price);

            if ($planType === 'freelancer' && $projectCount >= 3) {

                session()->flash('toast', [
                    'title'   => 'Project limit reached',
                    'message' => 'You will need to archive a project before creating or restoring a project.',
                    'type'    => 'error'
                ]);

                return back();
            }

            if ($planType === 'agency' && $projectCount >= 10) {

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
