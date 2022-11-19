<?php

// declare(strict_types=1);

namespace App\Helper;


use DateTimeImmutable;
use Firebase\JWT\JWT;
use App\Mail\Signup;
use App\Models\Token;
use DateTime;
use Illuminate\Support\Facades\Mail;
use Mailer;

class Helper
{

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
        $secretKey  = config("jwt.secret");
        return JWT::decode(
            $token,
            $secretKey
        );
    }

    public function emailVerification($email, $user_id){

        $created = new DateTime('now');
        $expiration_time = new DateTime('+20 minutes');
        $compare = $created->diff($expiration_time);
        $expires = $compare->format('%i');
        
        // create token
        $token = substr(md5(openssl_random_pseudo_bytes(20)),-20);
        $tokenData = [
            "user_id"=>$user_id,
            "token"=>$token,
            "exp"=>$expiration_time
        ];

        Token::create($tokenData);

        $mail = new Mailer();
        $mailMsg = "Your Link would expire in ${expires}minutes";
        $mailData = "http://localhost:8000/api/auth/verify/${user_id}/${token}";
        $mail->verifyEmail("test@mail.com", $email, $mailMsg, $mailData);
    }
}
