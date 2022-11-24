<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Company;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CompanyRequest;
use Symfony\Component\HttpFoundation\Response;

class CompanyController extends Controller
{
    public function __construct()
    {
        
    }

    /**
     * Get all Companies
     */
    public function getCompanies(): JsonResponse
    {
        try{
            $companies = Company::get();

            if(!$companies) {
                $companies = [];
            }

            return $this->successResponse(true,'All companies',$companies,Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->errorResponse('Companies not fetched', $e->getMessage());
        }
    }

    /**
     * Update company.
     *
     * @return \Illuminate\Http\Response
     */
    public function updateCompany(CompanyRequest $request, $companyId): JsonResponse
    {
        try{
            $updatedData = json_decode($request->getContent(), true);

            // Get category by id
            $company = Company::find($companyId);

            if( !$company ) {
                return $this->errorResponse(
                    'Company does not exist',
                    'Company not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $company->update($updatedData);

            // success response
            return $this->successResponse(true, 'Company updated successfully', Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->errorResponse('Company not fetched', $e->getMessage());
        }
       
    }

    /**
     * Get company by ID.
     *
     * @return \Illuminate\Http\Response
     */
    public function byCompanyId($id)
    {
        try {
            $company = Company::find($id);
            if(is_null($company)) {
                return $this->errorResponse('Company does not exists', Response::HTTP_NOT_FOUND);
            }
            return $this->successResponse(true, 'Company', $company, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->errorResponse('Companies not fetched', $e->getMessage());
        }
    }
    

    public function getCompanyByUserId($userId): JsonResponse
    {
        try {
            $company = Company::where('user_id', $userId)->first();
            if(is_null($company)) {
                return $this->errorResponse('Company does not exists', Response::HTTP_NOT_FOUND);
            }
            return $this->successResponse(true, 'Company', $company, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->errorResponse('Companies not fetched', $e->getMessage());
        }
    }
}
