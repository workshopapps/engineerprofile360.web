<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Employee;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Str;


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
        $validator = Validator::make([
            'full_name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()){
            return $this->errorResponse('Validation Error',$validator->errors(), 422);
        }

        $payload = json_decode($request->getContent(), true);
        $email = $payload["email"];
        $username = $payload["username"];
        $password = $payload["password"];

        // check if a user already has an account
        $userExists = User::where('email', '=', $email)->count() > 0;
        if($userExists){
            return $this->errorResponse("User with this email address already exists.", true, 400);
        }

        try {
            // user data
            $uid = Str::uuid();
            $hash = Hash::make($password);
            $userResp = [
                "id"=> $uid,
                "full_name"=>$username,
                "email"=> $email,
                "username"=> $username,
                "isVerified"=> false,
                "refToken"=> "",
                "password"=> $hash,
                "role"=>1
            ];

            // client data
            $clientExtractedData = [
                "id"=> $uid,
                "full_name"=>$username,
                "email"=> $email,
                "username"=> $username,
                "isVerified"=> false,
                "role"=>1
            ];


            // create a new record in database.
            User::create($userResp);

            return $this->successResponse(true, "User registered successfully", json_encode($clientExtractedData), 200);
        } catch (\Exception $e) {
            return $this->errorResponse("Something went wrong registering, please try again", $e->getMessage(), 500);
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = Validator::make([
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        if($validator->fails()){
            return $this->errorResponse('Validation Error',$validator->errors(), 422);
        }

        $payload = json_decode($request->getContent(), true);
        $email = $payload["email"];
        $username = $payload["username"];
        $password = $payload["password"];

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
