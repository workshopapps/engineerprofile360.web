<?php

use App\Http\Controllers\AuthenticateController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// render swagger api documentation
Route::get('/doc', function () {
    return view('swagger/index');
});


// reset password
Route::get("/password/reset", function(){
    return view("password-reset");
});