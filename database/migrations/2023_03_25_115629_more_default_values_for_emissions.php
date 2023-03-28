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
            $table->float('HC EI App (g/kg)')->default(0)->change();
            $table->float('CO EI C/O (g/kg)')->default(0)->change();
            $table->float('Fuel Flow C/O (kg/sec)')->default(0)->change();
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
