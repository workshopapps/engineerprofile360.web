<?php
/**
 * Create base request for form request
 *
 * @author Elijah <aborisadeelijah@gmail.com>
 * @package App\Http\Requests
*/
namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class BaseRequest extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
        // It uses code 200 because "API client can't parse the error"
        throw new HttpResponseException( response()->json( [
            'status' => 'error',
            'message' => 'The given data was invalid.',
            'errors' => $validator->errors()->all()
        ], 422 ) );
    }
}