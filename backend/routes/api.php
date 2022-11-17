<?php

use App\Http\Controllers\QuestionsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
// use App\Http\Controllers\User\UserController;
use App\Http\Controllers\UserScoreController;
use App\Http\Controllers\AuthenticationController;

// util functions
@include_once("../util/sendResponse.php");

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

//updateuserinfo
Route::post('updateuserinfo/{id}', [UserController::class, 'updateruserinfo']);

//USERSCORE
Route::prefix("userscore")->group(function () {
    Route::controller(UserScoreController::class)->group(function () {
        Route::post('create', 'store');
        Route::get('get/{employee_id}', 'getByEmployeeId');
    });
});


//Users operation routes

Route::prefix("users")->group(function () {
    Route::get('{id}', [UserController::class, 'getUserById']);
    Route::get('verified/{userId}', [UserController::class, 'getVerifiedUserById']);
});




Route::fallback(function () {
    return response()->json(['message' => 'no Route matched with those values!'], 404);
});

<<<<<<< HEAD
Route::put('questions/update/{quest_id}/{ass_id}', [QuestionsController::class, 'updateQuestion']);
=======
Route::group(['prefix' => 'auth'], function ($router) {
    Route::post('login', [AuthenticationController::class, 'login']);
    Route::post('logout', [AuthenticationController::class, 'logout']);
    Route::post('refresh', [AuthenticationController::class, 'refresh']);

});
Route::put('questions/update/{quest_id}/{ass_id}', [QuestionsController::class, 'updateQuestion']);
>>>>>>> ccc59114725e462616934146abf4265d30e20dbf
