<?php
/*
|--------------------------------------------------------------------------
| SendResponse
|--------------------------------------------------------------------------
|
| This function is meant to be reusable, as it prevents typing / calling the following peice of codes all the time
| response()->json($data, 200). It simply leverage this peice of code in creating a well formated client response along with each status code specified.
| All you have to do is call the function and pass in the required info.
|
*/

function sendResponse($error=false, $code=200, $msg="", $data=[""=>""]){

    $response = [
        "error"=> $error,
        "code"=> $code,
        "message"=> $msg,
        "data"=> $data
    ];

    return response()->json($response, $code);
}

?>