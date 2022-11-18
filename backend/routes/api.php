<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserScoreController;

// util functions
// require_once "../util/sendResponse.php";

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// middleware instance here
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// other route functions here
Route::get("/test", function () {
    // execute the function
    return sendResponse(false, 200, "Test case pass", null);
});

Route::prefix("users")->group(function(){
    Route::get('all', [UserController::class, 'allUsers']);
    Route::get('{id}', [UserController::class, 'getUserById']);
    Route::get('verified/{userId}', [UserController::class, 'getVerifiedUserById']);
});

Route::prefix("users")->group(function () {
    Route::get('verified/{userId}', [UserController::class, 'getVerifiedUserById']);
});

//USERSCORE
Route::prefix("UserScorce")->group(function () {
    Route::controller(UserScoreController::class)->group(function () {
        Route::get('permissions', 'index');
        Route::post('new_permission', 'store');
    });
});

