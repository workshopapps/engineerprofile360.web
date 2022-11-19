<?php

namespace App\Http\Controllers;

use CsvParser;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateEmployeeRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use App\Models\Employee;
use Exception;

class EmployeeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
    public function addEmpCSV(Request $request)
    {
        if ($request->query('type') == "csv") {
            $csv = new CsvParser();
            $file = json_decode($request->getContent(), true);

            if ($file) {
                $file = $file['csv_file'];
                $result = $csv->parseEmployeeCsv($file);
                if ($result["error"] == false && $result["message"] == "csv parsed") {
                    $json = $result['data'];

                    try {
                        $employee = Employee::create($json);
                        return $this->successResponse(true, 'Employee CSV Uploaded Successfully', $employee, 201);
                    } catch (Exception $e) {
                        return $this->errorResponse('CSV Upload failed', $e->getMessage());
                    }
                } else {
                    //invalid file type(not csv)
                    return $this->errorResponse("Invalid File Type", $result["error"]);
                }
            }
        }
    }

    public function getById(string $user_id): JsonResponse
    {
        $employee = Employee::find($user_id);
        if (!$employee) return $this->errorResponse('Employee does not exist', true, Response::HTTP_NOT_FOUND);
        return $this->successResponse(true, 'Successful', $employee, Response::HTTP_OK);
    }

    public function updateByID(UpdateEmployeeRequest $request,string $employeeId): JsonResponse
    {
        $employee = Employee::find($employeeId);
        if (is_null($employee)) return $this->errorResponse('Employee does not exist', true, Response::HTTP_NOT_FOUND);
        if ($employee->update($request->validated())) return $this->successResponse(true, 'Successful', $employee, Response::HTTP_OK);
        return $this->errorResponse("Employee info wasn't modified", true, Response::NOT_MODIFIED);
    }
}