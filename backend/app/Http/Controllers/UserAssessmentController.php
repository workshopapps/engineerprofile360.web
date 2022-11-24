<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use App\Models\UserAssessment;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserAssessmentController extends Controller
{

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
                return $this->sendResponse(
                    true,
                    'Employee does not exist',
                    'Employee does not exist',
                    null,
                    Response::HTTP_NOT_FOUND
                );
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


    //delete userassessment
    public function deleteuserassessment(Request $request, $id)
    {
     
    }

    
}
