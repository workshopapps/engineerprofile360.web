@extends('layouts.template')
@section('content')
<p>Hello, {{$mailData["data"]["firstname"]??"user"}}</p>
<p>Happy to see you onboard. You can now access your test area.</p>
<p>Here's how to get started: </p>
<p>Login to your account with your email and password to get access to your account. Our support team is on standby if you have any questions about using the platform.</p>
<br/>
<a class="krLcDa" href={{$mailData["data"]["link"]??"link"}} style="color: #ffffff;">Login Now</a>
<br/><br/>
@endsection