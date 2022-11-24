<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\UserAssessmentRequest;
use Illuminate\Support\Facades\DB;
use Exception;
use Illuminate\Http\JsonResponse;
use App\Models\UserAssessment;

class UserAssessmentController extends Controller
{
   

   //Accepts user assessment
   public function acceptUserAssessment(UserAssessmentRequest $request,$assessmentId,$employeeId)
   {
     try {
     $userAssessment = UserAssessment::create(['employee_id'=>$employeeId,'assessment_id'=>$assessmentId,
     'org_id'=>$request->org_id,'userscore_id'=>$request->userscore_id,'completed'=>0,
     'total_questions'=>0,'correct_questions'=>0,'result'=>0,]);

    return $this->sendResponse(false,null, 'Accepted user assessment successfully',null, Response::HTTP_CREATED);
     } catch (Exception $e) {
        return $this->sendResponse(true, $e->getMessage(), 'User assessment was not accepted',null, Response::HTTP_BAD_REQUEST);
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

            return $this->sendResponse(false,null, 'Organisation assessment sent successfully',$org_assessments, Response::HTTP_OK);
          } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), 'Organisation assessment could not be sent ',null, Response::HTTP_BAD_REQUEST);
          }
     }

    /**
     * Fetch available user assessment by company id.
     *
     * @return \Illuminate\Http\Response
     */
    //
    public function GetOrgAvailableAssessment($id): JsonResponse
    {
        try 
        {
            $userassessment = UserAssessment::where('org_id', $id)->where("completed", false)->get();
            $checkuserassessment = UserAssessment::where('org_id', $id)->where("completed", false)->exists();
            if (!$checkuserassessment) {
                return $this->sendResponse(true, 'Fetch Available User Assessment By Company ID failed', 'No Available User Assessment exist for this Company ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, 'OK', $userassessment, Response::HTTP_OK);
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
    public function GetOrgCompletedAssessment($id): JsonResponse
    {
        try 
        {
            $userassessment = UserAssessment::where('org_id', $id)->where("completed", true)->get();
            $checkuserassessment = UserAssessment::where('org_id', $id)->where("completed", true)->exists();
            if (!$checkuserassessment) {
                return $this->sendResponse(true, 'Fetch Completed User Assessment By Company ID failed', 'No User Assessment exist for this company ID', null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, 'OK', $userassessment, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Fetch Completed User Assessment By ID Company failed', $e->getMessage());
        }
    }
    

    //delete userassessment
    public function deleteuserassessment(Request $request, $id)
    {
     
    }

    
}
