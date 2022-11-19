<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
// use App\Http\Controllers\User\UserController;
use App\Http\Controllers\QuestionsController;
use App\Http\Controllers\UserScoreController;
use App\Http\Controllers\AssessmentController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\AuthenticationController;

// util functions
// employee csv file parser.
@include_once("../util/csv_parser.php");

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
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// other route functions here
// Route::get("/test", function () {
//     // execute the function
//     return sendResponse(false, 200, "Test case pass", null);
// });

Route::get("/userscore/test/?type=csv", function (Request $request) {
    // execute the function
    return sendResponse(false, 200, "csv", null);
});

<<<<<<< HEAD
Route::get("/test/?type=manual", function () {
    // execute the function
    return sendResponse(false, 200, "manual", null);
});



=======
>>>>>>> 3d6dc1eb14585d4e7f264136b1b7159daff53374
//USERSCORE
Route::prefix("userscore")->group(function () {
    Route::get('/test?type=csv', function (Request $request) {
        return sendResponse(false, 200, $request->type, null);
    });
    Route::get('/employee/{employeeId}', [UserScoreController::class, 'getScores']);
    Route::get('/assessment/{assId}', [UserScoreController::class, 'getScores']);
    Route::get('/{employeeId}/{assId}', [UserScoreController::class, 'getScores']);
    Route::post('/create', [UserScoreController::class, 'store']);
});


//Users operation routes
Route::prefix("user")->group(function () {
    Route::get('{id}', [UserController::class, 'getUserById']);
    Route::get('verified/{userId}', [UserController::class, 'getVerifiedUserById']);
    Route::put('{userId}/update', [UserController::class, 'updaterUserInfo']);
    Route::get('all', [UserController::class, 'allUsers']);
});


//Assessment routes operations
Route::prefix("assessment")->group(function () {
    Route::delete('{assId}/delete', [AssessmentController::class, 'deleteAssessment']);
    Route::post('create', [AssessmentController::class, 'createAssessment']);
    Route::post('{id}', [AssessmentController::class, 'updateAssessment']);
});

// Test Employee Adding using csv file
// Visit http://localhost:8000 in the browser and upload a csv containing a the following attributes (s/n, fullname, username, email)
Route::post("/test_csv", function (Request $req) {
    $csv = new CsvParser();
    $payload = json_decode($req->getContent(), true);
    return $csv->parseEmployeeCsv($payload);
});

// authentication route
Route::prefix("auth")->group(function () {
    Route::post('register', [AuthenticationController::class, 'register']);
    Route::post('login', [AuthenticationController::class, 'login']);
    Route::post('logout', [AuthenticationController::class, 'logout']);
    Route::post('refresh', [AuthenticationController::class, 'refresh']);
});

// company route
Route::prefix("company")->group(function () {
    Route::get('all', [CompanyController::class, 'getCompanies']);
    Route::put('update', [CompanyController::class, 'updateCompany']);
});

// questions route operations
Route::prefix("question")->group(function () {
    Route::post('add', [QuestionsController::class, 'addManually']);
    Route::put('{questId}/{assId}/update', [QuestionsController::class, 'updateQuestion']);
});

// Categories routes operation
Route::prefix("category")->group(function () {
    Route::put('{catId}/update', [CategoryController::class, 'updateCategory']);
    Route::post('add', [CategoryController::class, 'createCategory']);
});

Route::fallback(function () {
    return response()->json(['message' => 'no Route matched with those values!'], 404);
});
