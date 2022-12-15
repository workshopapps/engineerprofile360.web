<?php

namespace App\Services;

use App\Models\Assessment;
use App\Models\Question;
use App\Models\UserAssessment;
use App\Models\UserScore;

class UserScoreService
{
    public static function submit(array $request): array
    {
        extract($request);
        $result = self::calculateResult($request);
        $uerScore = UserScore::create(self::prepareRequest($result["data"]));
        $org_id = Assessment::find($assessment_id)->first()['org_id'];
        UserAssessment::where(["assessment_id" => $assessment_id])->update([
            "completed" => 1,
            "userscore_id" => $uerScore->id,
            "org_id" => $org_id,
            "result" => $result["points"],
            "correct_questions" => $result["points"],
            "total_questions" => $result["data"]["total_questions"]
        ]);
        return ["result" => $result["points"] . "/" . $result["data"]["total_questions"]];
    }

    public static function prepareRequest(array $data): array
    {
        $data['categories'] = json_encode($data['categories']);
        $data['passed_questions'] = json_encode($data['passed_questions']);
        return  $data;
    }

    public static function calculateResult(array $request): array
    {
        extract($request);
        $result = [
            "data" => [
                "assessment_id" => $assessment_id,
                "employee_id" => $employee_id,
                "categories" => [],
                "passed_questions" => [],
                "total_questions" => 0,
                "correct_questions" => 0
            ],
            "points" => 0
        ];
        foreach ($answers as $key => $value) {
            //get question details
            $questions = Question::where(["id" => $value["question_id"]])->with("category")->first();
            // compare the answers
            $numberTypeAnswers = intval($questions->correct_answers);
            if (!array_diff($value["answer"], str_split($numberTypeAnswers, strlen($questions->correct_answers)))) {
                //store the categories of the questions
                if (!in_array($questions->category->name, $result["data"]["categories"])) {
                    array_push($result["data"]["categories"], $questions->category->name);
                }

                //update answer count for each question category
                $index = array_search($questions->category->name, $result["data"]["categories"]);
                $points = count($value["answer"]);
                if (isset($result["data"]["passed_questions"][$index])) {
                    $result["data"]["passed_questions"][$index] += $points;
                } else {
                    array_push($result["data"]["passed_questions"], $points);
                }
                $result["points"] += $points;
            }
            $result["data"]["total_questions"] += $points ?? 1;
        }
        return $result;
    }
}