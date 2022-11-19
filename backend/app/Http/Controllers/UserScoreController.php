<?php

namespace App\Http\Controllers;

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
        if (!UserScoreService::categoryMatchesScores($request->validated())) return $this->errorResponse("The passed questions doesn't match the categories supplied", true, Response::HTTP_UNPROCESSABLE_ENTITY);
        $userScore = UserScore::create(UserScoreService::prepareRequest($request->validated()));
        return $this->successResponse(true, "User score was added successfully!", $userScore, Response::HTTP_OK);
    }

    /**
     * Get employee score for an assessment
     *
     * @param  string $employeeId
     * @param  string $assessmentId
     * @return Response
     */
    public function getScores(string $employeeId, string $assessmentId)
    {
        $userScore = UserScore::where(["employee_id" => $employeeId, "assessment_id" => $assessmentId]);
        if (!$userScore->first()) return $this->errorResponse("User Score not found", true, Response::HTTP_NOT_FOUND);
        return $this->successResponse(true, "Successful", $userScore->get(), Response::HTTP_OK);
    }

    /**
     * Get all scores for an assessment
     *
     * @param  string  $id
     * @return Response
     */
    public function getScoresByAssessmentID(string $id)
    {
        $userScore = UserScore::where("assessment_id", $id)->get();
        if (!$userScore){ 
            return $this->errorResponse("User Score not found", true, Response::HTTP_NOT_FOUND);
        }
        return $this->successResponse(true, "User Score", $userScore, Response::HTTP_OK);
    }

    /**
     * Get all scores by an employee
     *
     * @param string  $id
     * @return Response
     */
    public function getScoresByEmployeeID(string $id)
    {
        $userScore = UserScore::where("employee_id", $id)->get();
        if (!$userScore) {
            return $this->errorResponse("User Score not found", true, Response::HTTP_NOT_FOUND);
        }
        return $this->successResponse(true, "User Score", $userScore, Response::HTTP_OK);
    }
}