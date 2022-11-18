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
            $table->string("id")->unique()->primary();
            $table->string("username");
            $table->string("email")->uniqid();
            $table->string("hash");
            $table->string("reftoken")->nullable();
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
