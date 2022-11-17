<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

      /**
     * @param $message
     * @return Response
     */
    protected function respondWithMissingField($message)
    {
        return response()->json([
            'status' => 400,
            'message' => $message,
        ], 400);
    }

    /**
     * @param $message
     * @return Response
     */
    private function respondWithValidationError($message)
    {
        return response()->json([
            'status' => false,
            'message' => $message,
        ], 400);
    }

    /**
     * @param $validator
     * @return Response
     */
    protected function respondWithErrorMessage($validator)
    {
        $required = $messages = [];
        $validatorMessages = $validator->errors()->toArray();
        foreach($validatorMessages as $field => $message) {
            if (strpos($message[0], 'required')) {
                $required[] = $field;
            }

            foreach ($message as $error) {
                $messages[] = $error;
            }
        }

        if (count($required) > 0) {
            $fields = implode(', ', $required);
            $message = "Missing required fields $fields";

            return $this->respondWithMissingField($message);
        }


        return $this->respondWithValidationError(implode(', ', $messages));
    }

}
