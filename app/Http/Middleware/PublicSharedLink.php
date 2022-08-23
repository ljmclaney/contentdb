<?php

namespace App\Http\Middleware;

use App\Models\Project;
use Closure;

class PublicSharedLink
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
        if (request()->segment(1) !== 'share') {
            return $next($request);
        }

        $projectID = request()->segment(2);
        $uuid = request()->segment(3);

        $project = Project::where('uuid', $uuid)
            ->with('account')
            ->findOrFail($projectID);

        session()->put('account', $project->account);

        return $next($request);
    }
}
