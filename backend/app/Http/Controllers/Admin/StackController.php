<?php

namespace App\Http\Controllers\Admin;

use Exception;
use App\Models\Stack;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Http\Requests\StackRequest;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class StackController extends Controller
{
    /**
     * Create a new stack.
     *
     * @param StackRequest $request
     *
     * @return JsonResponse
     */
    public function addStack(StackRequest $request): JsonResponse
    {
        $data = $request->all();

        try {
            //this checks if stack already exists
            $stackExists = Stack::where('name', $data['name'])->first();

            if($stackExists){
                return $this->sendResponse(true, "Stack already exists", "name already exists.", null, Response::HTTP_BAD_REQUEST);
            }

            $stack = Stack::create($data);

            return $this->sendResponse(false, null, "Stack successfully created.", $stack, Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Stack could not be created', $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update stack
     *
     * @param string $stackId
     */
    public function updateStack(StackRequest $request, $stackId): JsonResponse
    {
        $updatedData = $request->all();
        try {

            $stack = Stack::find($stackId);

            if(!$stack){
                return $this->sendResponse(true, "Stack does not exist", "Stack not found", null, Response::HTTP_NOT_FOUND);
            }

            $stackExists = Stack::where('name', $updatedData['name'])->first();

            if($stackExists){
                return $this->sendResponse(true, "Stack already exists", "name already exists", null, Response::HTTP_BAD_REQUEST);
            }

            $updatedStack = $stack->update($updatedData);

            return $this->sendResponse(false, null, 'Stack updated successfully', $updatedStack, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Could not fetch stack ", $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Get all stacks
     *
     * @return JsonResponse
     */
    public function getAllStacks(): JsonResponse
    {
        try {
            $stack = Stack::get();
                
            return $this->sendResponse(
                false, 
                null, 
                "Stacks", 
                $stack, 
                Response::HTTP_OK
            );
           
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Stacks could not be fetched', $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

     /**
     * Get Stack
     * @param string $stackId
     *
     * @return JsonResponse
    */
    public function getStackById($stackId)
    {
        try {
            $stack = Stack::find($stackId);
            if (!$stack) {
                return $this->sendResponse(
                    'Stack does not exist',
                    'Stack not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            return $this->sendResponse(false, null, "Stack", $stack, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Stack could not be fetched', $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


     /**
     * Delete a stack
     * @param string $stackId
     *
     * @return JsonResponse
     */
    public function deleteStack($stackId): JsonResponse
    {
        try {
            $stack = Stack::find($stackId);

            if (!$stack) {
                return $this->sendResponse(
                    'Stack does not exist',
                    'Stack not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $stack->delete();

            return $this->sendResponse(true, null, 'Stack deleted successfully', Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse('Stack not fetched', $e->getMessage());
        }
    }
}
