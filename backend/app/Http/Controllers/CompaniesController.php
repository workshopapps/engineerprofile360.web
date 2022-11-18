<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompaniesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function allCompanyInfo()
    {
        try{
            $company = Company::all();

            if(!$company) {
                return response()->json([
                    'error' => 'true',
                    "code" => 400,
                    'message' => 'No Companies found',
                ]);
            }
            return response()->json([
                    "error" => false,
                    "code" => 200,
                    "message" => "List of all Company Info",
                    "data" => [
                    'company' => $company,
                    ]
                ]);
        } catch (Exception $e) {
            return response()->json([
                    'error' => 'true',
                    "code" => 400,
                    'message' => $e->getMessage(),
                ]);
        }
    }
}
