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
        Schema::create('user_assessments', function (Blueprint $table) {
            $table->uuid('id')->unique();
            $table->string("completed");
            $table->string("total_questions")->nullable();
            $table->string("correct_questions")->nullable();
            $table->string("result")->nullable();
            $table->string('employee_id');
            $table->string('assessment_id');
            $table->string('org_id');
            $table->string('userscore_id');
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
        Schema::dropIfExists('user_assessments');
    }
};
