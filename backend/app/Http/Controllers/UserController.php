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


class UserController extends Controller
{
    public function __construct()
    {
        // $this->middleware('isloggedin');
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
        }catch (\Exception $e) {
            return $this->errorResponse('Records', $e->getMessage());
        }
    }
    
    public function getUserById($user_id): JsonResponse
    {
        try{
            $user = User::where("user_id","=",$user_id);

            if( $user->count() == 0) {
                return $this->errorResponse(
                    'User does not exist',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            // extract valid user info
            $validUserInfo = [
                "id"=>$user->first()["id"],
                "user_id"=>$user->first()["user_id"],
                "full_name"=>$user->first()["full_name"],
                "username"=>$user->first()["username"],
                "email"=>$user->first()["email"],
                "isVerified"=>$user->first()["isVerified"] > 0 ? true : false,
            ];

            return $this->successResponse(
                true,
                'User',
                $validUserInfo,
                Response::HTTP_OK
            );
        }catch (\Exception $e) {
            return $this->errorResponse('User not fetched', $e->getMessage());
        }

    }

    public function getVerifiedUserById(string $userId)
    {
        try{
            $verified_user = UserService::getVerifiedUser($userId);

            if(!$verified_user) {
                return $this->errorResponse(
                    'User does not exist or is not a verified user',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            // extract valid info from data
            $validUserInfo = [
                "id"=>$verified_user["id"],
                "user_id"=>$verified_user["user_id"],
                "full_name"=>$verified_user["full_name"],
                "username"=>$verified_user["username"],
                "email"=>$verified_user["email"],
                "isVerified"=>$verified_user["isVerified"] > 0 ? true : false,
            ];

            return $this->successResponse(
                true,
                'Verified user',
                $validUserInfo,
                Response::HTTP_OK
            );
        }catch (\Exception $e) {
            return $this->errorResponse('Verified user not fetched', $e->getMessage());
        }
            
    }

    public function updaterUserInfo(Request $request , $user_id)
    {
        try{
            $payload = json_decode($request->getContent(), true);
        
            $data = [
                'username' => $payload["username"],
                'email' =>  $payload["email"],
                'full_name'=> $payload["full_name"]
            ];

            $userExists =  User::where('user_id', $user_id)->first();

            // check if user exists or not
            if($userExists->count() == 0) {
                return $this->errorResponse(
                    'User does not exist',
                    'User not found',
                    Response::HTTP_NOT_FOUND
                );
            }

            $userExists->update($data);

            return $this->successResponse(true, 'User info updated successfully', Response::HTTP_OK);

        }catch (\Exception $e) {
            return $this->errorResponse('User info not updated', $e->getMessage());
        }
    }
}
