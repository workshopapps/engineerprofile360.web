<?php

use App\Mail\PasswordReset;
use App\Mail\Signup;
use App\Mail\Verification;
use Illuminate\Support\Facades\Mail;

class Mailer{

    public function signUpMail($from, $to, $message="", $data=""){
        $mailData = [
            "from"=>$from,
            "message"=>$message,
            "data"=>$data
        ];

        try {
            Mail::to($to)->send(new Signup($mailData));
        } catch (\Exception $e) {
            echo("Something went wrong sending mail".$e->getMessage());
        }
    }

    public function verifyEmail($from, $to, $message="", $data=""){
        $mailData = [
            "from"=>$from,
            "message"=>$message,
            "data"=>$data
        ];

        try {
            Mail::to($to)->send(new Verification($mailData));
        } catch (\Exception $e) {
            echo("Something went wrong sending mail ".$e->getMessage());
        }
    }

    public function passwordReset($from, $to,$msg, $data=""){
        $mailData = [
            "from"=>$from,
            "data"=>$data,
            "message"=>$msg
        ];

        try {
            Mail::to($to)->send(new PasswordReset($mailData));
        } catch (\Exception $e) {
            echo("Something went wrong sending mail ".$e->getMessage());
        }
    }

    public function notifyEmployeeAssessment($from, $to, $org_name, $assessment_category, $data=""){
        $mailData = [
            "employee_name"=>$from,
            "data"=>$data,
            "assessment_category"=>$assessment_category,
            "org_name"=>$org_name
        ];

        try {
            Mail::to($to)->send(new PasswordReset($mailData));
        } catch (\Exception $e) {
            echo("Something went wrong sending mail ".$e->getMessage());
        }
    }
}