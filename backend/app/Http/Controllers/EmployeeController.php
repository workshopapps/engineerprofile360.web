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

    public function parseEmployeeCsv($b64, $org, $department_id, $password)
    {
        try {
            $csvData = base64_decode(explode(",", $b64)[1]);
            $splitData = explode("\n", trim($csvData));
            $slicedData = array_slice(array_filter($splitData), 1);
            $finalJsonData = [];
            $i = 1;
            $nonEmptyObj = [];
            
            foreach ($slicedData as $val) {
                $ext = explode(",", str_replace("\r", "", $val));
                $item = array_slice($ext, 1);
                $arr = [
                    "id" => Str::uuid(),
                    "fullname" => str_replace('"', "", $item[0]),
                    "username" => str_replace('"', "", $item[1]),
                    "email" => str_replace('"', "", $item[2]),
                    "org_id" => $org,
                    "department_id" => $department_id,
                    "hash" => Hash::make($password),
                    "raw_password" => $password
                ];
                array_push($finalJsonData, $arr);
                $i++;
            }

            foreach ($finalJsonData as $key => $value) {
                if(!empty($value["id"]) && !empty($value["fullname"]) && !empty($value["username"]) && !empty($value["email"]) && !empty($value["org_id"]) && !empty($value["department_id"]) && !empty($value["hash"]) && !empty($value["raw_password"])){
                    array_push($nonEmptyObj, $value);
                }
            }

            
            return [
                "error" => false,
                "message" => "csv parsed",
                "data" => $nonEmptyObj
            ];
        } catch (\Exception $e) {
            return [
                "error" => true,
                "message" => "Invalid CSV file: ".$e->getMessage(),
                "data" => null
            ];
        }
    }

    public function removeDuplicatesEmployeeDataFromDatabaseandCsv(array $allEmpCsv, string $org_id, string $dept_id){   

        $allOrgEmp = Employee::select("email")->where([
            "org_id"=> $org_id,
            "department_id"=>$dept_id
        ]);

        $allOrgEmpEmails = []; // store all employee emails from a particular organization in database
        $allEmpCsvEmails = []; // store all non-duplicates emails from csv
        $allEmpCsvEmailsWithoutDuplicates = []; // store all non-duplicates employee data from csv.
        $final_filtered_data = []; // finally filter and store all non-duplicates employee data from both database and csv file.

        // remove duplicates from DB & CSV.
        foreach ($allOrgEmp->get() as $key => $value) {
            array_push($allOrgEmpEmails, $value["email"]);
        }
        foreach ($allEmpCsv as $key => $value) {
            if(in_array($value["email"], $allEmpCsvEmails)) continue;
            array_push($allEmpCsvEmails, $value["email"]);
            array_push($allEmpCsvEmailsWithoutDuplicates, $value);
        }
        foreach ($allEmpCsvEmailsWithoutDuplicates as $key => $value) {
            if(!in_array($value["email"], $allOrgEmpEmails)){
                array_push($final_filtered_data, $value);
            }
        }

        return $final_filtered_data;
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
                $password = $this->generateRandomPwd(10);

                if (!isset($file) || !isset($org) || !isset($dept)) {
                    return $this->sendResponse(true, "expected a valid employee 'org_id, dept_id, file'  but got none", "missing employee data.", null,  Response::HTTP_BAD_REQUEST);
                }
                if (empty($file) || empty($org) || empty($dept)) {
                    return $this->sendResponse(true, "expected a valid employee 'org_id, dept_id, file'  but got none", "missing employee data.", null,  Response::HTTP_BAD_REQUEST);
                }

                // check if organization and department exist
                if (is_null(Company::find($org))) return $this->sendResponse(true, "Not found", "Company not found", null, Response::HTTP_NOT_FOUND);
                if (is_null(Department::find($dept))) return $this->sendResponse(true, "Not found", "Department not found", null, Response::HTTP_NOT_FOUND);

                // parse the employee csv file
                $result = $this->parseEmployeeCsv($file, $org, $dept, $password);

                // check if the csv parsed isnt invalid
                if($result["error"]){
                    return $this->sendResponse(true, $result["message"], "Invalid File Type", null, Response::HTTP_BAD_REQUEST);
                }

                // Get filtered employee data
                $empFilteredData = $this->removeDuplicatesEmployeeDataFromDatabaseandCsv($result["data"], $org, $dept);

                // if empFilteredData is empty, it means all employee has been added into database
                if(count($empFilteredData) === 0){
                    return $this->sendResponse(true, "failed to add employee, employee already exists.", "employee data already exists.", null, Response::HTTP_BAD_REQUEST);    
                }

                return $this->insertEmployee($empFilteredData, "CSV");

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

                return $this->insertEmployee($empData, "MANUAL");
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

    public function insertEmployee($data, $type)
    {
        try {
            // MANUAL
            if($type === "MANUAL"){
                $fullname = $data["fullname"];
                $username = $data["username"];
                $email = $data["email"];
                $org_id = $data["org_id"]; 
                $department_id = $data["department_id"];
            
                // fetch organization info
                $orgData = Company::find($org_id);
                $org_name = ucfirst($orgData->first()["name"]);
            
                // insert only when organization exists
                Employee::create($data);

                // send employee mail
                $this->helper->sendOnboardMail($fullname, $username, $data["raw_password"], $email, $org_name);
                
                return $this->sendResponse(false, null, "Employee Added Successfully", $data, 200);
            }
            // CSV
            if($type === "CSV"){
                // bulk insert employee data into database
                Employee::insert($data);

                foreach ($data as $key => $value) {
                    $fullname = $value["fullname"];
                    $username = $value["username"];
                    $email = $value["email"];
                    $org_id = $value["org_id"];
                    $department_id = $value["department_id"];
                
                    // fetch organization info
                    $orgData = Company::find($org_id);
                    $org_name = ucfirst($orgData->first()["name"]);
                
                    // send employee mail
                    $this->helper->sendOnboardMail($fullname, $username, $value["raw_password"], $email, $org_name);
                }

                return $this->sendResponse(false, null, "Employee Added Successfully", $data, 200);
            }

            // send employee email

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