<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;

class AuthenticationController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['register', 'login','setPassword']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request){
        $request->validate([
            'full_name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'full_name' => $request->full_name,
            'username' => $request->username,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            "error" => false,
            "code" => 200,
            "message" => "User Registration successfull"
        ]);
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

    public function setEmployeePassword(Request $request){
        $request->validate([
            'email' => 'required|email|exists:employees,email',
            'password' => 'required|string|min:6',
        ]);

        $employee = Employee::whereEmail($request->email)->first();

        $user = User::create([
            'full_name' => $employee->full_name,
            'username' => $employee->username,
            'email' => $employee->email,
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            "error" => false,
            "code" => 200,
            "message" => "Employee password update was successfull"
        ]);
    }

}
