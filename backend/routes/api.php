<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

use App\Http\Controllers\StackController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\InterviewController;
use App\Http\Controllers\QuestionsController;
use App\Http\Controllers\UserScoreController;
use App\Http\Controllers\AssessmentController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\AuthenticateController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\UserAssessmentController;

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
    Route::get('/employee/{id}', [UserScoreController::class, 'getScoresByEmployeeID'])->middleware("isloggedin");
    Route::get('/assessment/{id}', [UserScoreController::class, 'getScoresByAssessmentID'])->middleware("isloggedin", "isadmin");
    Route::get('/company/{id}/max', [UserScoreController::class, 'getCompanyTopPerformance'])->middleware("isloggedin", "isadmin");
    Route::get('/company/{id}', [UserScoreController::class, 'getCompanyTopPerformances'])->middleware("isloggedin", "isadmin");
    Route::get('/{employeeId}/{assessmentId}', [UserScoreController::class, 'getScores'])->middleware("isloggedin");
    Route::post('/create', [UserScoreController::class, 'store'])->middleware("isloggedin");
});


//Users operation routes
Route::prefix("user")->group(function () {
    Route::get('all', [UserController::class, 'getCompanies']);
    Route::get('/{userId}', [UserController::class, 'getUser']);
    Route::get('verified/{userId}', [UserController::class, 'getVerifiedUserById']);
    Route::get('make-admin/{userId}', [UserController::class, 'makeUserAnAdmin']);
    Route::get('block-user/{userId}', [UserController::class, 'blockUser']);
    Route::post('{userId}/deactivate', [UserController::class, 'deactivateCompany']);
    Route::put('/{userId}/update', [UserController::class, 'updaterUserInfo'])->middleware("isloggedin");

    Route::put('verify-user/{userId}', [UserController::class, 'getVerifyUserById']);
});



// User Assessment routes
Route::prefix("user-assessment")->group(function () {
    Route::get('/accept/{assessmentId}/{employeeId}/{orgId}', [UserAssessmentController::class, 'acceptUserAssessment']);
    Route::get('/org/{orgId}', [UserAssessmentController::class, 'getOrgUserAssessmentByPerformance']);
    Route::get('/org/{org_id}/org-available', [UserAssessmentController::class, 'getOrgAvailableAssessment']);
    Route::get('/org/{org_id}/org-completed', [UserAssessmentController::class, 'getOrgCompletedAssessment']);
    Route::get('/{employee_id}', [UserAssessmentController::class, 'getEmployeeAvailableAssessments'])->middleware("isloggedin");
    Route::get('/{employee_id}/completed', [UserAssessmentController::class, 'getEmployeeCompletedAssessment'])->middleware("isloggedin");
    Route::put('/{id}/update', [UserAssessmentController::class, 'updateUserAssessment']);
    Route::delete('/{id}/delete', [UserAssessmentController::class, 'deleteUserAssessment']);
});

//Assessment routes operations
Route::prefix("assessment")->group(function () {
    Route::post('/create', [AssessmentController::class, 'createAssessment'])->middleware("isloggedin", "isadmin");
    // Route::get('/{assessmentId}/notify/{employeeId}', [AssessmentController::class, 'notifyEmployeeAssessment']); // do not uncomment this route, some adjusments is currently been made
    Route::get('/{organization_id}', [AssessmentController::class, 'getAssByOrgId']);
    Route::put('/{assessmentId}', [AssessmentController::class, 'updateAssessment'])->middleware("isloggedin", "isadmin");
    Route::delete('/{assessmentId}/delete', [AssessmentController::class, 'deleteAssessment'])->middleware("isloggedin", "isadmin");

});

// Test Employee Adding using csv file
// Visit http://localhost:8000 in the browser and upload a csv containing a the following attributes (s/n, fullname, username, email)
Route::post("/test_csv", function (Request $req) {
    $csv = new CsvParser();
    $payload = json_decode($req->getContent(), true);
    return $csv->parseEmployeeCsv($payload, '');
});

// authentication route
Route::prefix("auth")->group(function () {
    // organization register & login
    Route::prefix("organization")->group(function(){
        Route::post('register', [AuthenticateController::class, "OrganizationRegister"]);
        Route::post('/login', [AuthenticateController::class, "OrganizationLogin"]);
    });

    // employee login
    Route::post('/employee/login', [AuthenticateController::class, "EmployeeLogin"]);
    // overall admin login
    Route::post('/eval360/admin/login', [AuthenticateController::class, 'OverallAdminLogin']);

    Route::post('verify/{id}/{token}', [AuthenticateController::class, 'verifyEmail']);

    Route::prefix("password")->group(
        function () {
            // forgot password
            Route::get("/forgot-password/{email}", [AuthenticateController::class, "forgotPassword"]);
            Route::post("/reset/{id}/{token}", [AuthenticateController::class, "verifyPasswordReset"]);
        }

    );
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
    Route::get('{id}', [QuestionsController::class, 'getQuestById']);
    Route::get('company/{id}', [QuestionsController::class, 'getQuestByComId']);
    Route::get('category/{id}', [QuestionsController::class, 'getQuestByCatId']);
    Route::put('update/{questionId}', [QuestionsController::class, 'updateQuestion']);
    Route::delete('delete/{questionId}', [QuestionsController::class, 'deleteQuestion']);
    Route::get('/assessment/{id}', [QuestionsController::class, 'getQuestByAssId']);
});

