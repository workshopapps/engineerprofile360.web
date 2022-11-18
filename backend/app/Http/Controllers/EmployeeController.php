<?php

namespace App\Http\Controllers;

use CsvParser;
use Illuminate\Http\Request;
use App\Http\Controllers\Response;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function addEmpCSV(Request $request)
    {
        if($request->query('type') == "csv"){
            $csv = new CsvParser();
            $file = json_decode($request->getContent(), true);
            
            if($file){
                $file = $file['csv_file'];
                $result = $csv->parseEmployeeCsv($file); 
                if($result["error"] == false && $result["message"] == "csv parsed"){
                    $json = $result['data'];
                    $employee = Employee::create($json);
                    if($employee){
                        return sendResponse(true, 200, "Employee CSV Uploaded Successfully", $employee);
                    }else{
                        return sendResponse(true, 500, "Database Insert Error", $employee);
                    }
                } else {
                    //invalid file type
                    return sendResponse(true, 400, "Invalid File Type", $result["error"]);
                }
            }   
        }     
    }
}
