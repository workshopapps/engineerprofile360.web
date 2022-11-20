<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Controller;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;

class IsAdmin extends Controller
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */

    /**
     * 
     * This middleware should be used along with the <isloggedin> middleware.
     * 
     * It must be used only for authenticated users and can be called this way.
     * 
     * ->middleware("isloggedin", "isadmin")
     */
    public function handle(Request $request, Closure $next)
    {
        try {
            $user = $request->user;
            $uid = $user["id"];
    
            // check if user exists.
            $org_user = User::where("id", $uid)->first();
    
            // if not user is found
            if($org_user->count() == 0 || $user["role"] != 1){
                return $this->errorResponse("Access Denied ", "Not permitted to perform this action.", 403);
            }

            return $next($request);

        } catch (\Exception $e) {
            return $this->errorResponse("Something went wrong, please try again later/.", $e->getMessage(), 500);
        }

    }
}
