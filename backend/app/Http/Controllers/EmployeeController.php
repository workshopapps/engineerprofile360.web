<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EmployeeController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth:api');
    }

    /**
     * Fetch employees by company id.
     *
     * @return \Illuminate\Http\Response
     */
    //
    public function byCompId($company_id) {
        try {
            $employees = Employee::where('org_id', $company_id)->paginate(5);
            if( !$employees) {
                return $this->errorResponse(
                    'Company Emoyees do not exist',
                    'Employees not found',
                    Response::HTTP_NOT_FOUND
                );}

                return $this->successResponse(
                    true,
                    'Employee',
                    $employees,
                    Response::HTTP_OK
                );

        }catch (Exception $e) {
            //throw $th;
            return $this->errorResponse('Employees not found', $e->getMessage());
        }
    }
}
