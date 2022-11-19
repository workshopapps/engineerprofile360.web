<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Http\Requests\CompanyRequest;
use Exception;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class CompanyController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
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

            return $this->successResponse(
        true,
        'All companies',
                $companies,
                Response::HTTP_OK
            );
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
            $updatedData = $request->all();

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
            return response()->json([
                'status'   => 'Company Successfully',
                'Data'      => $company
            ]);
        } catch (Exception $e) {
            return $this->errorResponse('Companies not fetched', $e->getMessage());
        }
    }
    
}
