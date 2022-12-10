<?php

namespace App\Http\Controllers\Admin;


use Exception;
use App\Models\Company;
use App\Models\Employee;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;

class AdminController extends Controller
{
    /**
     * Fetch admin info.
     *
     *
     * @return JsonResponse
     */
    public function getAdminOverview(): JsonResponse
    {
        try {
            $companies = Company::count();
            $employees = Employee::count();
            $users = User::count();
            $verifiedUsers = User::where('isVerified', 1)->count();
            $totalPercentOfVerifiedUsers = ((int) $verifiedUsers / (int) $users) * 100;

            $data = [
                'users' => $users,
                'employees' => $employees,
                'companies' => $companies,
                'verifiedUsers' => $totalPercentOfVerifiedUsers,
            ];
           
            return $this->sendResponse(false, null, "Admin Overview", $data, Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Overview could not be fetched', $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Fetch all user data for admin.
     *
     *
     * @return JsonResponse
     */
    public function getAllUsers(): JsonResponse
    {
        try {
            $users = User::with('company')->get();
            $totalUsers = User::count();

            $data = [];
            foreach($users as $user){
                $data[] = [
                    'name' => $user->full_name ?? 'no name found',
                    'email' => $user->email ?? 'no email found',
                    'company' => $user->company->name ?? 'no company found',
                    'created' => $user->created_at ?? 'no created date found',
                ];
            }

            $response = $this->customPaginate($data, $totalUsers);
           
            return $this->sendResponse(false, null, "User data", $response, Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'User data could not be fetched', $e->getMessage(), null, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Delete a company
     * @param string $companyId
     *
     * @return JsonResponse
     */
    public function deleteCompany($companyId): JsonResponse
    {
        try {

            $company = Employee::find($companyId);

            if(!$company){
                return $this->sendResponse(
                    true, 
                    "Company does not exist", 
                    "Company not found", 
                    null, 
                    Response::HTTP_NOT_FOUND
                );
            }

            $company->delete();

            return $this->sendResponse(false, null, 'Company deleted successfully', null, Response::HTTP_OK);
        } catch (Exception $e) {
            return $this->sendResponse(true, "Could not fetch company ", $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Fetch all employees for admin.
     *
     *
     * @return JsonResponse
     */
    public function getAllEmployees()
    {
        try {
            $employees = Employee::paginate(10);

            return $this->sendResponse(
                false,
                null,
                'All employees',
                $employees,
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Employees not fetched', $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Fetch all companies for admin.
     *
     *
     * @return JsonResponse
     */
    public function getAllCompanies()
    {
        try {
            $companies = Company::paginate(10);

            return $this->sendResponse(
                false,
                null,
                'All employees',
                $companies,
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Employees not fetched', $e->getMessage(), null,  Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
