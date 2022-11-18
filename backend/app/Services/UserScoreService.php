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

    public static function getCondition($request): array
    {
        $condition = array();
        if (isset($request->employeeId)) $condition["employee_id"] = $request->employeeId;
        if (isset($request->assId)) $condition["assessment_id"] = $request->assId;
        return $condition;
    }
}