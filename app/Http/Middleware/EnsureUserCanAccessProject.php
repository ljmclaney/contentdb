<?php

namespace App\Http\Middleware;

use App\Models\Project;
use Closure;

class EnsureUserCanAccessProject
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
        $project = $request->route('project');

        if (session()->has('project_' . $project->uuid . '_has_access')) {
            return $next($request);
        }

        if (!empty($project->password)) {
            return redirect()->route('passwordProtected', [$project->id, $project->uuid]);
        }

        if (auth()->check() && $project->account_id === auth()->user()->account_id) {
            return $next($request);
        }

        return $next($request);
    }
}
