
<?php

use App\Http\Controllers\QuestionsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserScoreController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\AssessmentController;
use App\Http\Controllers\AuthenticateController;
use App\Http\Controllers\CategoriesController;

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

//USERSCORE
Route::prefix("userscore")->group(function () {
    Route::get('/employee/{employeeId}', [UserScoreController::class, 'getScores']);
    Route::get('/assessment/{assId}', [UserScoreController::class, 'getScores']);
    Route::get('/{employeeId}/{assId}', [UserScoreController::class, 'getScores']);
    Route::post('/create', [UserScoreController::class, 'store']);
});


//Users operation routes
Route::prefix("users")->group(function () {
    Route::get('{id}', [UserController::class, 'getUserById']);
    Route::get('verified/{userId}', [UserController::class, 'getVerifiedUserById']);
    Route::put('/{userId}/update', [UserController::class, 'updaterUserInfo']);
    Route::get('all', [UserController::class, 'allUsers']);
});


// assessment routes
Route::prefix("assessment")->group(function () {
    Route::delete('/{assId}/delete', [AssessmentController::class, 'deleteAss']);
    Route::post('/create', [AssessmentController::class, 'createAssessment']);
    Route::post('/{id}', [AssessmentController::class, 'updateAssessment']);
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
    // Route::post('register', [AuthenticationController::class, 'register']);
    Route::post('register', [AuthenticateController::class, "registerUser"]);
    Route::post('login', [AuthenticateController::class, 'loginUser']);
    Route::get('verify/{id}/{token}', [Auth::class, 'verifyEmail']);
    Route::post('logout', [AuthenticationController::class, 'logout']);
    Route::post('refresh', [AuthenticationController::class, 'refresh']);
});

// company route
Route::prefix("company")->group(function () {
    Route::get('all', [CompaniesController::class, 'allCompanyInfo']);
    Route::put('update', [CompaniesController::class, 'updateCompanyInfo']);
});

// questions controller route
Route::prefix("questions")->group(function () {
    Route::post('/add', [QuestionsController::class, 'addManually']);
    Route::put('/{questId}/{assId}/update', [QuestionsController::class, 'updateQuestion']);
    Route::put('/update/{quest_id}/{ass_id}', [QuestionsController::class, 'updateQuestion']);
});

// Categories Controller Routes
Route::prefix("categories")->group(function () {
    Route::put('/update/{cat_id}', [CategoriesController::class, 'updateCategory']);
});

Route::fallback(function () {
    return response()->json(['message' => 'no Route matched with those values!'], 404);
});