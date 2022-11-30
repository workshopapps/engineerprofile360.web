<?php


namespace App\Services;


use App\Models\User;


class UserService
{

    public static function getVerifiedUser($userId)
    {        
        $user = User::select("id","user_id","full_name","email","role","isVerified","isAdmin","isBlocked","refToken")->where('user_id',"=", $userId)->first();
        return $user;
    }

    public static function getUserById($userId)
    {        
        $user = User::select("id","user_id","full_name","email","role","isVerified","isAdmin","isBlocked","refToken")->where('user_id', $userId)->first();
        return $user;
    }
}