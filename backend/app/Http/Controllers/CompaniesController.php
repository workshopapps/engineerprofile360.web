<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

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
                return $this->errorResponse('Empty Companies Table', $e->getMessage());
            }
            return $this->successResponse(true, "List of all Company Info", [
                    "data" => [
                    'company' => $company,
                    ]
                ]);
        } catch (Exception $e) {
            return $this->errorResponse('Companies not fetched', $e->getMessage());
        }
    }
}
