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
        Schema::table('aircraft_types', function (Blueprint $table) {
            //
            $table->string('name')->default('')->change();
            $table->integer('max_passengers')->default(0)->change();
            $table->float('max_range_km')->default(0)->change();
            $table->string('engine_type')->default(0);
            $table->integer('engines')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('aircraft_types', function (Blueprint $table) {
            //
        });
    }
};
