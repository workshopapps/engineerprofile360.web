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
            return $this->sendResponse(true,'Invalid Credentials',"Expected valid email and password", null, 422);
        }

        // fetch users by email
        $users = User::where('email', $email);
        // fetch employee by email
        $employee = Employee::where('email', $email);

        if ($users->count() > 0) {
            
            $checkPassword = Hash::check($password, $users->first()["password"]);

            if(!$checkPassword){
                return $this->sendResponse(true,"Invalid credentials supplied.", "password given do not match our record.", null, 400);
            }

            try {
            
                // generate access and refresh token
                $refToken = $this->helper->generateRefreshToken($users->first()["user_id"], $email);
                $accToken = $this->helper->generateAccessTokrn($users->first()["user_id"], $email);
                $uid = Str::uuid();
                // user record
                $userResp = [
                    "accessToken"=>$accToken,
                    "id"=>$users->first()["user_id"],
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

                // check if user has a company created
                $user_id = $users->first()["user_id"];
                $comp = Company::where("user_id", $user_id);

                if($comp->count() == 0){
                    // save data in company table
                    Company::create($companyData);
                }

                
                // check if user is unverified
                if($users->first()["isVerified"] < 1){
                    $this->helper->emailVerification($email,$user_id);
                    return $this->sendResponse(false, "account not verfied.. a verification link has been sent to you account.", "failed to login.. verify your account.", null, 200);
                }
                
                
                return $this->sendResponse(false, null, "User logged in successfully", $userResp, 200);
            } catch (\Exception $e) {
                print_r($e);
                return $this->sendResponse(true,$e->getMessage(),"Something went wrong loggin in, please try again", null, 500);
            }
        }
        else if ($employee->count() > 0) {
            
            $checkPassword = Hash::check($password, $employee->first()["hash"]);

            if(!$checkPassword){
                return $this->sendResponse(true,"Invalid credentials supplied.", true, 400);
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

                return $this->sendResponse(false, null, "User logged in successfully", $userResp, 200);
            } catch (\Exception $e) {
                return $this->errorResponse("Something went wrong loggin in, please try again", $e->getMessage(), 500);
            }
        }
        else{
            return $this->sendResponse(true,"No user found with this email", "user not found", null, 404);
        }
    }

    public function registerUser(Request $request){
        // validate
        $payload = json_decode($request->getContent(), true);
        $email = $payload["register"];
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
            'email' => 'required|string|email|max:255',
            'full_name' => 'required|string|min:6',
            'username' => 'required|string|min:6',
            'password' => 'required|string|min:4',
        ]);

        if($validator->fails()){
            return $this->sendResponse(true,$validator->errors(), 'invalid credentials supplied', null, 422);
        }


        // check if a user already has an account
        $userExists = User::where('email', '=', $email)->count() > 0;
        if($userExists){
            return $this->sendResponse(true,"user with this exists already exists","User with this email address already exists.", null, 400);
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

            return $this->sendResponse(false, null, "User registered successfully", $clientExtractedData, 200);
        } catch (\Exception $e) {
            return $this->sendResponse(true,$e->getMessage(), "Something went wrong registering, please try again", 500);
        }
    }

    public function verifyEmail(Request $request, $id, $token){
        // verify if that user exists
        $user = User::where("user_id", $id);
        $token = Token::where("token", $token);

        if($user->count() == 0){
            return $this->sendResponse(true, 'Invalid verification link, no user was found',"Invalid verification link", null, 404);
        }
        
        if($token->count() == 0){
            return $this->sendResponse(true, 'Invalid verification link or verification expires',"Invalid verification link....", null, 400);
        }

        // check if user has been verified already
        $users = User::where("user_id", $id);

        if($users->first()["isVerified"] == 1){
            return $this->sendResponse(true, "user email has been verified", "Email has been verified already", null, 200);
        }

        // update verified user status
        User::where("user_id", $id)->update(array("isVerified"=>true));

        return $this->sendResponse(false, null, "Email verified successfully", null, 200);
    }

    public function forgotPassword(Request $req, $email){
        // validate data
        $validator = Validator::make([
            "email"=>$email
        ],[
            'email' => 'required|string|email|max:255'
        ]);

        if($validator->fails()){
            return $this->sendResponse(true, $validator->errors(), 'Invalid email address', null, 422);
        }


        // check if a user already has an account
        $users = User::where('email', '=', $email);

        if($users->count() == 0){
            return $this->sendResponse(true, "email address already exists", "User with this email address doesnt exists.", null, 404);
        }

        // generate and send a password reset link
        $this->helper->passwordReset($email, $users->first()["user_id"]);

        // send client response
        return $this->sendResponse(false, null, "Password reset link sent",null, 200);
    }

    public function verifyPasswordReset(Request $req, $id, $token){

        $payload = json_decode($req->getContent(), true);
        $verify = false;

        if(isset($payload["verify"]) == false){
            $this->sendResponse(true, "Expected a verify param in paylaod, but got none", "Verify parameter not found.",null, 404);
        }

        // update variable 
        $verify = $payload["verify"];

        if(!$verify){
            // if verify=false, process the password reset
            // check if the user isnt trying to verify the link.
            try {
                // generate new hash password
                $pwd = $payload;
    
                // verify payload
                if(!isset($payload["new_password"])){
                    return $this->sendResponse(true, "new_password parameter is missing", "Expected a valid new_password field but got none.", null, 400);
                }
    
                // check if user and employee exists.
                $user = User::where("user_id", $id);
                $employee = Employee::where("id", $id);
                
                // generate new hash password
                $newHash = Hash::make($pwd["new_password"]);
                
                // check if token exists
                $userTokenExists = Token::where([
                    "token"=>$token,
                    "user_id"=> $id
                ])->get();
    
                // run password update on either the organization or employee
                if($user->count() > 0){
                    // if no token available
                    if($userTokenExists->count() == 0){
                        $this->sendResponse(true, "new_password parameter is missing", "Expected a valid new_password field but got none.", null, 400);
                    }

                    // Updated user password
                    User::where("user_id", $id)->update(array("password"=> $newHash));
                    
                    // removed token from database
                    Token::where("user_id", $id)->delete();
    
                    return $this->sendResponse(false, null, "Password updated", null, 200);
    
                }
                else if($employee->count() > 0){
                    // if no token available
                    if($userTokenExists->count() == 0){
                        $this->sendResponse(true, "new_password parameter is missing", "Expected a valid new_password field but got none.", null, 400);
                    }

                    // Updated user password
                    Employee::where("id", $id)->update(array("hash"=> $newHash));
    
                    // removed token from database
                    Token::where("user_id", $id)->delete();
    
                    return $this->sendResponse(false, null, "Password updated", null, 200);
                }
                else{
                    $this->sendResponse(true, "Failed to reset password,user doesnt exists.", "Failed: user not found", null, 404);
                }
            } catch (\Exception $e) {
                return $this->sendResponse(true, "Something went wrong resetting password, please try again ".$e->getMessage(), "Failed resetting password, try later.",null, 500);
            }
        }
        if($verify){
            try {
                // verify password reset link
                // check if user and employee exists.
                $user = User::where("user_id", $id);
                $employee = Employee::where("id", $id);
                
                // check if token exists
                $userTokenExists = Token::where([
                    "token"=>$token,
                    "user_id"=> $id
                ])->get();

                // if no token available
                if($userTokenExists->count() == 0){
                    return $this->sendResponse(true, "user token not found", "invalid password reset link", null, 404);
                }

                // check if token has expired or not
                $hasExpired = $userTokenExists->first()["exp"];
                if ($hasExpired > 0) {
                    return $this->sendResponse(true, "reset link expired", "invalid Password Reset Link", null, 400);
                }

                // send result back to client.
                return $this->sendResponse(false, null, "Verified", null, 200);

            } catch (\Exception $e) {
                return $this->sendResponse(true, "Couldnt Verify Password Reset Link ".$e->getMessage() , "Something went wrong verifying password reset link, please try again", null, 500);
            }
        }
    }
}

?>