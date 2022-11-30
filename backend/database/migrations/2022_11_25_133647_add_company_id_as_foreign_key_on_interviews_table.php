<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('interviews', function (Blueprint $table) {
            $table->foreignId('company_id')->nullable()->index();
        });
    }

    public function down() {
        Schema::table('interviews', function (Blueprint $table) {
            $table->dropColumn('company_id');
        });
     }

};
