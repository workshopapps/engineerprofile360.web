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
    }

    public function handle(Request $request, Closure $next)
    {        
        try {
            // get token from request
            $header = $request->header('Authorization');
    
            // check if authorization header has been passed
            if(!isset($header)){
                return $this->sendResponse(true,"Authorization header is missing", "Authorizaion is missing", null, 403);
            }
    
            // split header and extract the jwt token
            $token = explode(" ", $header)[1];
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
