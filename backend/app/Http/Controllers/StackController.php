<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Stack;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\StackRequest;
use Symfony\Component\HttpFoundation\Response;

class StackController extends Controller
{

    public function updateStack(StackRequest $request, $stack_id): JsonResponse
    {
        try{
            $updatedData = $request->all();

            // Get stack by id
            $stack = Stack::find($stack_id);

            if( !$stack ) {
                return $this->errorResponse(
                    'Stack does not exist',
                    'Stack not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $stack->update($updatedData);

            // success response
            return $this->successResponse(true, 'Stack updated successfully', Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->errorResponse('Stack not fetched', $e->getMessage());
        }
    }
}
