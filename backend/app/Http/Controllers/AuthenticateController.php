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
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;
use Mailer;

/**
 * @User-Roles
 *
 * 1 - EMPLOYEE
 * 2 - ORGANIZATION
 * 3 - ADMIN
 */

class AuthenticateController extends Controller {

    protected $EMP_ROLE = 1;
    protected $ORG_ROLE = 2;
    protected $ADMIN_ROLE = 3;

    public function __construct()
    {
        $this->helper = new Helper();
        $this->CookieName = "eval360-token";
        $this->CookieExp = 20; // expire in 20 minutes
    }

    protected function isExpired($expireTime){
        $now = time();
        return $now > intval($expireTime) ? true : false;
    }

    protected function validateRegisteration($email="", $username="", $fullname="", $password=""){
        $validator = Validator::make([
            "email"=>$email,
            "username"=>$username,
            "full_name"=>$fullname,
            "password"=>$password,
        ],[
            'email' => 'required|string|email|max:255',
            'full_name' => 'required|string|min:6',
            'username' => 'required|string|min:6',
            'password' => 'required|string|min:6',
        ]);

        return $validator;
    }

    protected function validateLogin($email="", $password=""){
        $validator = Validator::make([
            "email"=>$email,
            "password"=>$password,
        ],[
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:6',
        ]);

        return $validator;
    }

    // handle employee login
    public function EmployeeLogin(Request $request){
        try {

            $payload = json_decode($request->getContent(), true);
            $email = $payload["email"];
            $password = $payload["password"];

            $validator = $this->validateLogin($email, $password);

            if($validator->fails()){
                return $this->sendResponse(true,$validator->errors(), 'invalid credentials supplied', null, 422);
            }

            $employees = Employee::where('email', $email);

            if ($employees->count() > 0) {

                $checkPassword = Hash::check($password, $employees->first()["hash"]);

                if(!$checkPassword){
                    return $this->sendResponse(true,"Invalid credentials supplied.", "password given do not match our record.", null, 400);
                }

                try {

                    // generate access and refresh token
                    $refToken = $this->helper->generateRefreshToken($employees->first()["id"], $email);
                    $accToken = $this->helper->generateAccessToken($employees->first()["id"], $email);
                    $uid = Str::uuid();
                    // user record
                    $userResp = [
                        "accessToken"=>$accToken,
                        "id"=>$employees->first()["id"],
                        "role"=>$employees->first()["role"],
                        "username"=>$employees->first()["username"]
                    ];


                    // update refToken in database
                    Employee::where('email', '=', $email)->update(array('refToken' => $refToken, "hasloggedin"=>true));

                    // set http-only cookie
                    $cookieVal = $accToken;

                    // send newly generated token
                    return $this->sendResponseWithCookie(false, null, "employee logged in successfully", $userResp, 200, $this->CookieName, $cookieVal, $this->CookieExp);
                } catch (\Exception $e) {
                    // print_r($e);
                    return $this->sendResponse(true,$e->getMessage(),"Something went wrong loggin in, please try again", null, 500);
                }
            }
            else{
                return $this->sendResponse(true,"No employee found with this email", "user not found", null, 404);
            }

        } catch (\Exception $e) {
            return $this->sendResponse(true,"Something went wrong login in ".$e->getMessage(), "employee not found", null, 500);
        }
    }
    // handle overall Eval360 admin login
    public function OverallAdminLogin(Request $request){
        try {
            
            $payload = json_decode($request->getContent(), true);
            $email = $payload["email"];
            $password = $payload["password"];

            $validator = $this->validateLogin($email, $password);

            if($validator->fails()){
                return $this->sendResponse(true,$validator->errors(), 'invalid credentials supplied', null, 422);
            }

            $users = User::where('email', $email)->where("isAdmin", true);

            if ($users->count() > 0) {
                
                $checkPassword = Hash::check($password, $users->first()["password"]);
    
                if(!$checkPassword){
                    return $this->sendResponse(true,"Invalid credentials supplied.", "password given do not match our record.", null, 400);
                }
    
                try {
                
                    // generate access and refresh token
                    $refToken = $this->helper->generateRefreshToken($users->first()["user_id"], $email);
                    $accToken = $this->helper->generateAccessToken($users->first()["user_id"], $email);
                    $uid = Str::uuid();
                    // user record
                    $userResp = [
                        "accessToken"=>$accToken,
                        "id"=>$users->first()["user_id"],
                        "role"=>$users->first()["role"],
                        "username"=>$users->first()["username"],
                        "isAdmin"=>$users->first()["isAdmin"]
                    ];
    
                    // company data
                    $companyData = [
                        "id"=> $uid,
                        "user_id"=>$users->first()["user_id"],
                        "name"=> $users->first()["username"],
                        "org_mail"=> $users->first()["email"]
                    ];
    
    
                    // update refToken in database
                    User::where('email', '=', $email)->update(array('refToken' => $refToken));
    
                    // check if user has a company created
                    $user_id = $users->first()["user_id"];
                    $comp = Company::where("user_id", $user_id);
    
                    if($comp->count() == 0){
                        Company::create($companyData);
                    }
    
                    
                    // // check if user is unverified
                    // if($users->first()["isVerified"] < 1){
                    //     $this->helper->emailVerification($email,$user_id);
                    //     return $this->sendResponse(true, "account not verfied.. a verification link has been sent to you account.", "failed to login.. verify your account.", null, 200);
                    // }
                    
                    // set http-only cookie
                    $cookieVal = $accToken;

                    // send newly generated token
                    return $this->sendResponseWithCookie(false, null, "admin logged in successfully", $userResp, 200, $this->CookieName, $cookieVal, $this->CookieExp);
                } catch (\Exception $e) {
                    print_r($e);
                    return $this->sendResponse(true,$e->getMessage(),"Something went wrong loggin in, please try again", null, 500);
                }
            }
            else{
                return $this->sendResponse(true,"No admin found with this email", "admin not found", null, 404);
            }

        } catch (\Exception $e) {
            return $this->sendResponse(true,"Something went wrong login in ".$e->getMessage(), "admin not found", null, 500);
        }
    }

