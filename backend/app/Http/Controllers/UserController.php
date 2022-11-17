<?php

namespace App\Http\Controllers;

use App\Models\User;
use function response;
use App\Services\UserService;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;


class UserController extends Controller
{
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

    public function getVerifiedUserById(string $userId): JsonResponse
    {
        $verified_user = UserService::getVerifiedUser($userId);

        if( !$verified_user) {
            return $this->errorResponse(
                'User does not exist or is not a verified user',
                'User not found',
                Response::HTTP_NOT_FOUND
            );
        }

        return $this->successResponse(
            true,
            'Verified user',
            $verified_user,
            Response::HTTP_OK
        );
    }
}
