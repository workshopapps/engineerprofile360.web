<?php

namespace App\Http\Controllers;


use Exception;
use App\Models\Company;
use App\Models\Employee;
use App\Models\User;
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
            return $this->sendResponse(true, 'Overview could not be fetched', $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Fetch all user data for admin.
     *
     *
     * @return JsonResponse
     */
    public function getAllUsers(Request $request): JsonResponse
    {
        try {
            $users = User::with('company')->get();
            $totalUsers = User::count();

            $data = [];
            foreach($users as $user){
                $data[] = [
                    'name' => $user->full_name,
                    'email' => $user->email,
                    'company' => $user->company->name,
                    'created' => $user->created_at
                ];
            }

            $response = $this->customPaginate($data, $totalUsers);
           
            return $this->sendResponse(false, null, "User data", $response, Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'User data could not be fetched', $e->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
