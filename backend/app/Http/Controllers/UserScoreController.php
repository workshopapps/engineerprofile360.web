<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;
use App\Http\Requests\UserScoreStoreRequest;
use App\Services\UserScoreService;

class UserScoreController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api');
    }
    
    /**
     * Store a newly created user score in database.
     *
     * @param UserScoreStoreRequest $request
     * @return Response
     */
    public function store(UserScoreStoreRequest $request)
    {
        return UserScoreService::addUserScore($request->validated());
    }

    /**
     * Get all scores own by an employee
     *
     * @param  Request  $request
     * @return Response
     */
    public function getByEmployeeById(Request $request)
    {
        return UserScoreService::getUserScoreByEmployeeID($request->employee_id);
    }


    /**
     * Get all scores by assessment
     *
     * @param  Request  $request
     * @return Response
     */
    public function getByEmployeeByAssId(Request $request)
    {
        return UserScoreService::getUserScoreByAssID($request->ass_id);
    }
}