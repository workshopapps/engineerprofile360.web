<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
// use App\Http\Controllers\User\UserController;
use App\Http\Controllers\QuestionsController;
use App\Http\Controllers\UserScoreController;
use App\Http\Controllers\AssessmentController;

use App\Http\Controllers\AuthenticateController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\EmployeeController;


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
// other route functions here
Route::get("/test", function () {
    // execute the function
    return $this->successResponse(true, "Test case pass", null, 200);
}); 

//USERSCORE
Route::prefix("userscore")->group(function () {
    Route::get('/employee/{id}', [UserScoreController::class, 'getScoresByEmployeeID']);
    Route::get('/assessment/{id}', [UserScoreController::class, 'getScoresByAssessmentID']);
    Route::get('/{employeeId}/{assessmentId}', [UserScoreController::class, 'getScores']);
    Route::post('/create', [UserScoreController::class, 'store']);
});


//Users operation routes
Route::prefix("user")->group(function () {
    Route::get('/{id}', [UserController::class, 'getUserById']);
    Route::get('verified/{userId}', [UserController::class, 'getVerifiedUserById']);
    Route::put('/{userId}/update', [UserController::class, 'updaterUserInfo'])->middleware("isloggedin");
    Route::get('/get/all', [UserController::class, 'allUsers']);
});


//Assessment routes operations
Route::prefix("assessment")->group(function () {
    Route::delete('/{assessmentId}/delete', [AssessmentController::class, 'deleteAss']);
    Route::post('/create', [AssessmentController::class, 'createAssessment'])->middleware("isloggedin","isadmin");
    Route::put('/{assessmentId}', [AssessmentController::class, 'updateAssessment']);
    Route::get('/{organisationId}', [AssessmentController::class, 'getAssByOrgId']);
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
    Route::post('register', [AuthenticateController::class, "registerUser"]);
    Route::post('login', [AuthenticateController::class, 'UserAndEmployeeLogin']);
    Route::get('verify/{id}/{token}', [AuthenticateController::class, 'verifyEmail']);
    Route::post('employee/update/', [AuthenticationController::class, 'setEmployeePassword']);
    Route::prefix("password")->group(function () {
        // forgot password
        Route::get("/forgot-password/{email}", [AuthenticateController::class, "forgotPassword"]);
        Route::post("/reset/{id}/{token}", [AuthenticateController::class, "verifyPasswordReset"]);
    });
});

// company route
Route::prefix("company")->group(function () {
    Route::get('all', [CompanyController::class, 'getCompanies']);
    Route::put('update/{companyId}', [CompanyController::class, 'updateCompany'])->middleware("isloggedin", "isadmin");
    Route::get('{id}', [CompanyController::class, 'byCompanyId']);
    Route::get('user/{userId}', [CompanyController::class, 'getCompanyByUserId']);
});

// questions route operations
Route::prefix("question")->group(function () {
    Route::post('add', [QuestionsController::class, 'addManually']);
    Route::get('get/{org_id}', [QuestionsController::class, 'getQuestByOrgId']);
    Route::get('category/{id}', [QuestionsController::class, 'getByCategoryId']);
    Route::put('{questionId}/{assessmenId}/update', [QuestionsController::class, 'updateQuestion']);
    Route::get('/assessment/{assessmentId}', [QuestionsController::class, 'getQuestionByAssessmentId']);
});

// Categories routes operation
Route::prefix("category")->group(function () {
    Route::put('{categoryId}/update', [CategoryController::class, 'updateCategory']);
    Route::post('add', [CategoryController::class, 'createCategory']);
    Route::delete('{catId}/delete', [CategoryController::class, 'deleteCategory']);
    Route::get('/assessment/{id}', [CategoryController::class, 'getByAssessmentId'])-> middleware("isloggedin", "isadmin");
});

//Employee Routes
Route::prefix('employee')->group(function () {
    Route::post('add', [EmployeeController::class, 'addEmployee'])->middleware("isloggedin", "isadmin");
    Route::post('confirm', [EmployeeController::class, 'confirmCSV'])->middleware("isloggedin", "isadmin");
    Route::get('{id}', [EmployeeController::class, 'getById']);
    Route::get('/company/{org_id}', [EmployeeController::class, 'byCompId']);
    Route::put('{employeeId}/update', [EmployeeController::class, 'updateByID']);

});


Route::fallback(function () {
    return response()->json(['message' => 'no Route matched with those values!'], 404);
});