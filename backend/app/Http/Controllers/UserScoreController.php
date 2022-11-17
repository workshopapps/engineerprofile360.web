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
     * Get all scores 
     *
     * @param  Request  $request
     * @return Response
     */
    public function getScores(Request $request)
    {
        return UserScoreService::getUserScore($request);
    }
}