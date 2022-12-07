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
        Schema::create('assessments', function (Blueprint $table) {
            $table->uuid('id')->unique();
            $table->string("name");
            $table->string("live")->nullable();
            $table->string("start_date");
            $table->string("start_time");
            $table->string("end_date");
            $table->string("end_time");
            $table->string('department_id');
            $table->string('org_id');
            $table->timestamps();
            // $table->foreignId('user_id')->nullable()->constrained();
            // $table->foreign("org_id")->references("user")->on("user_id")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('assessments');
    }
};