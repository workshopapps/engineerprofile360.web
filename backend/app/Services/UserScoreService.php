<?php

namespace App\Services;

class UserScoreService
{
    public static function prepareRequest(array $request): array
    {
        $request['categories'] = json_encode($request['categories']);
        $request['passed_questions'] = json_encode($request['passed_questions']);
        return  $request;
    }

    public static function categoryMatchesScores(array $request): int
    {
        return count($request['categories']) === count($request['passed_questions']) ? 1 : 0;
    }
}