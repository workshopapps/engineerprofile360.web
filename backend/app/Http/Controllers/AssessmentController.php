<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;
use App\Models\Assessment;
use App\Http\Requests\AssessmentRequest;
use App\Http\Requests\UpdateAssessmentRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class AssessmentController extends Controller
{

    public function createAssessment(AssessmentRequest $request)
    {
        $data = $request->all();

        try {
            //$data = file_get_contents("php://input");
            Assessment::create($data);

            return $this->successResponse(true, 'Assessment created successfully', Response::HTTP_CREATED);

        } catch (Exception $e) {
            return $this->errorResponse('Assessment could not be created', $e->getMessage());
        }
    }

    // @dreywandowski ---- delete an assessment
    public function deleteAssessment($assessmentId): JsonResponse
    {
        try {
            $assessment = Assessment::findorFail($assessmentId);

            if (!$assessment) {
                return $this->errorResponse(
                    'Assessment does not exist',
                    'Assessment not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $assessment->delete();

            return $this->successResponse(true, 'Assessment deleted successfully', Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->errorResponse('Assessment not fetched', $e->getMessage());
        }

    }

    public function updateAssessment(UpdateAssessmentRequest $request, $assessmentId)
    {
        try {
            // $user = auth('sanctum')->user()->id;
            $updatedData = $request->all();

            $assessment = Assessment::find($assessmentId);

            if (!$assessment) {
                return $this->errorResponse(
                    'Assessment does not exist',
                    'Assessment not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $assessment->update($updatedData);
            return $this->successResponse(true, 'Assessment updated successfully', Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->errorResponse('Assessment not fetched', $e->getMessage());
        }

    }


    // @juddee ---- get organization assessments 
    public function getAssByOrgId(Request $request, $organization_id)
    {
        try {
            $assessments = Assessment::where('org_id', $organization_id)->get();
            if (!$assessments) {
                $assessments = [];
            }

            return $this->successResponse(true, "Organisation assessments", $assessments, Response::HTTP_OK);

        } catch (Exception $e) {
            return $this->errorResponse('Company assessments not found', $e->getMessage());
        }

    }

    public function notifyEmployeeAssessment($assessment_id, $employee_id)
    {
        try {


            $assessment = Assessment::find($assessment_id);
            if (!$assessment) {
                return $this->sendResponse(
                    true,
                    'Assessment does not exist',
                    'Assessment not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }

            $employee = Employee::find($employee_id);
            if (!$employee || $employee->org_id != $assessment->org_id) {
                return $this->sendResponse(
                    true,
                    'Employee does not exist',
                    'Employee not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }



            $assessment_name = $assessment->name;
            $assessment_start_date = $assessment->start_date;
            $assessment_start_time = $assessment->start_time;
            $org_id = $assessment->org_id;

            $details = [
                'title' => 'Assessment Notification',
                'body' => 'You have been assigned an assessment',
                'name' => $employee->fullname,
                'assessment' => $assessment_name,
                'assessment_id' => $assessment_id,
                'assessment_start_date' => $assessment_start_date,
                'assessment_start_time' => $assessment_start_time,
                'org_id' => $org_id
            ];

            // Send email to employee
            // \Mail::to($email)->send(new \App\Mail\AssessmentNotification($details));

            return $this->sendResponse(
                false,
                null,
                'Assessment notification sent successfully',
                $details,
                Response::HTTP_OK
            );


        } catch (Exception $e) {
            return $this->sendResponse(
                true,
                'Assessment notification not sent',
                $e->getMessage(),
                null,
                Response::HTTP_INTERNAL_SERVER_ERROR
            );

        }
    }
}