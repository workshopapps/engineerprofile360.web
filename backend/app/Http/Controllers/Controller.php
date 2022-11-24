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
    
    /** Please do not touch this code here, I spent time refactoring it **/

    /**
     * General response code
     * @param bool $errorState = true (This would be used later on in the client to check if an eror occured or not)
     * @param string $error = null (This would contain more error information the developer would need)
     * @param string $message = "" (This would contain the actual message that would get displayed in any ui component)
     * @param int $statusCode = 200 (This is simply the status code)
     * @param  $data = null (This would contain information the clients needs)
     * 
    */

    public function sendResponse(
        bool $errorState = true,
        string $error = null,
        string $message = 'OK',
        $data = null,
        int $code = 200
    ): JsonResponse 
    {
        return response()->json([
            'errorState' => $errorState,
            'error' => ucfirst($error),
            'message' => ucfirst($message),
            'data' => $data,
        ], $code);
    }
}
