<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserScoreStoreRequest;
use App\Models\UserAssessment;
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
            UserAssessment::create(["userscore_id" => $userScore->id, "completed" => 1, "result" => ($request->validated()["correct_questions"] / $request->validated()["total_questions"]) * 100, ...$request->validated()]);
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
            $userScore = UserScore::select('*')
                ->join('user_assessments', 'user_assessments.userscore_id', '=', 'user_scores.id')
                ->where("user_scores.employee_id", $id);
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
            $userScore = UserScore::select('*')
                ->join('user_assessments', 'user_assessments.userscore_id', '=', 'user_scores.id')
                ->where('user_assessments.org_id', $id)->orderBy('user_assessments.result', 'asc');
            if (!$userScore->count()) return $this->sendResponse(true, "Not Found", "User Score not found", Response::HTTP_NOT_FOUND);
            return $this->sendResponse(false, null, "Successful", $userScore->first(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching user scores", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * Get company top score order by performance
     *
     * @param string  $id
     * @return Response
     */
    public function getCompanyTopPerformances(string $id)
    {
        try {
            $userScore = UserAssessment::select('departments.name as department, employees.fullname as employee_name, sum(user_assessments.correct_questions) as points')
                ->leftJoin('employees', function ($join) use ($id) {
                    $join->on('employees.id', '=', 'user_assessments.employee_id')
                        ->where(['employees.org_id' => $id]);
                })
                ->join('departments', 'departments.id', '=', 'employees.department_id')
                ->orderBy('user_assessments.result', 'asc');
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Error fetching user scores", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}