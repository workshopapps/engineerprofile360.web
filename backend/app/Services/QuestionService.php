<?php

namespace App\Services;

use App\Models\Question;

class QuestionService
{
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
    }
}