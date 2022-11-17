<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;


/**
 * @OA\Info(title="My First API", version="0.1")
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    /**
     * @param bool $status = true
     * @param null $data
     * @param string $message
     * @param int $code
     *
     * @return JsonResponse
     */
    public function successResponse(
        bool $status = true,
        string $message = 'OK',
        $data = null,
        int $code = 200
    ) : JsonResponse
    {
        return response()->json([
            'status' => $status,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    /**
     * Empty response without data
     * @param $status
     * @param int $code
     *
     * @return JsonResponse
     */
    public function emptySuccessResponse($status, int $code = 201): JsonResponse
    {
        return response()->json([
            'status' => $code,
            'data' => $status,
        ], $code);
    }

    /**
     * Error response. It uses code 200 because "API client can't parse the error"
     * @param string $message
     * @param null $errors
     * @param int $code
     * @return JsonResponse
    */
    public function errorResponse(
        string $message = 'Error message',
        $errors = null,
        int $code = 400
    ) : JsonResponse
    {
        Log::error($errors);
        return response()->json([
            'status' => 'error',
            'message' => $message,
            'errors' => $errors,
        ], $code);
    }
}
