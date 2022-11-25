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

    public function getUsers()
    {
        try{
            $users = User::paginate(10);
            
            return $this->sendResponse(
                false,
                null,
                'All users',
                $users,
                Response::HTTP_OK
            );
        }catch (\Exception $e) {
            return $this->sendResponse(true, 'Users not fetched', $e->getMessage(), null);
        }
    }
    
    public function getUser($userId): JsonResponse
    {
        try{
            $user = UserService::getUserByID($userId);

            if( !$user ) {
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
        }catch (\Exception $e) {
            return $this->sendResponse(false,'User not fetched', $e->getMessage());
        }

    }

    public function verifyUserById(string $userId)
    {
        try{

            $user = User::where('user_id', $userId)->first();

            if( !$user ) {
                return $this->sendResponse(
                    true,
                    'User does not exist',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            if( $user->isVerified === true ) {
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
        }catch (\Exception $e) {
            return $this->errorResponse('User not verified', $e->getMessage());
        }
            
    }

    public function updaterUserInfo(UpdateUserRequest $request , $userId)
    {
        try{
            $updatedData = $request->all();
            $user = User::find($userId);

            if( !$user ) {
                return $this->sendResponse(
                    true,
                    'User does not exist',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $user->update($updatedData);

            return $this->sendResponse(false,null, 'User info updated successfully', Response::HTTP_OK);

        }catch (\Exception $e) {
            return $this->sendResponse(true,'User info not updated', $e->getMessage());
        }
    }
}
