<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Controller;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;

class isOverAllAdmin extends Controller
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        /**
         * EMPLOYEE - 1
         * ORGANIZATION - 2
         * OVERALL ADMIN - 3
         */
        try {
            $user = $request->user;
            $uid = $user["id"];
    
            // check if user exists.
            $org_user = User::where("user_id", $uid);
            
            // if not user is found
            if($org_user->count() == 0){
                return $this->sendResponse(true,"Access Denied, user not found.", "Not permitted to perform this action.",null, 403);
            }

            // if the user doesnt have the overall admin level privilege
            if($org_user->first()["role"] != 3 && $org_user->first()["isAdmin"] != 1){
                return $this->sendResponse(true,"Access Denied.", "Not permitted to perform this action.",null, 403);
            }
            
            return $next($request);

        } catch (\Exception $e) {
            return $this->sendResponse(true,"Something went wrong, please try again later/.", $e->getMessage(),null, 500);
        }
    }
}
