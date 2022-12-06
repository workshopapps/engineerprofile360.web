<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use CsvParser;
use Illuminate\Http\Request;
use App\Http\Requests\UpdateEmployeeRequest;
use App\Models\Company;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use App\Models\Employee;
use App\Models\Department;
use Exception;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EmployeeController extends Controller
{
    public function __construct()
    {
        $this->helper = new Helper();
    }

    /**
     * Fetch employees by company id.
     *
     * @return \Illuminate\Http\Response
     */
    //
    public function byCompId($company_id)
    {
        try {
            $employees = Employee::select('employees.id as employee_id', 'departments.name as department', 'employees.fullname as employee_name', 'employees.username as username','employees.email as email', 'employees.occupation as occupation', 'employees.created_at as created_at', 'employees.updated_at as updated_at')
                ->join('departments', 'departments.id', '=', 'employees.department_id')
                ->where('employees.org_id', $company_id)
                ->paginate(5);
            return $this->sendResponse(false, null, "Employee Found", $employees, Response::HTTP_OK);
        } catch (Exception $e) {
            //throw $th;
            return $this->sendResponse(true, $e->getMessage(), "Employees not found", null, Response::HTTP_NOT_FOUND);
        }
    }

    public function generateRandomPwd($salt = 6)
    {
        $alpnum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $splited = str_split($alpnum);
        $pwd = [];
        for ($i = 0; $i < $salt; $i++) {
            $rand = rand(0, strlen($alpnum));
            array_push($pwd, $splited[$rand]);
        }
        return $pwd;
    }

    public function addEmployee(Request $request)
    {
        try {
            $query = $request->query('type');
            $uid = $request->user["id"];
            $defaultPwd = implode("", $this->generateRandomPwd(10));

            if ($query === "csv") {
                $csv = new CsvParser();
                $payload = json_decode($request->getContent(), true);
                $file = $payload['csv_file'];
                $result = $csv->parseEmployeeCsv($file, $uid, $payload['department_id']);
                if ($result["error"] == false && $result["message"] == "csv parsed") {
                    $data = $result['data'];
                    return $this->sendResponse(false, null, "CSV Parsed Successfully", $data, Response::HTTP_OK);
                } else {
                    return $this->sendResponse(true, $result["error"], "Invalid File Type", null, Response::HTTP_BAD_REQUEST);
                }
            } else if ($query === "manual") {


                $payload = json_decode($request->getContent(), true);

                // validate payload
                if (!isset($payload["email"]) || !isset($payload["fullname"]) || !isset($payload["username"]) || !isset($payload["department_id"])) {
                    return $this->sendResponse(true, "expected a valid employee 'username,fullname,email'  but got none", "missing employee data.", null, 400);
                }

                if (empty($payload["email"]) || empty($payload["fullname"]) || empty($payload["username"]) || empty($payload["department_id"])) {
                    return $this->sendResponse(true, "expected a valid employee 'username,fullname,email'  but got none", "missing employee data values.", null, 400);
                }

                // check if employe exists
                $empExists = Employee::where("email", $payload["email"]);

                if ($empExists->count() > 0) {
                    return $this->sendResponse(true, "employee already exists", "employee with this email already exists", null, Response::HTTP_BAD_REQUEST);
                }

                $hash = Hash::make($defaultPwd);
                $empData = [
                    "id" => Str::uuid(),
                    "username" => $payload["username"],
                    "fullname" => $payload["fullname"],
                    "email" => $payload["email"],
                    "department_id" => $payload["department_id"],
                    "org_id" => $uid,
                    "hash" => $hash,
                    "raw_password" => $defaultPwd
                ];

                return $this->insertEmployee($empData, $defaultPwd);
            } else {
                return $this->sendResponse(true, "query parameter not found", "Invalid query parameter", null, Response::HTTP_NOT_FOUND);
            }
        } catch (\Exception $e) {
            return $this->sendResponse(true, "something went wrong adding employee " . $e->getMessage(), "Employee Action Failed", null, 500);
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

    public function updateByID(UpdateEmployeeRequest $request, string $employeeId): JsonResponse
    {
        try {
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
        $passed = 0;
        $failed = 0;
        $file = json_decode($request->getContent(), true);
        $json = $file['data'];
        foreach ($json as $key => $item) {
            // check if employe exists
            $empExists = Employee::where("email", $json[$key]["email"]);

            if ($empExists->count() > 0) {
                return $this->sendResponse(true, "employee already exists", "employee with this email already exists", null, Response::HTTP_BAD_REQUEST);
            }

            $raw_password = implode("", $this->generateRandomPwd(10));
            $hash = Hash::make($raw_password);
            unset($json[$key]["id"]);
            $json[$key]['id'] = Str::uuid();
            $json[$key]['raw_password'] = $raw_password;

            $result = $this->insertEmployee($json[$key], $raw_password);

            if ($result['$errorState'] == true) $failed++;
            else $passed++;
        }
        return $this->sendResponse(false, null, "$passed Employee Added Successfully, $failed failed", $json, Response::HTTP_CREATED);
    }

    public function insertEmployee($data, $empPassword)
    {
        try {
            $employee = Employee::insert($data);

            $fullname = $data["fullname"];
            $username = $data["username"];
            $email = $data["email"];
            $org_id = $data["org_id"];

            // fetch organization info
            $orgData = Company::where("user_id", $org_id)->first();
            $org_name = ucfirst($orgData["name"]);

            // send employee email
            $this->helper->sendOnboardMail($fullname, $username, $empPassword, $email, $org_name);

            return $this->sendResponse(false, null, "Employee Added Successfully", $employee, Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->sendResponse(true, $e->getMessage(), "Employee Action Failed", null, 500);
        }
    }

    public function getEmplyeesByDepartment($departmentId)
    {
        try {
            $department = Department::find($departmentId);
            if (!$department) {
                return $this->sendResponse(
                    true,
                    'Department do not exist',
                    'Department not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }
            $employees = Employee::where('department_id', $department->id)->paginate(10);

            return $this->sendResponse(false, 'All Department Employees', $employees, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Employees not fetched', $e->getMessage());
        }
    }

    //this will fetch all employees for admin
    public function getAllEmployees()
    {
        try {
            $companies = Employee::paginate(10);

            return $this->sendResponse(
                false,
                null,
                'All employees',
                $companies,
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Employees not fetched', $e->getMessage());
        }
    }
}