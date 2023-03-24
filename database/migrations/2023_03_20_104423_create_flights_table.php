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
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->integer('aircraft_type_id');
            $table->integer('emission_id');
            $table->integer('departure_city_id');
            $table->integer('arrival_city_id');
            $table->dateTime('departure_time');
            $table->dateTime('arrival_time');
            $table->string('weather');
            $table->float('temperature_celsius');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('flights');
    }
};
