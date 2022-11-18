<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function addEmpCSV(Request $request)
    {
        return "yes I am here";
        // return response()->json([
        //     'slackUsername' => 12,//$second_index.",,".count($num_arr), //"ruxy1212",
        //     'result' => 32,//$result,
        //     'operation_type' => 32//$op
        // ]);
        // $csv = new CsvParser();
        // $payload = json_decode($req->getContent(), true);
        // return $csv->parseEmployeeCsv($payload);
    }
}
