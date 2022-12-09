<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Company;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\CompanyRequest;
use Symfony\Component\HttpFoundation\Response;

class CompanyController extends Controller
{
    /**
     * Get all compamnies
     *
     * @return JsonResponse
     */
    public function getCompanies(): JsonResponse
    {
        try{
            $companies = Company::paginate(10);

            return $this->sendResponse(false, null, 'Companies', $companies, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Companies not fetched', $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Edit company
     * @param CompanyRequest $request
     * @param string $company_id
     *
     * @return JsonResponse
     */
    public function updateCompany(CompanyRequest $request, $company_id): JsonResponse
    {
        try{
            $updateCompany  = $request->all();

            $company = Company::find($company_id);
            $checkCompany = Company::where('id', $company_id)->exists();

            if(!$checkCompany) {
                $checkCompany = [];
                return $this->sendResponse(true, null, 'This company does\'nt exists', $checkCompany, Response::HTTP_NOT_FOUND);
            }

            $company->update($updateCompany);

            return $this->sendResponse(false, null, 'Company Updated Successfully', $company, Response::HTTP_OK);
        }  catch (Exception $e) {
            return $this->sendResponse(true, 'Company not fetched', $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    /**
     * Get company
     * @param string $id
     *
     * @return JsonResponse
    */
    public function byCompanyId($id): JsonResponse
    {
        try {
            $company = Company::find($id);

            if(!$company) {
                return $this->sendResponse(
                    true, 
                    'Company not found', 
                    'The company doesn\'t exists', 
                    null, 
                    Response::HTTP_NOT_FOUND
                );
            }

            return $this->sendResponse(false, null, 'Company fetched successfully', $company, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Something went wrong', $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

   /**
     * Get company by user_id
     * @param string $user_id
     *
     * @return JsonResponse
    */
    public function getCompanyByUserId($user_id): JsonResponse
    {
        try {
            $company = Company::find($user_id);
            $checkCompany = Company::where('user_id', $user_id)->exists();

            if(!$checkCompany) {
                return $this->sendResponse(true, 'Company not found', 'The company doesn\'t exists', null, Response::HTTP_NOT_FOUND);
            }

            return $this->sendResponse(false, null, 'Company fetched successfully', $company, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, 'Something went wrong', $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
