<?php

namespace App\Http\Middleware;

use App\Models\Account;
use App\Models\Invite;
use App\Models\Project;
use Closure;

class EnsureUserCanAddTeamMembers
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
        $account = Account::where('id', session()->get('account')->id)
            ->firstOrFail();

        $teamMembersCount = $account->users()->count();

        $invitesCount = Invite::where('account_id', session()->get('account')->id)
            ->where('status', 'pending')
            ->count();

        $teamMembersCount += $invitesCount;

        if (session()->get('account')->onTrial()) {
            return $next($request);
        }

        if (empty(session()->get('account')->subscribed('default')) && $teamMembersCount >= 1) {

            session()->flash('toast', [
                'title'   => 'Team member limit reached',
                'message' => 'You will need to upgrade your account to add more team members.',
                'type'    => 'error'
            ]);

            return back();
        }

        if ($request->user() && session()->get('account')->subscribed('default')) {

            $planType = planType(session()->get('account')->subscription('default')->stripe_price);

            if ($planType === 'freelancer' && $teamMembersCount >= 4) {

                session()->flash('toast', [
                    'title'   => 'Team member limit reached',
                    'message' => 'You will need to upgrade your account to add more team members.',
                    'type'    => 'error'
                ]);

                return back();
            }

            if ($planType === 'agency' && $teamMembersCount >= 10) {

                session()->flash('toast', [
                    'title'   => 'Team member limit reached',
                    'message' => 'You will need to upgrade your account to add more team members.',
                    'type'    => 'error'
                ]);

                return back();
            }
        }

        return $next($request);
    }
}
