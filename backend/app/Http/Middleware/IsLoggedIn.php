<?php

namespace App\Http\Middleware;

// use App\Helper\Helper;
use App\Http\Controllers\Controller;
use App\Helper\Helper;
use Closure;
use Illuminate\Http\Request;

class IsLoggedIn extends Controller
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
    */

    public function __construct()
    {
        $this->helper = new Helper();
        $this->CookieName = "eval360-token";
    }

    public function handle(Request $request, Closure $next)
    {        
        
        try {
            $header = $request->header("Authorization");

            if(!isset($header) || empty($header)){
                return $this->sendResponse(true,"Authorization header missing", "Unauthorised",null, 401);
            }

            $token = explode(" ", $header)[0];

            if(!isset($token) || empty($token)){
                return $this->sendResponse(true,"invalid token, missing JWT token", "Unauthorised",null, 401);
            }

            $jwt = $this->helper->decodeJwt($token);

            $user = [
                "id"=>$jwt->id,
                "email"=>$jwt->email
            ];

            //pass the attribute onto the request
            $request->merge(['user' => $user]);

            // call the next operation
            return $next($request);
        } catch (\Exception $e) {
            return $this->sendResponse(true,"Invalid Authorization header", "Invalid JWT Token ".$e->getMessage(),null, 500);
        }
    }
}
