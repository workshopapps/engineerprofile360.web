<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserScoreStoreRequest;
use App\Services\UserScoreService;

class UserScoreController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    /**
     * Store a newly created user score in database.
     *
     * @param  @param  \App\Http\Requests\UserStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserScoreStoreRequest $request)
    {
        return UserScoreService::addUserScore($request->validated());
    }
}