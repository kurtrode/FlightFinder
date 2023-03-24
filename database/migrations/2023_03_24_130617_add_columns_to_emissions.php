<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('emissions', function (Blueprint $table) {
            //
            $table->integer('aircraft_type_id')->default(0)->change();
            $table->float('co2_g_per_km')->default(0)->change();
            $table->float('noise_db')->default(0)->change();
            $table->string('UID No');
            $table->int('GSDB No');
            $table->string('Manufacturer');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('emissions', function (Blueprint $table) {
            //
        });
    }
};
