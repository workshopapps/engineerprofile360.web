<?php

namespace App\Http\Controllers;

use App\Models\User;
use function response;
use Illuminate\Http\Request;
use App\Services\UserService;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\JsonResponse;
// use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;


class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function allUsers(): JsonResponse
    {
        try{
            $users = User::paginate(15);

            if( !$users ) {
               $users = [];
            }

            return $this->successResponse(
                true,
                'All users',
                $users,
                Response::HTTP_OK
            );
        }catch (Exception $e) {
            return $this->errorResponse('Records', $e->getMessage());
        }
    }
    
    public function getUserById($user_id): JsonResponse
    {
        try{
            $user = User::find($user_id);

            if( !$user) {
                return $this->errorResponse(
                    'User does not exist',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            return $this->successResponse(
                true,
                'User',
                $user,
                Response::HTTP_OK
            );
        }catch (Exception $e) {
            return $this->errorResponse('User not fetched', $e->getMessage());
        }

    }

    public function getVerifiedUserById(string $userId): JsonResponse
    {
        try{
            $verified_user = UserService::getVerifiedUser($userId);

            if( !$verified_user) {
                return $this->errorResponse(
                    'User does not exist or is not a verified user',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            return $this->successResponse(
                true,
                'Verified user',
                $verified_user,
                Response::HTTP_OK
            );
        }catch (Exception $e) {
            return $this->errorResponse('Verified user not fetched', $e->getMessage());
        }
            
    }

    public function updaterUserInfo(Request $request , $user_id): JsonResponse
    {
        try{
            $data = [
                'username' => $request->username,
                'email' => $request->email
            ];

            $user =  User::where('id', $user_id)->find($user_id);

            if( !$user ) {
                return $this->errorResponse(
                    'User does not exist',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $user->update($data);

            return $this->successResponse(true, 'User info updated successfully', Response::HTTP_OK);

        }catch (Exception $e) {
            return $this->errorResponse('User info not updated', $e->getMessage());
        }
    }
}
