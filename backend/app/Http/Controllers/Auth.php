<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use DateTimeImmutable;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class Auth extends Controller {

    private function validEmail($email){
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    public function loginUser(Request $request){
        // validate
        $payload = json_decode($request->getContent(), true);
        $email = $payload["email"];
        $username = $payload["username"];
        $password = $payload["password"];

        // validate credentials
        if(!isset($email) || !isset($username) || !isset($password)){
            return $this->errorResponse("Some inputs are missing.", true, 404);
        }

        // validate email
        if(!$this->validEmail($email)){
            return $this->errorResponse("Invalid email address.", true, 400);
        }

        // check if a user already has an account
        $userExists = User::where('email', '=', $email)->count() > 0;
        if($userExists){
            return $this->errorResponse("User with this email address already exists.", true, 400);
        }

        // proceed and generate token
        $token = new JsonWebToken();
        $uid = Str::uuid();
        $refToken = $token->generateRefreshToken($uid, $email);
        $accToken = $token->generateAccessTokrn($uid, $email);
        $userResp = [
            "id"=> $uid,
            "email"=> $email,
            "username"=> $username,
            "isVerified"=> false,
            "token"=> $refToken
        ];



        // return var_dump($payload[0]);
        return $this->successResponse(true, "User logged in successfully", json_encode($userResp), 200);
    }

    public function registerUser(Request $request){
        // validate
        $payload = json_decode($request->getContent(), true);
        $email = $payload["email"];
        $username = $payload["username"];
        $password = $payload["password"];

        // validate payload data
        if(!isset($email) || !isset($username) || !isset($password)){
            return $this->errorResponse("Some inputs are missing.", true, 404);
        }

        // validate email
        if(!$this->validEmail($email)){
            return $this->errorResponse("Invalid email address.", true, 400);
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
                "email"=> $email,
                "username"=> $username,
                "isVerified"=> false,
                "token"=> "",
                "hash"=> $hash,
                "role"=>1
            ];

            // create a new record in database.
            $saveRecord = User::create($userResp);
            
            return var_dump($saveRecord);
            // return $this->successResponse(true, "User registered successfully", json_encode($userResp), 200);
        } catch (\Exception $e) {
            return $this->errorResponse("Something went wrong registering, please try again", $e->getMessage(), 500);
        }
    }
}


// JWT class
class JsonWebToken{

    public function generateRefreshToken($userId, $user_email){
        $issuedAt= new DateTimeImmutable();
        $exp = $issuedAt->modify("+1 year")->getTimestamp();
        $secretKey  = config("jwt.secret");
    
        // user info
        $data = [
            'exp'  => $exp,
            'email' => $user_email,
            "id"=>$userId
        ];
        return JWT::encode(
            $data,
            $secretKey,
            'HS256'
        );
    }
    
    public function generateAccessTokrn($userId, $user_email){
        $issuedAt= new DateTimeImmutable();
        $exp = $issuedAt->modify("+1 month")->getTimestamp();
        $secretKey  = config("jwt.secret");
        
        $data = [
            'exp'  => $exp,
            'email' => $user_email,
            "id"=>$userId
        ];
        return JWT::encode(
            $data,
            $secretKey,
            'HS256'
        );
    }
}

?>