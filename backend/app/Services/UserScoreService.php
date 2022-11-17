<?php

namespace App\Services;

use App\Models\UserScore;
use Illuminate\Http\JsonResponse;

class UserScoreService
{
    public static function addUserScore(array $request): JsonResponse
    {
        if (!self::categoryMatchesScores($request)) return sendResponse(true, 422, "The passed questions doesn't match the categories supplied");
        return self::sendRequest(UserScore::create(self::prepareRequest($request)));
    }

    public static function prepareRequest(array $request): array
    {
        $request['categories'] = json_encode($request['categories']);
        $request['passed_questions'] = json_encode($request['passed_questions']);
        return  $request;
    }

    public static function categoryMatchesScores(array $request): int
    {
        return  count($request['categories']) === count($request['passed_questions']) ? 1 : 0;
    }

    public static function sendRequest(UserScore $data): JsonResponse
    {
        return sendResponse(false, 200, "User score was added successfully!", $data);
    }
}