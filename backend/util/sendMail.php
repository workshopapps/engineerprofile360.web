<?php

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
            echo("Something went wrong sending mail".$e->getMessage());
        }
    }
}