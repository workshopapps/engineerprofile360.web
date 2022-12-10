<?php

namespace App\Http\Controllers\Admin;

use App\Models\Employee;
use App\Models\Company;
use Illuminate\Http\Request;
use App\Models\Assessment;
use App\Http\Controllers\Controller;
use App\Models\UserAssessment;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;


class AssessmentController extends Controller
{
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

            $accepted_assessments = UserAssessment::where('org_id', $company->user_id)->with('assessment')->paginate(10);

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

            $completed_assessments = UserAssessment::where('org_id', $company->user_id)->where('completed', true)->with('assessment')->paginate(10);

            return $this->sendResponse(false, null, "Completed Assessment", $completed_assessments, Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Accepted assessment could not be fetched', $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}