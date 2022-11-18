<?php

namespace App\Http\Controllers;

use App\Models\User;
use function response;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;


class UserController extends Controller
{
    public function allUsers()
    {
        $user = User::paginate(15);
        return response()->json([
            'status' => true,
            'data' => $user
        ], 200);
    }

    public function getUserById($user_id): JsonResponse
    {
        if (User::where('id', $user_id)->exists())
        {
            $user = User::find($user_id);
            return response()->json([
                'error' => false,
                'message' => "User Found",
                'data' => $user
            ]);
        }
        else
        {
            return response()->json([
                'error' => false,
                'message' => "User does not exist",
                'data' => null
            ], 404);
        }
    }

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
