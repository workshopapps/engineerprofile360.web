<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\Requests\UserAssessmentRequest;
use Illuminate\Support\Facades\DB;
use Exception;

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


    //delete userassessment
    public function deleteuserassessment(Request $request, $id)
    {
     
    }

    
}
