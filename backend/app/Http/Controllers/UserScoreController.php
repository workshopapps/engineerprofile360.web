<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;
use App\Http\Requests\UserScoreStoreRequest;
use App\Services\UserScoreService;

class UserScoreController extends Controller
{
    /**
     * Store a newly created user score in database.
     *
     * @param UserStoreRequest $request
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
    public function getByEmployeeId(Request $request)
    {
        return UserScoreService::getUserScoreByEmployeeID($request->employee_id);
    }
}