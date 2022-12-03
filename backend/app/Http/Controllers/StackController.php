<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Stack;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\StackRequest;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class StackController extends Controller
{

    public function updateStack(StackRequest $request, $stack_id): JsonResponse
    {
        try {

            if (empty($stack_id)) {
                return $this->sendResponse(true, "Expected id of an existing stack. None given",
                    "stack id is missing.", Response::HTTP_BAD_REQUEST);
            }
            if (empty($request->name)) {
                return $this->sendResponse(true, "Expected a valid stack 'name'. None give",
                    "stack name is missing.", Response::HTTP_BAD_REQUEST);
            }

            // Get current user
            $uid = $request->user["id"];
            $updated_name = ["name" => $request->name];
            $stack = Stack::where('id', $stack_id);

            // check if it same user who's trying to update category
            $user_id = $stack->first()["user_id"];

            if ($user_id !== $uid) {
                return $this->sendResponse(true, "Not authorised to update this stack",
                    "Unauthorised.", Response::HTTP_BAD_REQUEST);
            }

            if ($stack->count() == 0) {
                return $this->sendResponse(true, "Stack doesn't exists", "Stack not found.",
                    Response::HTTP_BAD_REQUEST);
            }

            $stack->where("user_id", $uid)->update($updated_name);

            return $this->sendResponse(false, null, 'Stack updated successfully',
                $updated_name, Response::HTTP_OK);
        } catch (Exception $e) {

            return $this->sendResponse(true, "Something went wrong updating stack " . $e->getMessage(),
                'Failed updating stack.', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

     //function that gets all stacks
     public function getAllStacks(): JsonResponse
     {
         try{
             $stack = Stack::get();
             if($stack){
                 return $this->sendResponse(false, "All Stack Fetched", $stack, Response::HTTP_OK);
             }else{
                 return $this->sendResponse(true, "Invalid Request", "Stack(s) Not Found",  Response::HTTP_NOT_FOUND);
             }
         } catch(Exception $e){
             return $this->sendResponse(true, "Error Occured while trying to fetch all stack from DB", $e->getMessage());
         }

     }

     //function that gets Stack by id
    public function getStackById($id)
    {
        try{
            $stackId = Stack::find($id);
            if(!$stackId){
                return $this->sendResponse(true, "Invalid Request", "No Stack with this id in DB", Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, "Stack Fetched", $stackId, Response::HTTP_OK);
        } catch(Exception $e){
                return $this->sendResponse(true, "Error occurred while fetching Stack", $e->getMessage());
         }
    }


    // delete stack
    public function deleteStack($stack_id): JsonResponse
    {
        try{

            // Get stack by id
            $stack = Stack::find($stack_id);

            if( !$stack ) {
                return $this->sendResponse(
                    'Stack does not exist',
                    'Stack not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $stack->delete();

            // success response
            return $this->sendResponse(true, 'Stack deleted successfully',[], Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->sendResponse('Stack not fetched', $e->getMessage());
        }
    }
}
