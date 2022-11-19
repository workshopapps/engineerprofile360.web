<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Password Reset</title>
</head>
<body>
    <h1>Password Reset</h1>

    Reset your password using the link below.

    <a href="{{$mailData["data"]}}">Password Reset Link</a>

    <p>{{$mailData["message"]}}</p>
</body>
</html>