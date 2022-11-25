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
        Schema::create('employees', function (Blueprint $table) {
            $table->uuid('id');
            $table->string("email");
            $table->string("fullname");
            $table->string("username");
            $table->string("hash")->nullable();
            $table->string("image")->nullable();
            $table->string("occupation")->nullable();
            $table->string("department_id")->nullable();
            $table->string("reftoken")->nullable();
            $table->integer("role")->length(1)->default(0);
            $table->string('org_id');
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
        Schema::dropIfExists('employees');
    }
};