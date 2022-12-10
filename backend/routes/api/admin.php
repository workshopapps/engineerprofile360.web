<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AssessmentController;
use App\Http\Controllers\Admin\StackController;


//Admin operation routes
Route::prefix("admin")->group(function () {
    Route::get('overview', [AdminController::class, 'getAdminOverview'])->middleware("isloggedin", "isadmin");
    Route::get('users', [AdminController::class, 'getAllUsers'])->middleware("isloggedin", "isadmin");
    Route::delete('/{companyId}/delete', [AdminController::class, 'deleteUserCompany']);
    Route::get('/companies', [AdminController::class, 'getAllCompanies']);
    Route::get('/employees', [AdminController::class, 'getAllEmployees']);

    //Admin Assessment routes operations
    Route::prefix("assessment")->group(function () {
        Route::post('/create', [AssessmentController::class, 'adminCreateAssessment'])->middleware("isloggedin", "isoveralladmin");
        Route::put('/{assessmentId}', [AssessmentController::class, 'adminUpdateAssessment'])->middleware("isloggedin", "isoveralladmin");
        Route::delete('/{assessmentId}/delete', [AssessmentController::class, 'adminDeleteAssessment'])->middleware("isloggedin", "isoveralladmin");
    });

    // Stack route
    Route::prefix("stack")->group(function () {
        Route::post('add', [StackController::class, 'addStack'])->middleware("isloggedin", "isadmin");
        Route::put('{stackId}/update', [StackController::class, 'updateStack'])->middleware("isloggedin", "isadmin");
        Route::delete('{stackId}/delete', [StackController::class, 'deleteStack']);
        Route::get('all', [StackController::class, 'getAllStacks'])->middleware("isloggedin", "isadmin");
        Route::get('{stackId}', [StackController::class, 'getStackById'])->middleware("isloggedin", "isadmin");
    });
});