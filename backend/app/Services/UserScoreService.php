<?php

namespace App\Services;

use App\Models\Assessment;
use App\Models\Question;
use App\Models\UserAssessment;
use App\Models\UserScore;
use Illuminate\Support\Str;

class UserScoreService
{
    public static function submit(array $request): array
    {
        extract($request);
        $result = self::calculateResult($request);
        $userScore = UserScore::create(self::prepareRequest($result["data"]));
        $org_id = Assessment::find($assessment_id)->first()['org_id'];
        $uid = Str::uuid();
        UserAssessment::create([
            'id' => $uid, 'employee_id' => $employee_id, 'assessment_id' => $assessment_id,
            'org_id' => $org_id, 'userscore_id' => $userScore->id, 'completed' => 1,
            'total_questions' => $result["data"]["total_questions"], 'correct_questions' => $result["points"], 'result' => $result["points"]
        ]);
        return ["result" => $result["points"] . "/" . $result["data"]["total_questions"]];
    }

    public static function prepareRequest(array $data): array
    {
        $result = [];
        foreach ($data['passed_questions'] as $key => $value) {
            array_push($result, ($value['passed'] / $value['total']) * 100);
        }
        $data['categories'] = json_encode($data['categories']);
        $data['passed_questions'] = json_encode($result);
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
            //store the categories of the questions
            if (!in_array($questions->category->name, $result["data"]["categories"])) {
                array_push($result["data"]["categories"], $questions->category->name);
            }

            $points = count($value["answer"]);
            $index = array_search($questions->category->name, $result["data"]["categories"]);
            // compare the answers
            if (!array_diff($value["answer"], json_decode($questions->correct_answers))) {
                //update answer count for each question category
                if (isset($result["data"]["passed_questions"][$index])) {
                    $result["data"]["passed_questions"][$index]["passed"] += $points;
                } else {
                    array_push($result["data"]["passed_questions"], [
                        "total" => 0,
                        "passed" => $points
                    ]);
                }
                $result["points"] += $points;
            }

            //update question number count for each category
            if (isset($result["data"]["passed_questions"][$index])) {
                $result["data"]["passed_questions"][$index]["total"] += $points;
            } else {
                array_push($result["data"]["passed_questions"], ["total" => $points, "passed" => 0]);
            }
            $result["data"]["total_questions"] += $points ?? 1;
        }
        return $result;
    }
}