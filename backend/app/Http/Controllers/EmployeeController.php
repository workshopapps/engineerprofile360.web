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
    
    public function addEmpCSV(Request $request)
    {
        $query = $request->query('type');
       
            if ($query === "csv") {
                $csv = new CsvParser();
                $file = json_decode($request->getContent(), true);
                $file = $file['csv_file'];
                $result = $csv->parseEmployeeCsv($file);
                if ($result["error"] == false && $result["message"] == "csv parsed") {
                    $data = $result['data'];
                    return $this->successResponse(true, 'CSV Parsed Successfully', $data, REsponse::HTTP_OK);
                }else{
                    return $this->errorResponse('Invalid File Type', $result["error"]);
                }
            }
            else if ($query === "manual"){
                $data = $request->all();
                $this->addEmployee($data);
            } 
            else {
                return $this->errorResponse('Invalid Request', Response::HTTP_NOT_FOUND);
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
        $data = $parser->trimEmployeeCSV($file);
        $this->addEmployee($data);
    }

    public function addEmployee($data)
    {
        try {
            $employee = Employee::create($data);
            return $this->successResponse(true, 'Employee Added Successfully', $employee, Response::HTTP_CREATED);
        } catch (Exception $e) {
            return $this->errorResponse('Employee Action Failed', $e->getMessage());
        } 
    }

    public function getEmplyeeByDepartment($departmentId, $employeeId)
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
            $employee = Employee::find($employeeId);

            if( !$employee ) {
                return $this->sendResponse(
                    false,
                    'Empoyee do not exist',
                    'Employees not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $departmentEmployee = Employee::where('department_id', $departmentId)->where('id', $employee->id)->get();

            return $this->sendResponse(false, 'Employee', $departmentEmployee, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse('Employee could not be fetched', $e->getMessage());
        } 
    }
}
