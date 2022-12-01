<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Eval360 Assesment</title>
</head>
<body>
    
    <h2>Eval360 Assessment</h2>

    <p>Good day {{$mailData["employee_name"]}}, you were requested to take an assessment having the category {{$mailData["assessment_category"]}} by {{$mailData["org_name"]}}. </p>

    <p>Please, click on the below link.</p>
    <br>

    <a href="{{$mailData["link"]}}">Assessment Link</a>

</body>
</html>