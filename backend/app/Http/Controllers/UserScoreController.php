<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserScoreStoreRequest;
use App\Models\Employee;
use App\Models\UserAssessment;
use App\Services\UserScoreService;
use App\Models\UserScore;
use Illuminate\Support\Facades\DB;
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
            $result = UserScoreService::submit($request->validated());
            return $this->sendResponse(false, null, "Your assessment has been submitted successfully!", $result, Response::HTTP_CREATED);
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
            $userScore = $userScore = UserScore::select('*')
                ->join('user_assessments', 'user_assessments.userscore_id', '=', 'user_scores.id')
                ->where(["user_scores.employee_id" => $employeeId, "user_scores.assessment_id" => $assessmentId]);
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
            $userScore = UserScore::select('*')
                ->join('user_assessments', 'user_assessments.userscore_id', '=', 'user_scores.id')
                ->where('user_scores.assessment_id', $id);
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
            $userScore = Employee::where("id", $id)
                ->with('department')->withCount("completed_assessment")->with('userscore');
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching user scores", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Get company top employee performance
     *
     * @param string  $id
     * @return Response
     */
    public function getCompanyTopPerformance(string $id)
    {
        try {
            $userScore = Employee::where("org_id", $id)->with("userscore")->with("department")->withCount([
                'assessment AS points' => function ($query) {
                    $query->select(DB::raw("SUM(result) as points"));
                }
            ])->orderBy('points', 'desc');
            return $this->sendResponse(false, null, "Successful", $userScore->first(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching user scores", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Get company top employee by thier performance
     *
     * @param string  $id
     * @return Response
     */
    public function getCompanyTopPerformances(string $id)
    {

        try {
            $userScore = Employee::where("org_id", $id)->withCount("completed_assessment")->with("department")->withCount([
                'assessment AS points' => function ($query) {
                    $query->select(DB::raw("SUM(result) as points"));
                }
            ])->orderBy('points', 'desc');
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching user scores", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}