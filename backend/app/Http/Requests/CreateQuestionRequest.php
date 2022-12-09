<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateQuestionRequest extends BaseRequest
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
            'assessment_id' => "required|string|exists:assessments,id",
            'questions' => 'array|required',
            'questions.*.question' => "required|string",
            'questions.*.category_id' => "required|string|exists:categories,id",
            'questions.*.correct_answers' => "required|array",
            'questions.*.options' => 'required|array',
            'questions.*.timeframe' => 'required|string',
            'questions.*.is_multiple_answers' => 'required|boolean'
        ];
    }
}