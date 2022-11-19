<?php

namespace App\Http\Controllers;
use App\Helper\Helper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Token;
use App\Models\User;
use DateTime;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Mailer;

class AuthenticateController extends Controller {

    public function __construct()
    {
        $this->helper = new Helper();
    }

    public function loginUser(Request $request){

        $payload = json_decode($request->getContent(), true);
        $email = $payload["email"];
        $password = $payload["password"];

        // validate credentials
        if(!isset($email) || !isset($password)){
            return $this->errorResponse('Invalid Credentials',"Expected valid ", 422);
        }

        // fetch users by email
        $users = User::where('email', $email);
        
        // check if a user has an account
        if($users->count() == 0){
            return $this->errorResponse("Invalid credentials supplied.", true, 400);
        }

        // check password
        $checkPassword = Hash::check($password, $users->first()["password"]);

        if(!$checkPassword){
            return $this->errorResponse("Invalid credentials supplied.", true, 400);
        }

        try {
            
            // generate access and refresh token
            $refToken = $this->helper->generateRefreshToken($users->first()["id"], $email);
            $accToken = $this->helper->generateAccessTokrn($users->first()["id"], $email);
            $uid = Str::uuid();
            // user record
            $userResp = [
                "accessToken"=>$accToken,
                "id"=>$users->first()["id"],
                "username"=>$users->first()["username"]
            ];

            // company data
            $companyData = [
                "id"=> $uid,
                "user_id"=>$users->first()["id"],
                "name"=> "",
                "org_mail"=> $users->first()["email"]
            ];


            // update refToken in database
            User::where('email', '=', $email)->update(array('refToken' => $refToken));

            // save data in company table
            Company::create($companyData);

            // check if user is unverified
            if($users->first()["isVerified"] < 1){
                $this->helper->emailVerification($email, $users->first()["id"]);
            }

            return $this->successResponse(true, "User logged in successfully", json_encode($userResp), 200);
        } catch (\Exception $e) {
            return $this->errorResponse("Something went wrong loggin in, please try again", $e->getMessage(), 500);
        }
    }

    public function registerUser(Request $request){
        // validate
        $payload = json_decode($request->getContent(), true);
        $email = $payload["email"];
        $username = $payload["username"];
        $password = $payload["password"];

        // validate credentials
        $validator = Validator::make([
            "email"=>$email,
            "username"=>$username,
            "password"=>$password,
        ],[
            'email' => 'required|string|email|max:255|unique:users',
            'username' => 'required|string|min:6',
            'password' => 'required|string|min:4',
        ]);

        if($validator->fails()){
            return $this->errorResponse('Invalid Credentials',$validator->errors(), 422);
        }


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

            // send a mail verification code.
            $this->helper->emailVerification($email, $uid);

            return $this->successResponse(true, "User registered successfully", json_encode($clientExtractedData), 200);
        } catch (\Exception $e) {
            return $this->errorResponse("Something went wrong registering, please try again", $e->getMessage(), 500);
        }
    }

    public function verifyEmail(Request $request, $id, $token){
        // verify if that user exists
        $user = User::where("id", $id);
        $token = Token::where("token", $token);

        if($user->count() == 0){
            return $this->errorResponse('Invalid verification link or verification expires',"Invalid verification link", 400);
        }
        if($token->count() == 0){
            return $this->errorResponse('Invalid verification link or verification expires',"Invalid verification link", 400);
        }

        // check if user has been verified already
        $users = User::where("id", $id);
        if($users->first()["isVerified"] == 1){
            return $this->successResponse(true, "Email has been verified already", null, 200);
        }

        // update verified user status
        User::where("id", $id)->update(array("isVerified"=>true));

        return $this->successResponse(true, "Email verified successfully", null, 200);
    }
}

?>