// Categories routes operation
Route::group(['prefix'=>"category", "middleware"=>["isloggedin", "isadmin"]], function () {
    Route::post('/add', [CategoryController::class, 'createCategory']);
    Route::get("/allCategories", [CategoryController::class, 'getCategoriesByCompanyId']);
    Route::put('/{categoryId}/update', [CategoryController::class, 'updateCategory']);
    Route::delete('{categoryId}/delete', [CategoryController::class, 'deleteCategory']);
    Route::get('/{categoryId}', [CategoryController::class, 'getCategoryById']);
});

//Employee Routes
Route::prefix('employee')->group(function () {
    Route::post('add', [EmployeeController::class, 'addEmployee'])->middleware("isloggedin", "isadmin");
    Route::post('confirm', [EmployeeController::class, 'confirmCSV'])->middleware("isloggedin", "isadmin");
    Route::get('{id}', [EmployeeController::class, 'getById']);
    Route::get('/company/{org_id}', [EmployeeController::class, 'byCompId']);
    Route::put('{employeeId}/update', [EmployeeController::class, 'updateByID']);
    Route::get('{departmentId}', [EmployeeController::class, 'getEmplyeesByDepartment']);
});
Route::get('employees', [EmployeeController::class, 'getAllEmployees'])->middleware("isloggedin", "isadmin");



// department routes
Route::prefix("department")->group(function () {
    Route::get('{id}', [DepartmentController::class, 'getDeptByID'])->middleware("isloggedin", "isadmin");
    Route::get('company/{id}', [DepartmentController::class, 'getDeptByOrgID'])->middleware("isloggedin", "isadmin");
    Route::post('/add', [DepartmentController::class, 'addDepartment'])->middleware("isloggedin", "isadmin");
    Route::put('update/{departmentId}', [DepartmentController::class, 'updateDepartment'])->middleware("isloggedin", "isadmin");
    Route::delete('delete/{departmentId}', [DepartmentController::class, 'deleteDepartment'])->middleware("isloggedin", "isadmin");
});

// Interview routes
Route::prefix('interview')->group(function () {
    Route::get('all', [InterviewController::class, 'getInterviews']);
    Route::get('{id}', [InterviewController::class, 'getInterviewById']);
    Route::get('/stack/{stack_id}', [InterviewController::class, 'getInterviewByStack']);
    Route::delete('delete/{id}', [InterviewController::class, 'deleteInterview'])->middleware("isloggedin", "isadmin");
    Route::post('add', [InterviewController::class, 'addInterview'])->middleware('isloggedin', 'isadmin');
    Route::get('get/{id}', [InterviewController::class, 'getInterviewById']);
    Route::get('get/{company}', [InterviewController::class, 'getInterviewByCompanyName']);
    Route::put('update/{interviewId}', [InterviewController::class, 'updateInterview']);


});

// User Assessment routes
Route::prefix("user-assessment")->group(function () {
    Route::post('/accept/{assessmentId}/{employmentId}/{orgId}', [UserAssessmentController::class, 'acceptUserAssessment']);
    Route::get('/org/{orgId}', [UserAssessmentController::class, 'getOrgUserAssessmentByPerformance']);
    Route::get('/org/{org_id}/org-available', [UserAssessmentController::class, 'getOrgAvailableAssessment']);
    Route::get('/org/{org_id}/org-completed', [UserAssessmentController::class, 'getOrgCompletedAssessment']);
    Route::get('/{employee_id}', [UserAssessmentController::class, 'getEmployeeAvailableAssessments'])->middleware("isloggedin");
    Route::get('/{employee_id}/completed', [UserAssessmentController::class, 'getEmployeeCompletedAssessment'])->middleware("isloggedin");
    Route::put('/{id}/update', [UserAssessmentController::class, 'updateUserAssessment']);
    Route::delete('/{id}/delete', [UserAssessmentController::class, 'deleteUserAssessment']);

});

// Stack route
Route::prefix("stack")->group(function () {
    Route::post('add', [StackController::class, 'addStack'])->middleware("isloggedin", "isadmin");
    Route::put('update/{stackId}', [StackController::class, 'updateStack'])->middleware("isloggedin", "isadmin");
    Route::delete('delete/{stackId}', [StackController::class, 'deleteStack']);
    Route::get('all', [StackController::class, 'getAllStacks']);
    Route::get('{id}', [StackController::class, 'getStackById']);
});

Route::fallback(function () {
    return response()->json(['message' => 'no Route matched with those values!'], 404);
});
