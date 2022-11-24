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
     * Get all Companies
     */
    public function getCompanies(): JsonResponse
    {
        try{
            $companies = Company::get();
            $checkCompanies = Company::exists();

            if(!$checkCompanies) {
                $checkCompanies = [];
                return $this->sendResponse(true, null, 'Companies is empty', $checkCompanies, Response::HTTP_NOT_FOUND);
            }

            return $this->sendResponse(false, null, 'All companies fetched successfully', $companies, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, null, 'Something went wrong', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update company.
     *
     * @return \Illuminate\Http\Response
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
            return $this->sendResponse(true, null, 'Something went wrong', Response::HTTP_BAD_REQUEST);
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
            $checkCompany = Company::where('id', $id)->exists();

            if(!$checkCompany) {
                $checkCompany = [];
                return $this->sendResponse(true, null, 'The company doesn\'t exists', $checkCompany, Response::HTTP_NOT_FOUND);
            }

            return $this->sendResponse(false, null, 'Company fetched successfully', $company, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, null, 'Something went wrong', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Get company by user_id.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCompanyByUserId($user_id): JsonResponse
    {
        try {
            $company = Company::find($user_id);
            $checkCompany = Company::where('user_id', $user_id)->exists();

            if(!$checkCompany) {
                $checkCompany = [];
                return $this->sendResponse(true, null, 'The company doesn\'t exists', $checkCompany, Response::HTTP_NOT_FOUND);
            }

            return $this->sendResponse(false, null, 'Company fetched successfully', $company, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, null, 'Something went wrong', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
