<?php

namespace App\Http\Controllers;

use CsvParser;
use Illuminate\Http\Request;
use App\Http\Controllers\Response;

class EmployeeController extends Controller
{
    public function addEmpCSV(Request $request)
    {
        $file = $request->file('filename');
        
        if($file){
            $filename = $file->getClientOriginalName();
            $extension = $file->getClientOriginalExtension(); //Get extension of uploaded file
            $tempPath = $file->getRealPath();
            
            if($extension == "csv"){
                $payload = file_get_contents($file);
                return $payload;
                // $array = array_map('str_getcsv', explode(PHP_EOL, $payload));
                // return $array;
                // $json = json_decode($array, true);
                // return $json;
            }            
            




        }


        // $csv = new CsvParser;
        // // $payload = $request->all(); //getContent();
        // $payload = $request->getContent();
        // $payload = json_decode($payload, true);

        // $content = json_decode($request->file('attachments'), true);
        // $responsee = $csv->parseEmployeeCsv($content);
        // // return $responsee;
        // return $content;
        // return $content;
        // $content = $request->getContent();
        // $payload = json_decode($request->all(), true);

        // dd($content);
        // $payload = json_decode($content, true);
        // dd($payload);
        // $payload = json_decode($request->getContent(), true);


        // return $csv->parseEmployeeCsv($payload);

        // $file = $request->file('filename');
        // $csvv = file_get_contents($file);
        // $payload = $csvv;
        // return $csv->parseEmployeeCsv($payload);

        // $array = array_map('str_getcsv', explode(PHP_EOL, $csv));
        // $json = json_encode($array);
        // return $json;
        // return $csv;
        // if ($file) {
        //     $filename = $file->getClientOriginalName();
        //     $extension = $file->getClientOriginalExtension(); //Get extension of uploaded file
        //     $tempPath = $file->getRealPath();
        //     $fileSize = $file->getSize(); //Get size of uploaded file in bytes

        //     if($extension == 'csv'){

        //     }
        // }


        // $payload = json_decode($request->getContent(), true);
        // return $csv->parseEmployeeCsv($payload);
        // return $filename.$extension.' : '.$tempPath.$fileSize; //$payload;
        // return response()->json([
        //     'slackUsername' => 12,//$second_index.",,".count($num_arr), //"ruxy1212",
        //     'result' => 32,//$result,
        //     'operation_type' => 32//$op
        // ]);
        
    }
}
