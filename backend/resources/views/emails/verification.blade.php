@extends('layouts.template')
@section('content')
    <p>Hi, {{$mailData["data"]["firstname"]??"user"}}</p>
    <p>You're almost ready to access your evaluation portal.</p>
    <p>Simply tap on the big blue button below to verify your account. </p>
    <br>
    <a class="krLcDa" href={{$mailData["data"]["link"]??""}} style="color: #ffffff">Verify Account</a>
    <br><br>
    <p>See you inside!</p>
@endsection