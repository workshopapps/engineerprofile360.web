<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Log;


/**
 * @OA\Info(title="My First API", version="0.1")
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public int $perRequestPage = 10;

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

    public function sendResponseWithCookie(
        bool $errorState = true,
        string $error = null,
        string $message = 'OK',
        $data = null,
        int $code = 200,
        string $cookieName = "",
        string $cookieVal = "",
        int $cookieExp = 60
    ) {
        return response()->json([
            'errorState' => $errorState,
            'error' => ucfirst($error),
            'message' => ucfirst($message),
            'data' => $data,
        ], $code)->withCookie(cookie($cookieName, $cookieVal, $cookieExp, "/", null, false, true));
    }

    public function sendResponse(
        bool $errorState = true,
        string $error = null,
        string $message = 'OK',
        $data = null,
        int $code = 200
    ): JsonResponse {
        return response()->json([
            'errorState' => $errorState,
            'error' => ucfirst($error),
            'message' => ucfirst($message),
            'data' => $data,
        ], $code);
    }

    /**
     * The attributes that are mass assignable.
     *
     *
     * @param $items
     * @param null $page
     * @param $total
     * @param array $options
     * @return LengthAwarePaginator
     */
    public function customPaginate($items, $total, $page = null, array $options = []) : LengthAwarePaginator
    {

        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);

        return new LengthAwarePaginator($items->forPage(1, $this->perRequestPage), $total, $this->perRequestPage, $page, $options);
    }
}
