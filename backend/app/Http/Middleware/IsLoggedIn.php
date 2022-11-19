<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Controller;
// use App\Helper\Helper;
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
        $this->helper = new App\Helper\Helper;
    }

    public function handle(Request $request, Closure $next)
    {

        // get token from request
        $header = $request->header('Authorization');

        // check if authorization header has been passed
        if(!isset($header)){
            return $this->errorResponse("Authorization header is missing", "Authorizaion is missing", 403);
        }

        $token = explode(" ", $header)[1];

        try {
            $jwt = $this->helper->decodeJwt($token);
            return var_dump($jwt);
        } catch (\Exception $e) {
            return print($e->getMessage());
        }
        return $next($request);
    }
}
