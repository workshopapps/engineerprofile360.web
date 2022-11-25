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
                return $this->sendResponse(true, "Company employees do not exist", "Employees not found", null, Response::HTTP_NOT_FOUND);
            }
            return $this->sendResponse(false, null, "Employee Found", $employees, Response::HTTP_OK);
        }catch (Exception $e) {
            //throw $th;
            return $this->sendResponse(true, $e->getMessage(), "Employees not found", null, Response::HTTP_NOT_FOUND);
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
                    return $this->sendResponse(false, null, "CSV Parsed Successfully", $data, Response::HTTP_OK);
                }else{
                    return $this->sendResponse(true, $result["error"], "Invalid File Type", null, Response::HTTP_BAD_REQUEST);
                }
            }
            else if ($query === "manual"){
                $payload = $request->getContent(); 
                $data = json_decode($payload, true);
                $data['id'] = Str::uuid();
                return $this->insertEmployee($data);
            } 
            else {
                return $this->sendResponse(true, "No add query parameter", "Invalid Request", null, Response::HTTP_NOT_FOUND);
            }
    }

    public function getById(string $user_id): JsonResponse
    {
        try {
            $employee = Employee::find($user_id);
            if (!$employee) return $this->sendResponse(true, "Employee does not exist", "Employee not found", null, Response::HTTP_NOT_FOUND);
            return $this->sendResponse(false, null, "Employee Fetch Successful", $employee, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Employee not found", null, Response::HTTP_NOT_FOUND);
        }       
    }

    public function updateByID(UpdateEmployeeRequest $request,string $employeeId): JsonResponse
    {
        try{
            $employee = Employee::find($employeeId);
            if (is_null($employee)) return $this->sendResponse(true, "Employee does not exist", "Employee not found", null, Response::HTTP_NOT_FOUND);
            $employee->update($request->validated());
            return $this->sendResponse(false, null, "Employee Update Successful", $employee, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Employee info wasn't modified", null, Response::HTTP_NOT_MODIFIED);
        }
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
            return $this->sendResponse(false, null, "Employee Added Successfully", $employee, Response::HTTP_CREATED);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Employee Action Failed", null, Response::HTTP_NOT_FOUND);
        } 
    }

    public function getEmplyeesByDepartment($departmentId)
    {
        try {
            $department = Department::find($departmentId);
            if( !$department ) {
                return $this->sendResponse(
                    true,
                    'Department do not exist',
                    'Department not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }
            $employees = Employee::where('department_id', $departmentId)->paginate(10);

            return $this->sendResponse(false, 'All Department Employees', $employees, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Employee could not be fetched", null, Response::HTTP_NOT_FOUND);
        } 
    }
}