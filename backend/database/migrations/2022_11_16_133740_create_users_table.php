<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string("username", 255)->uniqid();
            $table->string("email", 255)->uniqid();
            $table->string("hash", 255);
            $table->string("reftoken", 255);
            $table->integer("role")->length(1)->default(1);
            $table->boolean("isVerified");
            $table->string("verify_code", 255);
            $table->string("verify_code_exp", 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};