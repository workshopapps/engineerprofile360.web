<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\Company;
use Illuminate\Http\Request;
use App\Models\Assessment;
use App\Models\UserAssessment;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;


class AssessmentController extends Controller
{

    // @benrobo -> dont touch this method  
    public function createAssessment(Request $request)
    {
        try {
            $payload = json_decode($request->getContent(), true);


            if (!isset($payload["name"]) || !isset($payload["start_date"]) || !isset($payload["start_time"]) ||  !isset($payload["end_date"]) || !isset($payload["end_time"]) || !isset($payload["department_id"]) || !isset($payload["org_id"])) {
                return $this->sendResponse(true, "expected a valid payload", "invalid payload given.", null, 400);
            }

            $uid = $payload["org_id"];
            $id = Str::uuid();
            $name = $payload["name"];
            $start_date = $payload["start_date"];
            $start_time = $payload["start_time"];
            $end_date = $payload["end_date"];
            $end_time = $payload["end_time"];


            // category data
            $data = [
                "id" => $id,
                "name" => $name,
                "start_date" => $start_date,
                "start_time" => $start_time,
                "end_date" => $end_date,
                "end_time" => $end_time,
                "department_id" => $payload["department_id"],
                "org_id" => $uid
            ];

            Assessment::create($data);

            return $this->sendResponse(false, null, "assessment created.", $data, 200);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'something went wrong creating assessment', $e->getMessage(), null, 500);
        }
    }

    // @dreywandowski ---- delete an assessment
    // @Benrobo -> this method has been updated, dont touch.
    public function deleteAssessment(Request $request, $assessmentId): JsonResponse
    {
        try {
            if (!isset($assessmentId) || empty($assessmentId)) {
                return $this->sendResponse(true, "expected a valid assessment 'id'  but got none", "assessment id is missing.", null, 400);
            }


            $uid = $request->user["id"];
            $assessment = Assessment::where('id', $assessmentId)->where("org_id", $uid);

            if ($assessment->count() == 0) {
                return $this->sendResponse(true, "assessment doesnt exists", "assessment not found.", null, 404);
            }

            // check if it same user who's trying to delete assessment
            $org_id = $assessment->first()["org_id"];

            if ($org_id !== $uid) {
                return $this->sendResponse(true, "not authorised to delete assessment", "unauthorised.", null, 404);
            }


            $assessment->delete();

            return $this->sendResponse(false, null, 'assessment deleted successfully', null, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "something went wrong deleting assessment " . $e->getMessage(), 'failed deleting assessment.', null, 500);
        }
    }

    // @Benrobo -> this method has been updated, dont touch.
    public function updateAssessment(Request $request, $assessmentId)
    {
        try {
            $payload = json_decode($request->getContent(), true);

            if (!isset($payload["name"]) || !isset($payload["start_date"]) || !isset($payload["start_time"])) {
                return $this->sendResponse(true, "expected a valid payload", "invalid payload given.", null, 400);
            }

            if (!isset($assessmentId) || empty($assessmentId)) {
                return $this->sendResponse(true, "expected a valid category 'id'  but got none", "category id is missing.", null, 400);
            }


            $uid = $request->user["id"];
            $updatedName = $payload["name"];
            $startDate = $payload["start_date"];
            $startTime = $payload["start_time"];
            $assessment = Assessment::where('id', $assessmentId)->where("org_id", $uid);

            if ($assessment->count() == 0) {
                return $this->sendResponse(true, "assessment doesnt exists", "assessment not found.", null, 404);
            }

            // check if it same user who's trying to update assessment
            $org_id = $assessment->first()["org_id"];

            if ($org_id !== $uid) {
                return $this->sendResponse(true, "not authorised to update assessment", "unauthorised.", null, 404);
            }

            $newName = $updatedName == "" ? $assessment->first()["name"] : $updatedName;
            $newDate = $startDate == "" ? $assessment->first()["start_date"] : $startDate;
            $newTime = $startTime == "" ? $assessment->first()["start_time"] : $startTime;

            $updatedData = [
                "name" => $newName,
                "start_date" => $newDate,
                "start_time" => $newTime,
            ];

            $assessment->update($updatedData);

            return $this->sendResponse(false, null, 'assessment updated successfully', $updatedName, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "something went wrong updating assessment " . $e->getMessage(), 'failed updating assessment.', null, 500);
        }
    }

    // @juddee ---- get organization assessments
    // @Benrobo -> this method has been updated, please dont touch it.  
    public function getAssByOrgId($organization_id = "")
    {
        try {
            $assessments = Assessment::where("org_id", $organization_id)->get();

            return $this->sendResponse(false, null, 'All assessments', $assessments, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "something went wrong fetching assessments " . $e->getMessage(), 'failed fetching assessments.', null, 500);
        }
    }

    // @Benrobo -> still under development
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


    public function adminCreateAssessment(Request $request)
    {
        try {
            $payload = json_decode($request->getContent(), true);


            if (!isset($payload["name"]) || !isset($payload["start_date"]) || !isset($payload["start_time"])) {
                return $this->sendResponse(true, "expected a valid payload", "invalid payload given.", null, Response::HTTP_BAD_REQUEST);
            }

            $uid = $request->user["id"];
            $name = $payload["name"];
            $start_date = $payload["start_date"];
            $start_time = $payload["start_time"];

            $restAssessment = Assessment::where("name", $name);

            if ($restAssessment->count() > 0) {
                return $this->sendResponse(true, "assessment name already exists", "name already exists.", null, Response::HTTP_BAD_REQUEST);
            }

            // category data
            $data = [
                "name" => $name,
                "start_date" => $start_date,
                "start_time" => $start_time,
                "org_id" => $uid
            ];

            Assessment::create($data);

            return $this->sendResponse(false, null, "assessment created.", $data, Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'something went wrong creating assessment', $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function adminUpdateAssessment(Request $request, $assessmentId)
    {
        try {
            $payload = json_decode($request->getContent(), true);

            if (!isset($assessmentId) || empty($assessmentId)) {
                return $this->sendResponse(true, "expected a valid category 'id'  but got none", "category id is missing.", null, Response::HTTP_BAD_REQUEST);
            }


            $uid = $request->user["id"];
            $updatedName = $payload["name"];
            $startDate = $payload["start_date"];
            $startTime = $payload["start_time"];

            $assessment = Assessment::where('id', $assessmentId)->where("org_id", $uid);

            if ($assessment->count() == 0) {
                return $this->sendResponse(true, "assessment doesnt exists", "assessment not found.", null, Response::HTTP_NOT_FOUND);
            }

            // check if it same user who's trying to update assessment
            $org_id = $assessment->first()["org_id"];

            if ($org_id !== $uid) {
                return $this->sendResponse(true, "not authorised to update assessment", "unauthorised.", null, Response::HTTP_UNAUTHORIZED);
            }

            $newName = $updatedName == "" ? $assessment->first()["name"] : $updatedName;
            $newDate = $startDate == "" ? $assessment->first()["start_date"] : $startDate;
            $newTime = $startTime == "" ? $assessment->first()["start_time"] : $startTime;

            $updatedData = [
                "name" => $newName,
                "start_date" => $newDate,
                "start_time" => $newTime,
            ];

            $assessment->update($updatedData);

            return $this->sendResponse(false, null, 'assessment updated successfully', $updatedName, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "something went wrong updating assessment " . $e->getMessage(), 'failed updating assessment.', null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function adminDeleteAssessment(Request $request, $assessmentId): JsonResponse
    {
        try {
            if (!isset($assessmentId) || empty($assessmentId)) {
                return $this->sendResponse(true, "expected a valid assessment 'id'  but got none", "assessment id is missing.", null, Response::HTTP_BAD_REQUEST);
            }


            $uid = $request->user["id"];
            $assessment = Assessment::where('id', $assessmentId)->where("org_id", $uid);

            if ($assessment->count() == 0) {
                return $this->sendResponse(true, "assessment doesnt exists", "assessment not found.", null, Response::HTTP_NOT_FOUND);
            }

            // check if it same user who's trying to delete assessment
            $org_id = $assessment->first()["org_id"];

            if ($org_id !== $uid) {
                return $this->sendResponse(true, "not authorised to delete assessment", "unauthorised.", null, Response::HTTP_UNAUTHORIZED);
            }


            $assessment->delete();

            return $this->sendResponse(false, null, 'assessment deleted successfully', null, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "something went wrong deleting assessment " . $e->getMessage(), 'failed deleting assessment.', null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getCompanyAcceptedAssessments($companyId, $orgId): JsonResponse
    {
        try {
            //this is validating the ownership of the data
            $company = Company::where('user_id', $orgId)->where('id', $companyId)->first();

            if (!$company) {
                return $this->sendResponse(true, "Unauthorized", "Unauthorized account", null, Response::HTTP_UNAUTHORIZED);
            }

            $accepted_assessments = UserAssessment::where('org_id', $company->user_id)->paginate(10);

            return $this->sendResponse(false, null, "Accepted Assessments", $accepted_assessments, Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Accepted assessment could not be fetched', $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getCompanyCompletedAssessments($companyId, $orgId): JsonResponse
    {
        try {
            //this is validating the ownership of the data
            $company = Company::where('user_id', $orgId)->where('id', $companyId)->first();

            if (!$company) {
                return $this->sendResponse(true, "Unauthorized", "Unauthorized account", null, Response::HTTP_UNAUTHORIZED);
            }

            $completed_assessments = UserAssessment::where('org_id', $company->user_id)->where('completed', true)->paginate(10);

            return $this->sendResponse(false, null, "Completed Assessment", $completed_assessments, Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Accepted assessment could not be fetched', $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}