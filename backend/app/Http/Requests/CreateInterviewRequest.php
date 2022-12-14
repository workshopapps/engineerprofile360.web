<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateInterviewRequest extends BaseRequest
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
            'stack_id' => "required|string|exists:stacks,id",
            'title' => 'string|required',
            'company_name' => 'string|required'
        ];
    }
}