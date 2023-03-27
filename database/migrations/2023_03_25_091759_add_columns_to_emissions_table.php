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
            $table->string('UID No')->default('');
            $table->string('Engine Identification')->default('');
            $table->float('HC EI T/O (g/kg)')->default(0);
            $table->float('HC EI C/O (g/kg)')->default(0);
            $table->float('HC EI App (g/kg)')->defualt(0);
            $table->float('CO EI T/O (g/kg)')->default(0);
            $table->float('CO EI C/O (g/kg)')->defualt(0);
            $table->float('CO EI App (g/kg)')->default(0);
            $table->float('NOx EI T/O (g/kg)')->default(0);
            $table->float('NOx EI C/O (g/kg)')->defualt(0);
            $table->float('NOx EI App (g/kg)')->default(0);
            $table->float('Fuel Flow T/O (kg/sec)')->default(0);
            $table->float('Fuel Flow C/O (kg/sec)')->defualt(0);
            $table->float('Fuel Flow App (kg/sec)')->default(0);
            $table->float('Fuel Flow Idle (kg/sec)')->default(0);
            $table->integer('Fuel LTO Cycle (kg)')->default(0);
            
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
