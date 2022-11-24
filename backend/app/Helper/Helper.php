<?php

// declare(strict_types=1);

namespace App\Helper;

use App\Http\Controllers\Controller;
use DateTimeImmutable;
use Firebase\JWT\JWT;
use App\Mail\Signup;
use App\Models\Token;
use DateTime;
use Firebase\JWT\Key;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Mailer;

class Helper extends Controller
{

    public $baseUrl = "http://api.skript.hng.tech";
    // public $baseUrl = "http://localhost:8000";
    public $clientUrl = "http://localhost:8000"; // this would be the frontend client url

    public function generateRefreshToken($userId, $user_email)
    {
        $issuedAt = new DateTimeImmutable();
        $exp = $issuedAt->modify("+1 year")->getTimestamp();
        $secretKey  = config("jwt.secret");

        // user info
        $data = [
            'exp'  => $exp,
            'email' => $user_email,
            "id" => $userId
        ];
        return JWT::encode(
            $data,
            $secretKey,
            'HS256'
        );
    }

    public function generateAccessTokrn($userId, $user_email)
    {
        $issuedAt = new DateTimeImmutable();
        $exp = $issuedAt->modify("+1 month")->getTimestamp();
        $secretKey  = config("jwt.secret");

        $data = [
            'exp'  => $exp,
            'email' => $user_email,
            "id" => $userId
        ];
        return JWT::encode(
            $data,
            $secretKey,
            'HS256'
        );
    }

    public function decodeJwt($token)
    {
        $key  = config("jwt.secret");
        $decoded =  JWT::decode(
            $token,
            new Key($key, 'HS256')
        );
        return $decoded;
    }

    public function emailVerification($email, $user_id){
        $apiUrl = $this->baseUrl;
        try {
            $token = substr(md5(openssl_random_pseudo_bytes(20)),-20);
            $tokenData = [
                "user_id"=>$user_id,
                "token"=>$token,
                "exp"=> false
            ];

            Token::create($tokenData);

            $mail = new Mailer();
            $mailMsg = "Verify your email using the link above";
            $mailData = "{$apiUrl}/api/auth/verify/${user_id}/${token}";
            $mail->verifyEmail("mail@dicodetech.com", $email, $mailMsg, $mailData);
        } catch (\Exception $e) {
            return Log::info("Something went wrong sending email verification code.. ".$e->getMessage());
        }
        
    }

    public function passwordReset($email, $user_id){
        $apiUrl = $this->baseUrl;
        $client = $this->clientUrl;
        try {
            // create token
            $token = substr(md5(openssl_random_pseudo_bytes(20)),-20);
            $tokenData = [
                "user_id"=>$user_id,
                "token"=>$token,
                "exp"=> false
            ];
    
            Token::create($tokenData);
    
            $mail = new Mailer();
            $mailMsg = "Reset your password using the link above.";
            // $mailData = "${apiUrl}/api/auth/password/reset/${user_id}/${token}";
            $mailData = "{$client}/password/reset?uid=${user_id}&token=${token}";
            $mail->passwordReset("test@mail.com", $email, $mailMsg, $mailData);
        } catch (\Exception $e) {
            return Log::error("Could not send password reset link".$e->getMessage());
        }
    }
    
}
