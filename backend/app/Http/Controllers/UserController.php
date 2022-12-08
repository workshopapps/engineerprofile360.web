<?php

namespace App\Http\Controllers;

use App\Models\User;
// use function response;
use Illuminate\Http\Request;
use App\Services\UserService;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
// use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\UserScore;

class UserController extends Controller
{
    public function __construct()
    {
        // $this->middleware('isloggedin');
    }

    public function getCompanies()
    {
        try {
            $companies = User::paginate(10);

            return $this->sendResponse(
                false,
                null,
                'All companies',
                $companies,
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Companies not fetched', $e->getMessage());
        }
    }

    public function getUser($userId): JsonResponse
    {
        try {
            $user = UserService::getUserByID($userId);

            if (!$user) {
                return $this->sendResponse(
                    true,
                    'User does not exist',
                    'User not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }

            return $this->sendResponse(
                false,
                null,
                "User",
                $user,
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->sendResponse(false, 'User not fetched', $e->getMessage());
        }
    }

    public function verifyUserById(string $userId)
    {
        try {

            $user = User::where('user_id', $userId)->first();

            if (!$user) {
                return $this->sendResponse(
                    true,
                    'User does not exist',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            if ($user->isVerified === true) {
                return $this->sendResponse(
                    true,
                    'User is already verified',
                    'Verified User',
                    Response::HTTP_BAD_REQUEST
                );
            }

            $user->isVerified = true;
            $user->save();

            return $this->sendResponse(
                true,
                'User verified successfully',
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->errorResponse('User not verified', $e->getMessage());
        }
    }

    public function makeUserAnAdmin(string $userId): JsonResponse
    {
        try {
            $user = User::where('user_id', $userId)->first();
            if (!$user) return $this->sendResponse(true, 'User does not exist', 'User not found', Response::HTTP_NOT_FOUND);
            if ($user->role === 3) return $this->sendResponse(true, 'User is already an admin', 'Admin User', Response::HTTP_BAD_REQUEST);
            $user->update(["role" => 3]);
            return $this->sendResponse(false, null, 'User is successfully an admin', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Not Successful', $e->getMessage());
        }
    }

    //Deactivate/block user(company)
    public function deactivateCompany(string $userId): JsonResponse
    {
        try {
            $company = User::find($userId);

            if (!$company) {
                return $this->sendResponse(
                    true,
                    'Company does not exist',
                    'Company not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            if ($company->isBlocked === true) {
                return $this->sendResponse(
                    true,
                    'Company is not activated',
                    'Company can not be activated',
                    Response::HTTP_NOT_FOUND
                );
            }

            $company->isBlocked = true;
            $company->save();

            return $this->sendResponse(false, null, 'Company deactivated successfully', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Company not deactivated successfully', $e->getMessage());
        }
    }

    public function updaterUserInfo(Request $request, $userId)
    {
        try {
            $payload = json_decode($request->getContent(), true);
            $user = User::where("user_id", $userId);

            if ($user->count() === 0) {
                return $this->sendResponse(
                    true,
                    'User does not exist',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            // check if actually the user updating the record is exactly the one who added it in first place.

            $uid = $request->user["id"];

            if ($userId !== $uid) {
                return $this->sendResponse(
                    true,
                    'unauthorised to update user info',
                    'unauthorised',
                    null,
                    403
                );
            }

            $updatedData = [
                "username" => $payload["username"],
                "email" => $payload["email"],
                "full_name" => $payload["full_name"]
            ];

            $user->update($updatedData);

            return $this->sendResponse(false, null, 'User info updated successfully', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'User info not updated', $e->getMessage());
        }
    }

    public function getVerifiedUsers()
    {
        $verified_companies = UserService::allVerifiedUsers();
        $verified_companies = $verified_companies->paginate(10);
        return $this->sendResponse(
            false,
            null,
            'Verified Companies',
            $verified_companies,
            Response::HTTP_OK
        );
    }
}