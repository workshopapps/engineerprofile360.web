<?php


namespace App\Services;


use App\Models\User;


class UserService
{

    public static function getVerifiedUser($userId)
    {
        $user = User::where('user_id', $userId)->where('isVerified', true)->get();
        return $user;
    }

    public static function getUserById($userId)
    {
        $user = User::where(["user_id" => $userId])->first();
        return $user;
    }

    public static function allVerifiedUsers()
    {
        $companies = User::where('isVerified', true)->get();
        return $companies;
    }
}