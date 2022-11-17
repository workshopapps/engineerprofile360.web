<?php

use App\Http\Controllers\QuestionsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
// use App\Http\Controllers\User\UserController;
use App\Http\Controllers\UserScoreController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\AssessmentController;

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


//USERSCORE
Route::prefix("userscore")->group(function () {
    Route::get('/{employeeId}/{assId}', [UserScoreController::class, 'getScores']);
    Route::post('/create', [UserScoreController::class, 'store']);
});


//Users operation routes
Route::prefix("users")->group(function () {
    Route::get('{id}', [UserController::class, 'getUserById']);
    Route::get('verified/{userId}', [UserController::class, 'getVerifiedUserById']);
    //updateuserinfo
    Route::put('/{userId}/update', [UserController::class, 'updateruserinfo']);
});

// assessment routes
Route::prefix("assessment")->group(function () {
    Route::delete('/{assId}/delete', [AssessmentController::class, 'deleteAss']);
});


Route::prefix("auth")->group(function () {
    Route::post('register', [AuthenticationController::class, 'register']);
    Route::post('login', [AuthenticationController::class, 'login']);
    Route::post('logout', [AuthenticationController::class, 'logout']);
    Route::post('refresh', [AuthenticationController::class, 'refresh']);
});

Route::prefix("questions")->group(function () {
    Route::put('/{questId}/{assId}/update', [QuestionsController::class, 'updateQuestion']);
});


Route::fallback(function () {
    return response()->json(['message' => 'no Route matched with those values!'], 404);
});