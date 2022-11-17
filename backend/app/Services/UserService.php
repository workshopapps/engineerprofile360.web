<?php


namespace App\Services;


use App\Models\User;


class UserService
{

    public static function getVerifiedUser($userId)
    {        
        $user = User::where('id', $userId)->where('isVerified', true)->first();

        return $user;
    }
}