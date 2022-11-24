<?php

namespace App\Http\Controllers;

use App\Models\Stack;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\StackRequest;
use Exception;
use Symfony\Component\HttpFoundation\Response;

class StackController extends Controller
{
    public function addStack(StackRequest $request): JsonResponse
    {
        $data = $request->all();
        try {
            if($data){
                Stack::create($data);
                return $this->sendResponse(false, null, 'Stack created', $data, Response::HTTP_CREATED);
            }else {
                return $this->sendResponse(true, 'Stack failed', Response::HTTP_BAD_REQUEST);
            }

        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Stack not created', $e->getMessage());
        }
    }
}
