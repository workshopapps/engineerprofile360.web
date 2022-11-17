<?php

namespace App\Http\Actions;

use Illuminate\Http\JsonResponse;

class SendResponseAction
{
    public static function  handle(bool $error, int $code, string $msg, array $data): JsonResponse
    {
        return response()->json(
            [
                "error" => $error,
                "code" => $code,
                "message" => $msg,
                "data" => $data
            ],
            $code
        );
    }
}