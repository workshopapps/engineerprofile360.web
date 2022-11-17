<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserScoreStoreRequest;
use App\Services\UserScoreService;

class UserScoreController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  @param  \App\Http\Requests\UserStoreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserScoreStoreRequest $request)
    {
        return UserScoreService::addUserScore($request->validated());
    }
}