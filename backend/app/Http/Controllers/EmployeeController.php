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
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class EmployeeController extends Controller
{
    public function __construct()
    {
        $this->helper = new Helper();
    }

    public function generateRandomPwd($salt = 6)
    {
        $alpnum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $splited = str_split($alpnum);
        $pwd = [];
        for ($i = 0; $i < $salt; $i++) {
            $rand = rand(0, strlen($alpnum) - 1);
            array_push($pwd, $splited[$rand]);
        }
        $pwd = implode("", $pwd);
        return $pwd;
    }

    public function parseEmployeeCsv($b64, $org, $department_id)
    {
        $csvData = base64_decode(explode(",", $b64)[1]);
        $splitData = explode("\n", $csvData);
        $slicedData = array_slice(array_filter($splitData, 'strlen'), 1);
        $finalJsonData = [];
        $i = 1;
        foreach ($slicedData as $val) {
            $ext = explode(",", str_replace("\r", "", $val));
            $item = array_slice($ext, 1);
            $arr = [
                "id" => $i,
                "fullname" => str_replace('"', "", $item[0]),
                "username" => str_replace('"', "", $item[1]),
                "email" => str_replace('"', "", $item[2]),
                "org_id" => $org,
                "department_id" => $department_id,
            ];
            array_push($finalJsonData, $arr);
            $i++;
        }
        return [
            "error" => false,
            "message" => "csv parsed",
            "data" => $finalJsonData
        ];
    }

    public function addEmployee(Request $request)
    {
        try {
            $query = $request->query('type');
            $defaultPwd = $this->generateRandomPwd(10);

            if ($query === "csv") {
                $payload = json_decode($request->getContent(), true);
                $file = $payload['csv_file'];
                $org = $payload["org_id"];
                $dept = $payload['department_id'];

                if (!isset($file) || !isset($org) || !isset($dept)) {
                    return $this->sendResponse(true, "expected a valid employee 'org_id, dept_id, file'  but got none", "missing employee data.", null,  Response::HTTP_BAD_REQUEST);
                }
                if (empty($file) || empty($org) || empty($dept)) {
                    return $this->sendResponse(true, "expected a valid employee 'org_id, dept_id, file'  but got none", "missing employee data.", null,  Response::HTTP_BAD_REQUEST);
                }

                // check if organization and department exist
                if (is_null(Company::find($org))) return $this->sendResponse(true, "Not found", "Company not found", null, Response::HTTP_NOT_FOUND);
                if (is_null(Department::find($dept))) return $this->sendResponse(true, "Not found", "Department not found", null, Response::HTTP_NOT_FOUND);

                $result = $this->parseEmployeeCsv($file, $org, $dept);
                $total = count($result['data']);
                $success = 0;
                foreach ($result['data'] as $key => $item) {
                    $empExists = Employee::where(["email" => $result['data'][$key]["email"], "org_id" => $result['data'][$key]["org_id"]]);
                    if (!$empExists->count()) {
                        $this->insertEmployee($item, Hash::make($this->generateRandomPwd(10)));
                        $success++;
                    }
                } //add a new column to check if email exists in that organization

                if ($result["error"] == false && $result["message"] == "csv parsed") {
                    $data = $result['data'];
                    return $this->sendResponse(false, null, "CSV Parsed Successfully", [
                        "total" => $total,
                        "success" => $success
                    ], Response::HTTP_OK);
                } else {
                    return $this->sendResponse(true, $result["error"], "Invalid File Type", null, Response::HTTP_BAD_REQUEST);
                }
            } else if ($query === "manual") {
                $payload = json_decode($request->getContent(), true);

                // validate payload
                if (!isset($payload["email"]) || !isset($payload["fullname"]) || !isset($payload["username"]) || !isset($payload["department_id"]) || !isset($payload["org_id"])) {
                    return $this->sendResponse(true, "expected a valid employee 'username,fullname,email'  but got none", "missing employee data.", null,  Response::HTTP_BAD_REQUEST);
                }

                if (empty($payload["email"]) || empty($payload["fullname"]) || empty($payload["username"]) || empty($payload["department_id"]) || empty($payload["org_id"])) {
                    return $this->sendResponse(true, "expected a valid employee 'username,fullname,email'  but got none", "missing employee data values.", null,  Response::HTTP_BAD_REQUEST);
                }

                // check if organization and department exist
                if (is_null(Company::find($payload["org_id"]))) return $this->sendResponse(true, "Not found", "Company not found", null, Response::HTTP_NOT_FOUND);
                if (is_null(Department::find($payload["department_id"]))) return $this->sendResponse(true, "Not found", "Department not found", null, Response::HTTP_NOT_FOUND);

                // check if employe exists
                $empExists = Employee::where(["email" => $payload["email"], "org_id" => $payload["org_id"]]);

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
                    "org_id" => $payload["org_id"],
                    "hash" => $hash,
                    "raw_password" => $defaultPwd
                ];

                return $this->insertEmployee($empData, $defaultPwd);
            } else {
                return $this->sendResponse(true, "query parameter not found", "Invalid query parameter", null, Response::HTTP_NOT_FOUND);
            }
        } catch (\Exception $e) {
            return $this->sendResponse(true, "something went wrong adding employee ", $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getById(string $employee_id): JsonResponse
    {
        try {
            $employee = Employee::where("id", $employee_id)
                ->with(['department', 'completed_assessment.assessment.userscore'])->withCount([
                    "completed_assessment",
                    'assessment AS points' => function ($query) {
                        $query->select(DB::raw("SUM(result) as points"));
                    },
                    'assessment AS total_points' => function ($query) {
                        $query->select(DB::raw("SUM(total_questions) as total_points"));
                    }
                ])->first();
            if (!$employee) {
                return $this->sendResponse(
                    true,
                    "Employee does not exist",
                    "Employee not found",
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }

            return $this->sendResponse(false, null, "Employee Fetch Successful", $employee, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Employee not found", $e->getMessage(),  null,  Response::HTTP_INTERNAL_SERVER_ERROR);
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
            return $this->sendResponse(true, "Employee not fetched", $e->getMessage(),  null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function confirmCSV(Request $request)
    {
        $passed = 0;
        $failed = 0;
        $file = json_decode($request->getContent(), true);
        $json = array_values(array_filter($file['data']));
        $last_error = null;

        foreach ($json as $key => $item) {
            // only add employee where is_exist != true
            // if ($json[$key]['is_exist'] == false) {
            $raw_password = $this->generateRandomPwd(10);
            $hash = Hash::make($raw_password);
            // unset($json[$key]['id']);
            // unset($json[$key]['is_exist']); 
            //...commented code will be removed after live testing...
            unset($json[$key]['department']);
            $json[$key]['id'] = Str::uuid();
            $json[$key]['hash'] = $hash;
            $json[$key]['raw_password'] = $raw_password;

            $result = $this->insertEmployee($json[$key], $raw_password);
            if (json_decode($result->getContent(), true)['errorState'] == true) $failed++;
            else $passed++;
            if (json_decode($result->getContent(), true)['error'] != null) $last_error = json_decode($result->getContent(), true)['message'];
            // }
        }
        return $this->sendResponse(false, "$passed Employee Added Successfully, $failed failed", $last_error, $json, Response::HTTP_CREATED);
    }

    public function insertEmployee($data, $empPassword)
    {
        try {
            $fullname = $data["fullname"];
            $username = $data["username"];
            $email = $data["email"];
            $org_id = $data["org_id"];
            $department_id = $data["department_id"];

            // fetch organization info
            $orgData = Company::find($org_id);
            if (is_null($orgData)) return $this->sendResponse(true, "Not found", "Company not found", null, Response::HTTP_NOT_FOUND);
            $org_name = ucfirst($orgData->first()["name"]);

            //insert only when organization exists
            $employee = Employee::create($data);


            // send employee email
            $this->helper->sendOnboardMail($fullname, $username, $empPassword, $email, $org_name);

            return $this->sendResponse(false, null, "Employee Added Successfully", $employee, Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return $this->sendResponse(true, " Employee Action Failed", $e->getMessage(),  null,  Response::HTTP_INTERNAL_SERVER_ERROR);
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

            return $this->sendResponse(false, null, 'All Department Employees', $employees, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Employees not fetched', $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Get employees by companyId
     * @param string $orgId
     *
     * @return JsonResponse
     */
    public function getEmployeesByCompanyId($orgId)
    {
        try {
            $employees = Employee::where('org_id', $orgId)->with('department')->withCount('assessment')->paginate(10);

            return $this->sendResponse(
                false,
                null,
                'All employees',
                $employees,
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Employees not fetched', $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Delete an employee
     * @param string $employeeId
     *
     * @return JsonResponse
     */
    public function deleteEmployee($employeeId): JsonResponse
    {
        try {

            $employee = Employee::find($employeeId);

            if (!$employee) {
                return $this->sendResponse(
                    true,
                    "Employee does not exist",
                    "Employee not found",
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }

            $employee->delete();

            return $this->sendResponse(false, null, 'Employee deleted successfully', null, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Could not fetch employee ", $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}