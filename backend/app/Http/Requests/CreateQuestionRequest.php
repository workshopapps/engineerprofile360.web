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
            'category_id' => "required",
            'assessment_id' => "required",
            'question_id' => 'required',
            'correct_answers' => 'required|string',
            'options' => 'required|string',
            'timeframe' => 'required|string',
            'is_multiple_answers' => 'required|boolean'
        ];
    }
}