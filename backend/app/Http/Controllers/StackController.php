<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Stack;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\StackRequest;
use Symfony\Component\HttpFoundation\Response;

class StackController extends Controller
{
    public function addStack(StackRequest $request): JsonResponse
    {
        $name = $request->name;
        $user_id = $request->user["id"];
        $data = [
            'name' => $name,
            'user_id' => $user_id
        ];
        try {
            if(empty($name)){
                return $this->sendResponse(true, 'stack name is required', 'missing stack name',
                    Response::HTTP_BAD_REQUEST );
            }
            $stack = Stack::where('name', $name);

            if ($stack->count() > 0) {
                return $this->sendResponse(true, "This stack already exists", "Duplicate stack name.",
                    Response::HTTP_BAD_REQUEST);
            }
            $return_message = Stack::create($data);
                return $this->sendResponse(false, null, $return_message, Response::HTTP_CREATED);


        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Error occurred while creating Stack', $e->getMessage(),
                Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateStack(StackRequest $request, $stack_id): JsonResponse
    {
        try{
            $updatedData = $request->all();

            // Get stack by id
            $stack = Stack::find($stack_id);

            if( !$stack ) {
                return $this->sendResponse(
                    'Stack does not exist',
                    'Stack not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $stack->update($updatedData);

            // success response
            return $this->sendResponse(true, 'Stack updated successfully', Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->sendResponse('Stack not fetched', $e->getMessage());
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
