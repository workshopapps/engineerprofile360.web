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
            $data = $request->validated();
            $UserAssessment = UserAssessment::where(["assessment_id" => $data['assessment_id'], "employee_id" => $data['employee_id']]);
            if ($UserAssessment->first()) return $this->sendResponse(true, "Assessment Taken", "Sorry, you've taken this assessment",null,  Response::HTTP_BAD_REQUEST);
            $result = UserScoreService::submit($data);
            return $this->sendResponse(false, null, "Your assessment has been submitted successfully!", $result, Response::HTTP_CREATED);
        } catch (\Exception $e) {
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
            $userScore  = UserAssessment::where(["employee_id" => $employeeId, "assessment_id" => $assessmentId])->with("employees")->with('userscore');
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (\Exception $e) {
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
            $userScore = UserAssessment::where('assessment_id', $id)->with('userscore');
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (\Exception $e) {
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
                ->with(['department', 'completed_assessment.assessment.userscore'])->withCount([
                    "completed_assessment",
                    'assessment AS points' => function ($query) {
                        $query->select(DB::raw("SUM(result) as points"));
                    },
                    'assessment AS total_points' => function ($query) {
                        $query->select(DB::raw("SUM(total_questions) as total_points"));
                    }
                ]);
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (\Exception $e) {
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
            $userScore = Employee::where("org_id", $id)->with(["userscore", "department"])->withCount([
                'assessment AS points' => function ($query) {
                    $query->select(DB::raw("SUM(result) as points"));
                }
            ])->orderBy('points', 'desc');
            return $this->sendResponse(false, null, "Successful", $userScore->first(), Response::HTTP_OK);
        } catch (\Exception $e) {
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
            $userScore = Employee::where("org_id", $id)->with("department")->withCount([
                "completed_assessment",
                'assessment AS points' => function ($query) {
                    $query->select(DB::raw("SUM(result) as points"));
                },
                'assessment AS total_points' => function ($query) {
                    $query->select(DB::raw("SUM(total_questions) as total_points"));
                }
            ])->orderBy('points', 'desc');
            return $this->sendResponse(false, null, "Successful", $userScore->get(), Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, "Error fetching user scores", $e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }
}