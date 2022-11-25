<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserAssessmentRequest;
use App\Models\Assessment;
use App\Models\UserAssessment;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class UserAssessmentController extends Controller
{

    //Accepts user assessment
    public function acceptUserAssessment(UserAssessmentRequest $request, $assessmentId, $employeeId)
    {
        try {
            $userAssessment = UserAssessment::create(['employee_id' => $employeeId, 'assessment_id' => $assessmentId,
                'org_id' => $request->org_id, 'userscore_id' => $request->userscore_id, 'completed' => 0,
                'total_questions' => 0, 'correct_questions' => 0, 'result' => 0]);

            return $this->sendResponse(false, null, 'Accepted user assessment successfully', null, Response::HTTP_CREATED);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'User assessment was not accepted', null, Response::HTTP_BAD_REQUEST);
        }
    }

    //Gets User Assessment In An Organisation And Order By Performance
    public function getOrgUserAssessmentByPerformance($orgId)
    {
        try {
            $org_assessments = DB::table('UserAssessment')
                ->where('org_id', '=', $orgId)
                ->orderBy('result', 'desc')
                ->get();

            return $this->sendResponse(false, null, 'Organisation assessment sent successfully', $org_assessments, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'Organisation assessment could not be sent ', null, Response::HTTP_BAD_REQUEST);
        }
    }

    //delete userassessment
    public function deleteUserAssessment(Request $request, $id)
    {
        try
        {
            //checking if assessment id exists in assessment table
            $assessment = new Assessment();
            $asse_id = UserAssessment::where('assessment_id', $assessment->id);
            if ($asse_id->count() > 0) {
                return $this->sendResponse(
                    true,
                    'Assessment Id does not exist',
                    'Assessment not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }
            //checking if the org_id in userassessment is the same as org_id that created the assessment
            $checkid = UserAssessment::where('org_id', $assessment->org_id || 'assessment_id', $assessment->id);
            if (!$checkid) {
                return $this->sendResponse(
                    true,
                    'You are not Authorize to Delete This Assessment',
                    'success',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            } else {
                // $delete = $checkid->find($id);
                $dele = UserAssessment::where('id', $id)->delete();
                // $dele->delete();
                return $this->sendResponse(
                    true,
                    'Assessment Deleted Successfully',
                    'success',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }
        } catch (\Exception$e) {
            return $this->sendResponse(true, 'Assessment not deleted', $e->getMessage(), null, 500);
        }
    }

    public function updateUserAssessment(Request $request, $id)
    {
        try
        {

            //validating input request
            $inputsValidate = $request->validate([
                'completed' => 'required',
                'total_questions' => 'required',
                'correct_questions' => 'required',
                'result' => 'required',
            ]);
            $inputs = [
                'completed' => $request->completed,
                'total_questions' => $request->total_questions,
                'correct_questions' => $request->correct_questions,
                'result' => $request->result,
            ];

            if (!$inputsValidate) {
                return $this->sendResponse(
                    true,
                    'Invalid Inputs',
                    'Check your Inputs Again',
                    null,
                    Response::HTTP_BAD_REQUEST
                );
            } else {
                //check if assessment id exist or not
                $assessExist = new Assessment();
                $asse_id = UserAssessment::where('assessment_id', $assessExist->id);
                if ($asse_id->count() > 0) {
                    return $this->sendResponse(
                        true,
                        'Assessment Id does not exist',
                        'Assessment not found',
                        null,
                        Response::HTTP_NOT_FOUND
                    );
                }
                //checking if org_id in userAssessment is the same as the one in the Assessment table
                $orgidExist = UserAssessment::where('org_id', $assessExist->org_id || 'assessment_id', $assessExist->id);
                if (!$orgidExist) {
                    return $this->sendResponse(
                        true,
                        'You are not Authorize to Update This Assessment',
                        'success',
                        null,
                        Response::HTTP_NOT_FOUND
                    );
                } else {
                    $update = UserAssessment::where('id', $id)->update($inputs);
                    // $update->update($inputs);
                    return $this->sendResponse(
                        true,
                        'Assessment Updated Successfully',
                        'success',
                        null,
                        Response::HTTP_NOT_FOUND
                    );
                }

            }

        } catch (\Exception$e) {
            return $this->sendResponse(true, 'Assessment not Updated', $e->getMessage(), null, 500);
        }
    }
}
