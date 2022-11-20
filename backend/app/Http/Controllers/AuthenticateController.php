<?php

namespace App\Http\Controllers;
use App\Helper\Helper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Employee;
use App\Models\Token;
use App\Models\User;
use DateTime;
use Illuminate\Http\Response;
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

    public function UserAndEmployeeLogin(Request $request){

        $payload = json_decode($request->getContent(), true);
        $email = $payload["email"];
        $password = $payload["password"];

        // validate credentials
        if(!isset($email) || !isset($password)){
            return $this->errorResponse('Invalid Credentials',"Expected valid ", 422);
        }

        // fetch users by email
        $users = User::where('email', $email);
        // fetch employee by email
        $employee = Employee::where('email', $email);

        if ($users->count() > 0) {
            
            $checkPassword = Hash::check($password, $users->first()["password"]);

            if(!$checkPassword){
                return $this->errorResponse("Invalid credentials supplied.", true, 400);
            }

            try {
            
                // generate access and refresh token
                $refToken = $this->helper->generateRefreshToken($users->first()["user_id"], $email);
                $accToken = $this->helper->generateAccessTokrn($users->first()["user_id"], $email);
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
        else if ($employee->count() > 0) {
            
            $checkPassword = Hash::check($password, $employee->first()["hash"]);

            if(!$checkPassword){
                return $this->errorResponse("Invalid credentials supplied.", true, 400);
            }

            try {
            
                // generate access and refresh token
                $refToken = $this->helper->generateRefreshToken($employee->first()["id"], $email);
                $accToken = $this->helper->generateAccessTokrn($employee->first()["id"], $email);
                $uid = Str::uuid();
                // user record
                $userResp = [
                    "accessToken"=>$accToken,
                    "id"=>$users->first()["id"],
                    "username"=>$users->first()["username"]
                ];


                // update refToken in database
                Employee::where('email', '=', $email)->update(array('refToken' => $refToken));

                return $this->successResponse(true, "User logged in successfully", json_encode($userResp), 200);
            } catch (\Exception $e) {
                return $this->errorResponse("Something went wrong loggin in, please try again", $e->getMessage(), 500);
            }
        }
        else{
            return $this->errorResponse("No user found with this email...", true, 404);
        }
    }

    public function registerUser(Request $request){
        // validate
        $payload = json_decode($request->getContent(), true);
        $email = $payload["email"];
        $username = $payload["username"];
        $fullname = $payload["full_name"];
        $password = $payload["password"];

        // validate credentials
        $validator = Validator::make([
            "email"=>$email,
            "username"=>$username,
            "full_name"=>$fullname,
            "password"=>$password,
        ],[
            'email' => 'required|string|email|max:255|unique:users',
            'full_name' => 'required|string|min:6',
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
                "user_id"=> $uid,
                "full_name"=>$fullname,
                "email"=> $email,
                "username"=> $username,
                "isVerified"=> false,
                "refToken"=> "",
                "password"=> $hash,
                "role"=>1
            ];

            // client data
            $clientExtractedData = [
                "user_id"=> $uid,
                "full_name"=>$fullname,
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

    public function forgotPassword(Request $req, $email){
        // validate data
        $validator = Validator::make([
            "email"=>$email
        ],[
            'email' => 'required|string|email|max:255'
        ]);

        if($validator->fails()){
            return $this->errorResponse('Invalid email address',$validator->errors(), 422);
        }


        // check if a user already has an account
        $users = User::where('email', '=', $email);

        if($users->count() == 0){
            return $this->errorResponse("User with this email address doesnt exists.", true, 404);
        }

        // generate and send a password reset link
        $this->helper->passwordReset($email, $users->first()["user_id"]);

        // send client response
        return $this->successResponse(true, "Password reset link sent",null, 200);
    }

    public function verifyPasswordReset(Request $req, $id, $token){

        try {
            // generate new hash password
            $payload = json_decode($req->getContent(), true);

            // verify payload
            if(!isset($payload["new_password"]) || !isset($payload["type"])){
                return $this->errorResponse("Payload are missing", "Invalid payload specified", 400);
            }

            $newHash = Hash::make($payload["new_password"]);
            $allToken = Token::all();
            $userTokenExists = Token::where("user_id", $id);
            
            // check if token exists
            if ($userTokenExists->count() == 0) {
                return $this->errorResponse('Invalid password reset link. user token not found',"", 400);
            }
            
            $hasExpired = $userTokenExists->first()["exp"];
            $count = 0;

            // update table
            if($payload["type"] == "organization"){

                $userExists = User::where("user_id", $id);


                if ($userExists->count() == 0) {
                    return $this->errorResponse('Invalid password reset link. user not found',"", 404);
                }

                if ($hasExpired > 0) {
                    return $this->errorResponse('Invalid password reset link',"", 400);
                }

                // check if token match db record
                for ($i=0; $i < count($allToken); $i++) { 
                    if($allToken[$i]["token"] == $token){
                        $count+=1;
                    }
                }
                if($count == 0){
                    return $this->errorResponse('Invalid password reset link',"", 404);
                }

                try {
                    
                    // update users table
                    User::where("user_id", $id)->update(array("password"=>$newHash));

                    // removed token from database
                    Token::where("user_id", $id)->delete();

                    return $this->successResponse(true, "Password reset successfully", null, 200);
                } catch (\Exception $e) {
                    return $this->errorResponse("Something went wrong resetting password, please try again", $e->getMessage(), 500);
                }
            }
            else if($payload["type"] == "employee"){
                try {
                    $employeeExists = Employee::where("id", $id);

                    if ($userTokenExists->count() == 0) {
                        return $this->errorResponse('Invalid password reset link. user token not found',"", 400);
                    }

                    if ($employeeExists->count() == 0) {
                        return $this->errorResponse('Invalid password reset link. user not found',"", 404);
                    }

                    if ($hasExpired > 0) {
                        return $this->errorResponse('Invalid password reset link',"", 400);
                    }

                    // check if token match db record
                    for ($i=0; $i < count($allToken); $i++) { 
                        if($allToken[$i]["token"] == $token){
                            $count+=1;
                        }
                    }
                    if($count == 0){
                        return $this->errorResponse('Invalid password reset link',"", 404);
                    }

                    // update users table
                    Employee::where("user_id", $id)->update(array("hash"=>$newHash));

                    return $this->successResponse(true, "Password reset successfully", null, 200);
                } catch (\Exception $e) {
                    return $this->errorResponse("Something went wrong resetting password, please try again", $e->getMessage(), 500);
                }
            }
            else{
                return $this->errorResponse("Something went wrong resetting password, please try again", "Invalid type ", 400);
            }
        } catch (\Throwable $e) {
            return $this->errorResponse("Something went wrong resetting password, please try again", "Invalid type ".$e->getMessage(), 500);
        }

    }
}

?>