<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Eval360 Onboarding</title>
</head>
<body>
    
    <h2>Welcome to Eval360.</h2>
    <p>A platform that enables you know your employee.</p>

    <p>You've been invited into <b>{{$mailData["org_name"]}}</b> organization, below are your credentials.</p>
    <br>
    <br>

    <p> Full Name: <b>{{$mailData["emp_fullname"]}}</b> </p>
    <p> Username: <b>{{$mailData["emp_username"]}}</b> </p>
    <p> Email: <b>{{$mailData["emp_email"]}}</b> </p>
    <p> Default Password: <b>{{$mailData["emp_password"]}}</b> </p>

    <p>Please do not hesitate to login into your account for any upcoming assessments from your organization. Use the link below</p>

    <br>

    <a href="{{$mailData["login_link"]}}">Login into your account.</a>

</body>
</html>