<?php

declare(strict_types=1);

namespace App\Services\Jwt;

use DateTimeImmutable;
use Firebase\JWT\JWT;

require_once('../vendor/autoload.php');


class JsonWebToken{

    public function generateRefreshToken($userId, $user_email){
        $issuedAt= new DateTimeImmutable();
        $exp = $issuedAt->modify("+1 year")->getTimestamp();
        $secretKey  = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
    
        // user info
    
        $data = [
            'exp'  => $exp,
            "iat"=> $issuedAt,
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
        $secretKey  = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
        
        $data = [
            'exp'  => $exp,
            "iat"=> $issuedAt,
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



function verifyToken(){

}


?>