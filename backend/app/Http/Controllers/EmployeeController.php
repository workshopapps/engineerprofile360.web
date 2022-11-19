<?php

namespace App\Http\Controllers;

use CsvParser;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
use App\Models\Employee;

use Exception;

class EmployeeController extends Controller
{
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

    public function getById(string $id): JsonResponse
    {
        $user = Employee::find($id);
        if (!$user) return $this->errorResponse('Employee does not exist', 'Employee not found', Response::HTTP_NOT_FOUND);
        return $this->successResponse(true, 'Successful', $user, Response::HTTP_OK);
    }
}