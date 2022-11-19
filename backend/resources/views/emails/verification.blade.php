<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Test Email</title>
</head>
<body>
    <h1>Verify your email address</h1>

    Verify your email address using the link below.

    <a href="{{$mailData["data"]}}">Verification Link</a>
    
    <p>{{$mailData["message"]}}</p>
</body>
</html>