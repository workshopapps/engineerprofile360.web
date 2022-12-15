<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Eval360 Demo Requests</title>
</head>
<body>
    
    @if ($mailData["type"] === "eval360_admin")
        <h1>Demo Requests</h1>
        <br>
        <p>A client with the following details: </p>
        <p> Name: {{$mailData["name"]}} </p>
        <p> Company Name: {{$mailData["company_name"]}} </p>
        <p> Company Email: {{$mailData["company_email"]}} </p>
        <p> Company Phonenumber: {{$mailData["company_phone"]}} </p>
        <br>
        <p>Has requested to demo of your application, kindly reach out to him.</p>
    @else
        <h1>Demo Requests</h1>
        <br>
        <p>Your requests for demo has been received and we would get back to you by mail shortly.</p>
    @endif
</body>
</html>