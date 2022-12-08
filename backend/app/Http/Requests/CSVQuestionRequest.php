<?php

namespace App\Http\Requests;
<<<<<<< HEAD

=======
use Illuminate\Foundation\Http\FormRequest;
>>>>>>> b96e9fc095f556017fa97e2e40c73c5b09dad19f
class CSVQuestionRequest extends BaseRequest
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
            "org_id" => 'required',
<<<<<<< HEAD
=======
            "assessment_id" => 'required',
>>>>>>> b96e9fc095f556017fa97e2e40c73c5b09dad19f
            "base64" => 'required'
        ];
    }
}