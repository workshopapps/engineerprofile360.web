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
        try {
            $users = User::select("id","user_id","full_name","email","role","isVerified","isAdmin","isBlocked","refToken")->paginate(10);

            return $this->sendResponse(
                false,
                null,
                'All users',
                $users,
                Response::HTTP_OK
            );
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Users not fetched', $e->getMessage(), null);
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
            if ($user->isAdmin) return $this->sendResponse(true, 'User is already an admin', 'Admin User', Response::HTTP_BAD_REQUEST);
            $user->update(["isAdmin" => true]);
            return $this->sendResponse(false, null, 'User is successfully an admin', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Not Successful', $e->getMessage());
        }
    }


    public function blockUser(string $userId): JsonResponse
    {
        try {
            $user = User::where('user_id', $userId)->first();
            if (!$user) return $this->sendResponse(true, 'User does not exist', 'User not found', Response::HTTP_NOT_FOUND);
            if ($user->isBlocked) return $this->sendResponse(true, 'User is already blocked', 'Blocked User', Response::HTTP_BAD_REQUEST);
            $user->update(["isBlocked" => true]);
            return $this->sendResponse(false, null, 'User blocked successfully', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'Not Successful', $e->getMessage());
        }
    }

    public function updaterUserInfo(Request $request, $userId)
    {
        try {
            $payload = json_decode($request->getContent(), true);
            $user = User::where("user_id",$userId);

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

            if($userId !== $uid){
                return $this->sendResponse(
                    true,
                    'unauthorised to update user info',
                    'unauthorised',
                    null,
                    403
                );
            }

            $updatedData = [
                "username"=> $payload["username"],
                "email"=>$payload["email"],
                "full_name"=> $payload["full_name"]
            ];

            $user->update($updatedData);

            return $this->sendResponse(false, null, 'User info updated successfully', Response::HTTP_OK);
        } catch (\Exception $e) {
            return $this->sendResponse(true, 'User info not updated', $e->getMessage());
        }
    }
}