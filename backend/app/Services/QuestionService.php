<?php

namespace App\Services;

<<<<<<< HEAD
=======
use App\Models\Category;
>>>>>>> b96e9fc095f556017fa97e2e40c73c5b09dad19f
use App\Models\Question;

class QuestionService
{
<<<<<<< HEAD
    public static function addQuestion(string $category_id, string $assessment_id, string $company_id, array $data): array
    {
        return Question::create([
            "category_id" => $category_id,
            "assessment_id" => $assessment_id,
            "company_id" => $company_id,
            ...$data,
            "options" => json_encode($data["options"]),
            "correct_answers" => json_encode($data["correct_answers"]),
        ]);
=======
    public static function uploadQuestions(array $payload): array
    {
        $base64 = $payload['base64'];
        $type = explode(",", $base64)[0];
        // if ($type != "") return;
        $data = explode("\n", base64_decode(explode(",", $base64)[1]));

        $success = 0;
        $count = count($data);
        for ($i = 1; $i < $count; $i++) {
            $item = explode(",", $data[$i]);
            $option1 = trim($item[1]) ?? "option1";
            $option2 = trim($item[2]) ?? "option2";
            $option3 = trim($item[3]) ?? "option3";
            $option4 = trim($item[4]) ?? "option4";
            $answer = trim($item[5]) ?? "option";
            $category_name = trim($item[6]) ?? null;
            $category_id = Category::where(["name" => $category_name, "org_id" => $payload['org_id']])->first()['id'];
            if ($category_id) {
                $output = [
                    "question" => trim($item[0]) ?? "Question",
                    "options" => [$option1, $option2, $option3, $option4],
                    "category_id" => $category_id,
                    "assessment_id" => $payload['assessment_id'],
                    "correct_answers" => [intval($answer) - 1],
                    "timeframe" => 1,
                    "is_multiple_answers" => false,
                    "company_id" => $payload['org_id']
                ];
                Question::create($output);
                $success++;
            }
        }
        return [
            "success" => $success,
            "total" => $count - 1
        ];
>>>>>>> b96e9fc095f556017fa97e2e40c73c5b09dad19f
    }
}