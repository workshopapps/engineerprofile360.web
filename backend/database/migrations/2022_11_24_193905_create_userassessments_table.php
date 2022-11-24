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
        Schema::create('userassessments', function (Blueprint $table) {
            $table->uuid('id')->unique();
            $table->integer("completed")->length(1)->default(0);
            $table->integer("total_questions")->nullable();
            $table->integer("correct_questions")->nullable();
            $table->integer("result")->nullable();
            $table->foreignUuid('employee_id')->references('id')->on('employees')->onDelete('cascade');
            $table->foreignUuid('assessment_id')->references('id')->on('assessments')->onDelete('cascade');
            $table->foreignUuid('org_id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreignUuid('userscore_id')->references('id')->on('user_scores')->onDelete('cascade');
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
        Schema::dropIfExists('userassessments');
    }
};
