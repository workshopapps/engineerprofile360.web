<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;

class AuthenticationController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        
        $credentials = $request->only('email', 'password');

        if (!auth()->validate($credentials)) {
            return response()->json([
                "error" => true,
                "code" => 400,
                "message" => "Invalid email or Password"
            ], 400);
        }

        $token = auth()->attempt($credentials);
        if (!$token) {
            return response()->json([
                'error' => 'true',
                "code" => 401,
                'message' => 'Unauthorized, Log in to continue',
            ], 401);
        }

        $user = auth()->user();
        return response()->json([
                "error" => false,
                "code" => 200,
                "message" => "User Logged in",
                "data" => [
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
                ]
            ]);
    }


    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json([
            "error" => false,
            "code" => 200,
            "message" => "User Logged out"
            ]);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return response()->json([
            "error" => false,
            "code" => 200,
            "message" => "User token refreshed",
            "data" => [
            'user' => auth()->user(),
            'authorisation' => [
                'token' => auth()->refresh(),
                'type' => 'bearer',
                ]
            ]
        ]);
    }

}
