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
            $table->uuid('id')->primary();
            $table->string("email", 255);
            $table->string("fullname", 255);
            $table->string("username", 255)->uniqid();
            $table->string("hash", 255);
            $table->string("image", 255);
            $table->string("occupation", 255);
            $table->string("reftoken", 255);
            $table->integer("role")->length(1)->default(0);
            $table->foreignUuid('org_id')
                ->references('id')
                ->on('companies')
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
        Schema::dropIfExists('employees');
    }
};