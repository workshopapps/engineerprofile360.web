<?php

namespace App\Http\Controllers;

use CsvParser;
use Illuminate\Http\Request;
use App\Http\Controllers\Response;
use App\Models\Employee;
use Exception;

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
}