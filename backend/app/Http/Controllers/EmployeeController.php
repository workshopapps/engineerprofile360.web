<?php

namespace App\Http\Controllers;
use CsvParser;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateEmployeeRequest;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use App\Models\Employee;
use App\Models\Department;
use Exception;
use Illuminate\Support\Str;

class EmployeeController extends Controller
{
    public function __construct()
    {
        // $this->middleware('isloggedin');
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
    
    public function addEmployee(Request $request)
    {
        $query = $request->query('type');      
            if ($query === "csv") {
                $csv = new CsvParser();
                $payload = json_decode($request->getContent(), true);
                $file = $payload['csv_file'];
                $result = $csv->parseEmployeeCsv($file); 
                if ($result["error"] == false && $result["message"] == "csv parsed") {
                    $data = $result['data'];
                    return $this->sendResponse(false, null, "CSV Parsed Successfully", $data, 200);
                }else{
                    return $this->sendResponse(true, $result["error"], "Invalid File Type", null, 400);
                }
            }
            else if ($query === "manual"){
                $payload = $request->getContent(); 
                $data = json_decode($payload, true);
                $data['id'] = Str::uuid();
                return $this->insertEmployee($data);
            } 
            else {
                return $this->sendResponse(true, "No add query parameter", "Invalid Request", null, 404);
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
        return $this->errorResponse("Employee info wasn't modified", true, Response::HTTP_NOT_MODIFIED);
    }

    public function confirmCSV(Request $request)
    {
        $parser = new CsvParser();
        $file = json_decode($request->getContent(), true);
        $data = $parser->trimEmployeeCSV($file['data'], $file['department_id'], $file['org_id']);
        return $this->insertEmployee($data);
    }

    public function insertEmployee($data)
    {
        try {
            $employee = Employee::insert($data);
            return $this->sendResponse(false, null, "Employee Added Successfully", $employee, 201);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Employee Action Failed", null, 400);
        } 
    }

    public function getEmplyeesByDepartment($departmentId)
    {
        try {
            $department = Department::find($departmentId);

            if( !$department ) {
                return $this->sendResponse(
                    'Department do not exist',
                    'Department not found',
                    Response::HTTP_NOT_FOUND
                );
            }
            $employees = Employee::where('department_id', $departmentId)->paginate(10);

            return $this->sendResponse(false, 'All Department Employees', $employees, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse('Employee could not be fetched', $e->getMessage());
        } 
    }
}
