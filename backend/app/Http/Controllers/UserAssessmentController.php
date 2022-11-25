<?php

namespace App\Http\Controllers;

use App\Models\UserAssessment;
use App\Models\Employee;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\UserAssessmentRequest;
use App\Models\Assessment;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class UserAssessmentController extends Controller
{
    //Accepts user assessment
    public function acceptUserAssessment( $assessmentId, $employeeId,$orgId)
    {

       try {
            $assessment_exist = Assessment::find($assessmentId);
            $employee_exist = Employee::find($employeeId);

            //checks if employee exist
            if ($assessment_exist&&$employee_exist) {
                $userAssessment = UserAssessment::create(['employee_id' => $employeeId, 'assessment_id' => $assessmentId,
                'org_id' => $org_id, 'userscore_id' => '', 'completed' => 0,
                'total_questions' => 0, 'correct_questions' => 0, 'result' => 0]);
                return $this->sendResponse(false, null, 'Accepted user assessment successfully', null, Response::HTTP_CREATED);
            }
            else{
                return $this->sendResponse(true, 'Provide a valid assessment Id or employee Id', null, null, Response::HTTP_BAD_REQUEST);
            }

       
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'User assessment was not accepted', null, Response::HTTP_BAD_REQUEST);
        }
    }

    //Gets User Assessment In An Organisation And Order By Performance
    public function getOrgUserAssessmentByPerformance($orgId)
    {
        try {
            // Get all user assessments in an organisation
            $orgUserAssessments = UserAssessment::where('org_id', $orgId)
                ->orderBy('result', 'desc')
                ->get();

           if ($orgUserAssessments) {
            return $this->sendResponse(false, null, 'Organisation assessment sent successfully', $orgUserAssessments, Response::HTTP_OK);
           }
           else{
            return $this->sendResponse(true, 'no record was found', null, null, Response::HTTP_BAD_REQUEST);
           }
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'Organisation assessment could not be sent ', null, Response::HTTP_BAD_REQUEST);
        }
    }


    /**
     * It gets all the assessments for a given employee
     * 
     * @param string employee_id The id of the employee whose assessments you want to get.
     * 
     * @return JsonResponse All the assessments for the given employee.
     */
    public function getEmployeeAvailableAssessments($employee_id): JsonResponse
    {
        try {

            // Get all assessments for the employee
            $employee = Employee::find($employee_id);

            if (!$employee) {
                return $this->sendResponse(true, 'Employee not found', "", null, Response::HTTP_NOT_FOUND);
            }

            $employeeAssessments = UserAssessment::where('employee_id', $employee_id)->get();

            return $this->sendResponse(false, null, 'Employee assessments sent successfully', $employeeAssessments, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'Employee assessments could not be sent ', null, Response::HTTP_BAD_REQUEST);
        }
    }



    /**
     * Fetch available user assessment by company id.
     *
     * @return \Illuminate\Http\Response
     */
    //
    public function getOrgAvailableAssessment($id): JsonResponse
    {

        try {
            $userAssessment = UserAssessment::where('org_id', $id)->where("completed", false)->get();
            $checkUserAssessment = UserAssessment::where('org_id', $id)->where("completed", false)->exists();
            if (!$checkUserAssessment) {

                return $this->sendResponse(true, 'Fetch Available User Assessment By Company ID failed', 'No Available User Assessment exist for this Company ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, 'OK', $userAssessment, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Fetch Available User Assessment By Company ID failed', $e->getMessage());
        }
    }


    /**
     * Fetch completed user assessment by company id.
     *
     * @return \Illuminate\Http\Response
     */
    //
    public function getOrgCompletedAssessment($id): JsonResponse
    {

        try {
            $userAssessment = UserAssessment::where('org_id', $id)->where("completed", true)->get();
            $checkUserAssessment = UserAssessment::where('org_id', $id)->where("completed", true)->exists();
            if (!$checkUserAssessment) {

                return $this->sendResponse(true, 'Fetch Completed User Assessment By Company ID failed', 'No User Assessment exist for this company ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, 'OK', $userAssessment, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Fetch Completed User Assessment By ID Company failed', $e->getMessage());
        }
    }



    /**
     * It gets all assessments completed by an employee where completed = true
     *
     * @param string employee_id The id of the employee whose completed assessments you want to get.
     *
     * @return JsonResponse All the assessments completed by the employee.
     */
    public function getEmployeeCompletedAssessment($employee_id): JsonResponse
    {
        try {

            // Check if employee exists in employees table
            $employee = Employee::where('id', $employee_id)->first();

            if (!$employee) {
                return $this->sendResponse(true, 'Employee not found', "", null, Response::HTTP_NOT_FOUND);
            }



            // Get all assessments completed by an employee where completed = true
            $completedAssessments = UserAssessment::where('employee_id', $employee_id)->where('completed', true)->get();
            $msg = count($completedAssessments) < 1 ? "No completed assessment found" : "All completed assessments";

            return $this->sendResponse(
                false,
                null,
                $msg,
                $completedAssessments,
                Response::HTTP_OK
            );


        } catch (\Throwable $th) {
            return $this->sendResponse(
                true,
                $th->getMessage(),
                "Error",
                null,
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }


    //delete userAssessment
    public function deleteUserAssessment(Request $request, $id)
    {
        try {
            //checking if assessment id exists in assessment table
            $assessment = new Assessment();
            $assessmentId = UserAssessment::where('assessment_id', $assessment->id);
            if ($assessmentId->count() > 0) {
                return $this->sendResponse(
                    true,
                    'Assessment Id does not exist',
                    'Assessment not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }
            //checking if the org_id in userAssessment is the same as org_id that created the assessment
            $checkid = UserAssessment::where('org_id', $assessment->org_id || 'assessment_id', $assessment->id);
            if (!$checkid) {
                return $this->sendResponse(
                    true,
                    'You are not Authorize to Delete This Assessment',
                    'error',
                    null,
                    Response::HTTP_UNAUTHORIZED
                );
            } else {
                // delete userAssessment
                $userAssessment = UserAssessment::find($id);
                $userAssessment->delete();

                return $this->sendResponse(
                    false,
                    null,
                    'User Assessment Deleted Successfully',
                    null,
                    Response::HTTP_OK
                );

            }
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Assessment not deleted', $e->getMessage(), null, 500);
        }
    }

    public function updateUserAssessment(Request $request, $id)
    {
        try {

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
                $assessmentId = UserAssessment::where('assessment_id', $assessExist->id);
                if ($assessmentId->count() > 0) {
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
                        Response::HTTP_UNAUTHORIZED
                    );
                } else {
                    $update = UserAssessment::where('id', $id)->update($inputs);
                    // $update->update($inputs);
                    return $this->sendResponse(
                        true,
                        'Assessment Updated Successfully',
                        'success',
                        null,
                        Response::HTTP_OK
                    );
                }

            }

        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Assessment not Updated', $e->getMessage(), null, 500);
        }
    }

    public function getAssessmentByID(Request $request, $id)
    {
        try
        {
            // check if assessment exists
            $assessmentexist = UserAssessment::where('id', $id)->exists();

            if($assessmentexist) {

                $useraccessment = UserAssessment::find($id);

                return $this->sendResponse(true, null, 'Assessment Details',$useraccessment,Response::HTTP_OK);

            }

            return $this->sendResponse(true, null, 'No Assessment Exists for the given Id', [], Response::HTTP_NOT_FOUND);

        }catch (Exception $e)
        {
            Log::error("UserAssessment Error", array("details" => $e->getMessage()));

            return $this->sendResponse(false, null, "Unable to fetch assessment at this time",Response::HTTP_INTERNAL_SERVER_ERROR);
        }


    }

    public function getUserTopPerformance($userId)
    {
        try
        {
            $userResults = UserAssessment::where('employee_id',$userId)->get()->pluck('result');

            if(count($userResults) > 0) {

                $max = $userResults->max();

                return $this->sendResponse(true, null, 'User Top Performance',$max,Response::HTTP_OK);
            }

            return $this->sendResponse(true, null, 'No Score found for the given User Id', [], Response::HTTP_NOT_FOUND);

        }catch (Exception $e)
        {
            Log::error("UserScore Error", array("details" => $e->getMessage()));

            return $this->sendResponse(false, null, "Unable to fetch User's Top Performance",Response::HTTP_INTERNAL_SERVER_ERROR);
        }



    }
}

