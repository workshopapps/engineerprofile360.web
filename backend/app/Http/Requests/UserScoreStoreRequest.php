<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserScoreStoreRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "assessment_id" => 'required|exists:assessments,id',
            "employee_id" => 'required|exists:employees,id',
            "answers" => 'required|array',
            "answers.*.question_id" => 'required|string|exists:questions,id',
            "answers.*.answer" => 'array'
        ];
    }
}