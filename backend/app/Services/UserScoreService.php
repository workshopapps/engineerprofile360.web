<?php

namespace App\Services;

use App\Models\UserScore;
use Illuminate\Http\JsonResponse;

class UserScoreService
{
    public static function addUserScore($userId): array
    {
        return UserScore::where('id', $userId)->where('isVerified', true)->first();
    }

    function sendResponse($error = false, $code = 200, $msg = "", $data = ["" => ""]): JsonResponse
    {
        return response()->json(["error" => $error, "code" => $code, "message" => $msg, "data" => $data], $code);
    }
}