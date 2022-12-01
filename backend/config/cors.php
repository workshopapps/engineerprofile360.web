<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ["GET", "POST", "PUT", 'DELETE', "PATCH",'*'],

    'allowed_origins' => ["https://eval360.hng.tech", "https://eval360.hng.tech", "http://localhost:3000", "http://localhost:8000", "https://api.eval360.hng.tech", '*'],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['X-Custom-Header', 'Upgrade-Insecure-Requests','*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => false,

];