    // handle organization login
    public function OrganizationLogin(Request $request){
        try {

            $payload = json_decode($request->getContent(), true);
            $email = $payload["email"];
            $password = $payload["password"];

            $validator = $this->validateLogin($email, $password);

            if($validator->fails()){
                return $this->sendResponse(true,$validator->errors(), 'invalid credentials supplied', null, 422);
            }

            $users = User::where('email', $email);

            if ($users->count() > 0) {

                $checkPassword = Hash::check($password, $users->first()["password"]);

                if(!$checkPassword){
                    return $this->sendResponse(true,"Invalid credentials supplied.", "password given do not match our record.", null, 400);
                }

                try {

                    // generate access and refresh token
                    $refToken = $this->helper->generateRefreshToken($users->first()["user_id"], $email);
                    $accToken = $this->helper->generateAccessToken($users->first()["user_id"], $email);
                    $uid = Str::uuid();
                    // user record
                    $userResp = [
                        "accessToken"=>$accToken,
                        "id"=>$users->first()["user_id"],
                        "role"=>$users->first()["role"],
                        "username"=>$users->first()["username"],
                        "isAdmin"=>$users->first()["isAdmin"],
                    ];

                    // company data
                    $companyData = [
                        "id"=> $uid,
                        "user_id"=>$users->first()["user_id"],
                        "name"=> $users->first()["username"],
                        "org_mail"=> $users->first()["email"]
                    ];


                    // update refToken in database
                    User::where('email', '=', $email)->update(array('refToken' => $refToken));

                    // check if user has a company created
                    $user_id = $users->first()["user_id"];
                    $comp = Company::where("user_id", $user_id);

                    if($comp->count() == 0){
                        Company::create($companyData);
                    }


                    // check if user is unverified
                    if($users->first()["isVerified"] < 1){
                        $this->helper->emailVerification($email,$user_id);
                        return $this->sendResponse(true, "account not verfied.. a verification link has been sent to you account.", "failed to login.. verify your account.", null, 200);
                    }

                    // set http-only cookie
                    $cookieVal = $accToken;

                    // send newly generated token
                    return $this->sendResponseWithCookie(false, null, "organization logged in successfully", $userResp, 200, $this->CookieName, $cookieVal, $this->CookieExp);
                } catch (\Exception $e) {
                    print_r($e);
                    return $this->sendResponse(true,$e->getMessage(),"Something went wrong loggin in, please try again", null, 500);
                }
            }
            else{
                return $this->sendResponse(true,"No organization found with this email", "organization not found", null, 404);
            }

        } catch (\Exception $e) {
            return $this->sendResponse(true,"Something went wrong login in ".$e->getMessage(), "organization not found", null, 500);
        }
    }

