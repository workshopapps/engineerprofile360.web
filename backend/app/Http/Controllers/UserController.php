<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Services\UserService;

class UserController extends Controller
{
    public function getVerifiedUserById($userId)
    {
        $verified_user = UserService::getVerifiedUser($userId);

        if (!$verified_user) {
            return response()->json([
                'status' => false,
                'message' => 'User does not exist or is not a verified user'
            ], 404);
        }

        return response()->json([
            'status'    => true,
            'user'   => $verified_user
        ], 200);
    }
}