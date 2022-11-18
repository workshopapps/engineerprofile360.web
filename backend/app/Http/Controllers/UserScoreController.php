<?php

namespace App\Http\Controllers;

use \Illuminate\Http\Request;
use App\Http\Requests\UserScoreStoreRequest;
use App\Services\UserScoreService;
use App\Models\UserScore;
use Symfony\Component\HttpFoundation\Response;

class UserScoreController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Store a newly created user score in database.
     *
     * @param UserScoreStoreRequest $request
     * @return Response
     */
    public function store(UserScoreStoreRequest $request)
    {
        if (!UserScoreService::categoryMatchesScores($request->validated())) return $this->errorResponse("Couldn't store user score", "The passed questions doesn't match the categories supplied", Response::HTTP_UNPROCESSABLE_ENTITY);
        $userScore = UserScore::create(UserScoreService::prepareRequest($request->validated()));
        return $this->successResponse(true, "User score was added successfully!", $userScore, Response::HTTP_OK);
    }

    /**
     * Get user scores 
     *
     * @param  Request  $request
     * @return Response
     */
    public function getScores(Request $request)
    {
        $userScore = UserScore::where(UserScoreService::getCondition($request));
        if (!$userScore->exists()) return self::errorResponse("Not found", "User Score not found", Response::HTTP_NOT_FOUND);
        return self::successResponse(true, "Successful", $userScore->get(), Response::HTTP_OK);
    }
}