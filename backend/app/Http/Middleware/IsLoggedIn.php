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
            // get token from cookies
            $jwtToken = $request->cookie($this->CookieName);
            
            // we were originally requesting token from the headers, but later change to using the cookie sent along thr browser for security reasons.

            // $header = $request->header('Authorization');
    
            // check if authorization header has been passed
            if(!isset($jwtToken) || empty($jwtToken)){
                return $this->sendResponse(true,"JWT token is missing from cookies.", "Invalid Jwt token", null, 401);
            }
    
            // decode the jwt token
            $jwt = $this->helper->decodeJwt($jwtToken);
            
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
