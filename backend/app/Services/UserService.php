<?php


namespace App\Services;


use App\Models\User;


class UserService
{

    public static function getVerifiedUser($userId)
    {        
        $user = User::where('user_id',"=", $userId)->first();
        return $user;
    }
}