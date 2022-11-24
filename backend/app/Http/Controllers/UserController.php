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

    public function allUsers()
    {
        try{
            $users = User::all();
            $msg = count($users) < 1 ? "No user found" : "All users";
            $customUserData = [];

            if(count($users) == 0){
                $customUserData = [];
                return $this->sendResponse(
                    true,
                    $msg,
                    $msg,
                    $users,
                    Response::HTTP_OK
                );
            }

            foreach ($users as $val) {
                $stripData = [
                    "id"=>$val["id"],
                    "user_id"=>$val["user_id"],
                    "full_name"=>$val["full_name"],
                    "username"=>$val["username"],
                    "email"=>$val["email"],
                    "role"=>$val["role"],
                    "isVerified"=>$val["isVerified"]
                ];

                array_push($customUserData, $stripData);
            }

            return $this->sendResponse(
                false,
                null,
                $msg,
                $customUserData,
                Response::HTTP_OK
            );
        }catch (\Exception $e) {
            return $this->sendResponse(true, 'Something went wrong getting users', $e->getMessage(), null, 500);
        }
    }
    
    public function getUserById($user_id): JsonResponse
    {
        try{
            $user = User::where("user_id","=",$user_id);

            if( $user->count() == 0) {
                return $this->sendResponse(
                    true,
                    'User does not exist',
                    'User not found',
                    null,
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

            return $this->sendResponse(
                false,
                null,
                "User by id",
                $validUserInfo,
                Response::HTTP_OK
            );
        }catch (\Exception $e) {
            return $this->sendResponse(false,'User not fetched', $e->getMessage(), null, 500);
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

            if(!isset($payload["username"]) || !isset($payload["email"]) || !isset($payload["full_name"])){
                return $this->sendResponse(
                    true,
                    'Expected a valid payload,but got none',
                    'Missing email, username or full_name',
                    null,
                    Response::HTTP_BAD_REQUEST
                );
            }
        
            $data = [
                'username' => $payload["username"],
                'email' =>  $payload["email"],
                'full_name'=> $payload["full_name"]
            ];

            $uid =$request->user["id"];

            $userExists =  User::where('user_id', $user_id);

            // check if user exists or not
            if($userExists->count() == 0) {
                return $this->sendResponse(
                    true,
                    'User does not exist',
                    'User not found',
                    null,
                    Response::HTTP_NOT_FOUND
                );
            }

            // check if the user is authorised to update info which doesnt belong to him.
            if($uid != $user_id){
                return $this->sendResponse(
                    true,
                    'Unauthorised',
                    'Unauthorised to update info',
                    null,
                    Response::HTTP_UNAUTHORIZED
                );
            }

            User::where("user_id", $user_id)->update($data);

            return $this->sendResponse(false,null, 'User info updated successfully', Response::HTTP_OK);

        }catch (\Exception $e) {
            return $this->sendResponse(true,'User info not updated', $e->getMessage(), null, 500);
        }
    }
}
