<?php

namespace App\Services;

use App\Models\UserScore;
use App\Http\Actions\SendResponseAction;
use Illuminate\Http\JsonResponse;

class UserScoreService
{
    public static function addUserScore(array $request): JsonResponse
    {
        return self::sendRequest(UserScore::create($request));
    }

    public function sendRequest(UserScore $data): JsonResponse
    {
        return SendResponseAction::handle(false, 200, "User score was added successfully!", (array) $data);
    }
}