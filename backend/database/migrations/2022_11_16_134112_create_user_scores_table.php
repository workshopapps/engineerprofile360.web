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
        Schema::create('user_scores', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string("passed_questions", 255);
            $table->string("categories", 255);
            $table->foreignUuid('employee_id')
                ->references('id')
                ->on('employees')
                ->onDelete('cascade');
            $table->foreignUuid('assessment_id')
                ->references('id')
                ->on('assessments')
                ->onDelete('cascade');
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
        Schema::dropIfExists('user_scores');
    }
};