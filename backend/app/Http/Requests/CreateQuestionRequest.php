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
            'question' => "required",
            'category_id' => "required",
            'assessment_id' => "required",
            'questions' => 'array|required',
            'questions.*.correct_answers' => "required",
            'questions.*.options' => 'required',
            'questions.*.timeframe' => 'required|string',
            'questions.*.is_multiple_answers' => 'required|boolean'
        ];
    }
}
