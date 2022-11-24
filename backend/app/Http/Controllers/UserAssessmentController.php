<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AssessmentRequest;
use Exception;

class UserAssessmentController extends Controller
{
    public function sendResponse(
        bool $errorState = true,
        string $error = null,
        string $message = 'OK',
        $data = null,
        int $code = 200
    ): JsonResponse {
        return response()->json([
            'errorState' => $errorState,
            'error' => ucfirst($error),
            'message' => ucfirst($message),
            'data' => $data,
        ], $code);
    }


   //Accepts user assessment
   public function acceptUserAssessment(userAssessmentRequest $request,$assessmentId,$employeeId)
   {
     try {
     $userAssessment = new UserAssessment();
    $userAssessment->employee_id = $employeeId;
    $userAssessment->assessment_id = $assessmentId;
    $userAssessment->org_id = $request->org_id;
    $userAssessment->userscore_id = $request->userscore_id;
    $userAssessment->completed = 0;
    $userAssessment->total_questions = 0;
    $userAssessment->correct_questions = 0;
    $userAssessment->result = 0;
    $userAssessment->save();

    return $this->sendResponse(false,null, 'Accepted user assessment successfully',null, 201);
     } catch (Exception $e) {
        return $this->sendResponse(true, $e->getMessage(), 'User assessment was not accepted',null, 400);
     }
   } 


    //delete userassessment
    public function deleteuserassessment(Request $request, $id)
    {
     
    }

    
}
