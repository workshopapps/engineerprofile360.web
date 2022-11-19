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
            $table->string("id", 255)->primary();
            $table->string("full_name", 255)->default('');
            $table->string("username", 255)->uniqid();
            $table->string("email", 255)->uniqid();
            $table->string("password", 255);
            $table->string("reftoken", 255)->nullable();
            $table->integer("role")->length(1)->default(1);
            $table->boolean("isVerified")->nullable();
            $table->string("verify_code")->nullable();
            $table->string("verify_code_exp")->nullable();
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