    // handle organization registering
    public function OrganizationRegister(Request $request){
        try {
            // validate
            $payload = json_decode($request->getContent(), true);
            $email = $payload["email"];
            $username = $payload["username"];
            $fullname = $payload["full_name"];
            $password = $payload["password"];

            // validate credentials
            $validator = $this->validateRegisteration($email, $username, $fullname, $password);

            if($validator->fails()){
                return $this->sendResponse(true,$validator->errors(), 'invalid credentials supplied', null, 422);
            }

            // check if a organization already has an account
            $userExists = User::where('email', '=', $email)->count() > 0;
            if($userExists){
                return $this->sendResponse(true,"user with this email already exists","User with this email address already exists.", null, 400);
            }

            // user data
            $uid = Str::uuid();
            $hash = Hash::make($password);
            $userResp = [
                "user_id"=> $uid,
                "full_name"=>$fullname,
                "email"=> $email,
                "username"=> $username,
                "isVerified"=> 0,
                "refToken"=> "",
                "password"=> $hash,
                "role"=>$this->ORG_ROLE
            ];

            // client data
            $clientExtractedData = [
                "user_id"=> $uid,
                "full_name"=>$fullname,
                "email"=> $email,
                "username"=> $username,
                "isVerified"=> 0,
                "role"=>$this->ORG_ROLE
            ];

            // create a new record in database.
            User::create($userResp);


            // send organization email
            $this->helper->emailVerification($email,$uid);

            return $this->sendResponse(false, null, "User registered successfully", $clientExtractedData, 200);

        } catch (\Exception $e) {
            return $this->sendResponse(true,$e->getMessage(), "Something went wrong registering, please try again",  null, 500);
        }
    }

    // verify organization email
    public function verifyEmail(Request $request, $id, $token){
        // verify if that user exists
        $user = User::where("user_id", $id);
        $verifyToken = Token::where("token", $token);


        if($user->count() == 0){
            return $this->sendResponse(true, 'Invalid verification link, no user was found',"Invalid verification link", null, 404);
        }

        if($verifyToken->count() == 0){
            return $this->sendResponse(true, 'Invalid verification link: token not found',"Invalid verification token", null, 400);
        }

        $exp = $verifyToken->first()["exp"];
        $isExpired = $this->isExpired($exp);

        if($isExpired){
            // remove expired link from db
            Token::where("user_id", $id)->delete();
            return $this->sendResponse(true, "verification link expired", "link already expired", null, 400);
        }

        // check if user has been verified already
        $users = User::where("user_id", $id);

        if($users->first()["isVerified"] == 1){
            return $this->sendResponse(true, "user email has been verified", "Email has been verified already", null, 200);
        }


        // update verified user status
        User::where("user_id", $id)->update(array("isVerified"=>true));

        // delte token from db
        // Token::where("user_id", $id)->delete();

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
            return $this->sendResponse(true, "email address doesnt exists", "User with this email address doesnt exists.", null, 404);
        }

        // generate and send a password reset link
        $this->helper->passwordReset($email, $users->first()["user_id"]);

        // send client response
        return $this->sendResponse(false, null, "Password reset link sent",null, 200);
    }

    public function verifyPasswordReset(Request $req, $id, $token){

        $payload = json_decode($req->getContent(), true);
        $verify = false;

        if(!isset($payload["verify"])){
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
                $expireTime = $userTokenExists->first()["exp"];
                $hasExpired = $this->isExpired($expireTime);

                if ($hasExpired) {
                    return $this->sendResponse(true, "reset link expired", "invalid Password Reset link", null, 400);
                }

                // send result back to client.
                return $this->sendResponse(false, null, "Verified", null, 200);

            } catch (\Exception $e) {
                return $this->sendResponse(true, "Couldnt Verify Password Reset Link ".$e->getMessage() , "Something went wrong verifying password reset link, please try again", null, 500);
            }
        }
    }

    // refresh expire jwt-token
    public function refreshJwtToken(Request $req){
        try {
            $jwtToken = $req->cookie($this->CookieName);

            if(!isset($jwtToken) || empty($jwtToken)){
                return $this->sendResponse(true, "jwt token not found", "Unauthorised.",null, 401);
            }

            // decode jwt
            $decoded = $this->helper->decodeJwt($jwtToken);
            $email = $decoded->email;
            $id = $decoded->id;

            // generate accesstoken
            $newToken = $this->helper->generateAccessToken($id, $email);

            // set http-only cookie
            $data = [
                "accessToken"=>$newToken,
            ];

            // send newly generated token
            return $this->sendResponseWithCookie(false, null, "refresh token", $data, 200, $this->CookieName, $newToken, $this->CookieExp);

        } catch (\Exception $e) {
            return $this->sendResponse(true, "something went wrong refreshing token: ".$e->getMessage(), "Unauthorised.",null, 500);
        }
    }
}

?>
