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
        try {
            $query = $request->query('type'); 
            $uid = $request->user["id"];  

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
                $payload = json_decode($request->getContent(), true);
    
                // validate payload
                if(!isset($payload["email"]) || !isset($payload["fullname"]) || !isset($payload["username"])){
                    return $this->sendResponse(true, "expected a valid employee 'username,fullname,email'  but got none", "missing employee data.", null, 400);
                }
    
                if(empty($payload["email"]) || empty($payload["fullname"]) || empty($payload["username"])){
                    return $this->sendResponse(true, "expected a valid employee 'username,fullname,email'  but got none", "missing employee data values.", null, 400);
                }

                // check if employe exists
                $empExists = Employee::where("email", $payload["email"]);

                if($empExists->count() > 0){
                    return $this->sendResponse(true, "employee already exists", "employee with this email already exists", null, Response::HTTP_BAD_REQUEST);
                }

                $empData = [
                    "id"=> Str::uuid(),
                    "username"=>$payload["username"],
                    "fullname"=>$payload["fullname"],
                    "email"=>$payload["email"],
                    "org_id"=> $uid
                ];
    
                return $this->insertEmployee($empData);
            } 
            else {
                return $this->sendResponse(true, "query parameter not found", "Invalid query parameter", null, Response::HTTP_NOT_FOUND);
            }
        } catch (\Exception $e) {
            return $this->sendResponse(true, "something went wrong adding employee ".$e->getMessage(), "Employee Action Failed", null, 500);
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
            return $this->sendResponse(true, $e->getMessage(), "Employee Action Failed", null, 500);
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