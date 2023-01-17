<?php

namespace App\Services;

use App\Models\Category;
use App\Models\Question;

class QuestionService
{
    public static function uploadQuestions(array $payload): array
    {
        $base64 = str_replace(" ", "", $payload['base64']);
        $type = explode(",", $base64)[0];
        // if ($type != "") return;
        $data = explode("\n", trim(base64_decode(explode(",", $base64)[1])));
    
        $success = 0;
        $count = 0;
        for ($i = 1; $i < count($data); $i++) {
            $data = str_replace("\r", "", $data);
            
            //explode each line
            $item = explode("],", str_replace(']"', "]", $data[$i]));
            //assign varibles removing the starting and ending square brackets
            $option1 = rtrim(ltrim($item[1], "["), "]") ?? "option1";
            $option2 = rtrim(ltrim($item[2], "["), "]") ?? "option2";
            $option3 = rtrim(ltrim($item[3], "["), "]") ?? "option3";
            $option4 = rtrim(ltrim($item[4], "["), "]") ?? "option4";
            $answer = rtrim(ltrim($item[5], "["), "]") ?? "option";
            $category_name = rtrim(ltrim($item[6], "["), "]") ?? null;

            $category = Category::where(["name" => $category_name, "org_id" => $payload['org_id']])->first();
            if ($category) {
                $output = [
                    "question" => rtrim(ltrim($item[0], "["), "]") ?? "Question",
                    "options" => [$option1, $option2, $option3, $option4],
                    "category_id" => $category['id'],
                    "assessment_id" => $payload['assessment_id'],
                    "correct_answers" => [intval($answer) - 1],
                    "is_multiple_answers" => false
                ];
                Question::create($output);
                $success++;
            }
            $count++;
        }
        return [
            "success" => $success,
            "total" => $count
        ];
    }

    public static function addQuestions(array $data): array
    {
        $output = array();
        for ($i = 0; $i < count($data['questions']); $i++) {
            $result = Question::create([
                "assessment_id" => $data["assessment_id"],
                ...$data['questions'][$i],
                "options" => json_encode($data['questions'][$i]["options"]),
                "correct_answers" => json_encode($data['questions'][$i]["correct_answers"]),
            ]);
            array_push($output, $result);
        }
        return $output;
    }
}