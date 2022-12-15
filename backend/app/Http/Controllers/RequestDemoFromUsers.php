<?php

namespace App\Http\Controllers;

use App\Helper\Helper;
use Illuminate\Http\Request;

class RequestDemoFromUsers extends Controller
{

    public function __construct()
    {
        $this->helper = new Helper();
        $this->Eval360_EMAIL = "alumonabenaiah71@gmail.com";
    }

    public function sendRequestsDemo(Request $req){
        try {
            
            $payload = json_decode($req->getContent(), true);

            if(!isset($payload["username"]) || !isset($payload["companyName"]) || !isset($payload["companyEmail"]) || !isset($payload["companyPhone"])){
                return $this->sendResponse(true, "some inputs are missing", "There was a problem with your submission, please try again", null, 400);
            }

            if(empty($payload["username"]) || empty($payload["companyName"]) || empty($payload["companyEmail"]) || empty($payload["companyPhone"])){
                return $this->sendResponse(true, "some inputs are missing", "There was a problem with your submission, please try again", null, 400);
            }

            // validate email
            $userName = $payload["username"];
            $companyName = $payload["companyName"];
            $companyEmail = $payload["companyEmail"];
            $companyPhone = $payload["companyPhone"];
            $userMail = $companyEmail;

            // send mail to demo user.
            $this->helper->demoRequests($userMail, "demo_user", $userName, $companyName, $companyEmail, $companyPhone);
            // sends mail to eval360 admin
            $this->helper->demoRequests($this->Eval360_EMAIL, "eval360_admin",$userName, $companyName, $companyEmail, $companyPhone);

            return $this->sendResponse(false, null, "requests demo sent successfully", null, 200);

        } catch (\Exception $e) {
            return $this->sendResponse(true, "something went wrong: ".$e->getMessage(), "something went wrong sending requests demo, please try later", null, 500);
        }
    }
}
