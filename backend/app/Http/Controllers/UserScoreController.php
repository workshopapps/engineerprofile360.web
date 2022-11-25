<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserScoreStoreRequest;
use App\Services\UserScoreService;
use App\Models\UserScore;
use Symfony\Component\HttpFoundation\Response;


class UserScoreController extends Controller
{
    /**
     * Store a newly created user score in database.
     *
     * @param UserScoreStoreRequest $request
     * @return Response
     */
    public function store(UserScoreStoreRequest $request)
    {
        try {
            if (!UserScoreService::categoryMatchesScores($request->validated())) return $this->sendResponse(true, "Not Permited", "The passed questions doesn't match the categories supplied", Response::HTTP_UNPROCESSABLE_ENTITY);
            $userScore = UserScore::create(UserScoreService::prepareRequest($request->validated()));
            return $this->sendResponse(false, null, "User score was added successfully!", $userScore, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error storing the userr score", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
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
        try {
            $userScore = UserScore::where(["employee_id" => $employeeId, "assessment_id" => $assessmentId]);
            if (!$userScore->first()) return $this->sendResponse(true, "Not Found", "User Score not found", Response::HTTP_NOT_FOUND);
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching the userscores", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Get all scores for an assessment
     *
     * @param  string  $id
     * @return Response
     */
    public function getScoresByAssessmentID(string $id)
    {
        try {
            $userScore = UserScore::where("assessment_id", $id);
            if (!$userScore->first()) return $this->sendResponse(true, "Not Found", "User Score not found", Response::HTTP_NOT_FOUND);
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching user scores", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Get all scores by an employee
     *
     * @param string  $id
     * @return Response
     */
    public function getScoresByEmployeeID(string $id)
    {
        try {
            $userScore = UserScore::where("employee_id", $id)->get();
            if (!$userScore->first()) return $this->sendResponse(true, "Not Found", "User Score not found", Response::HTTP_NOT_FOUND);
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching user scores", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}