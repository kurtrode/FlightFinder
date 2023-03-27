<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FetchedFlight extends Model
{
    use HasFactory;

    protected $fillable = [
        "hex",
        "reg_number",
        "flag",
        "lat",
        "lng",
        "alt",
        "dir",
        "speed",
        "v_speed",
        "squawk",
        "flight_number",
        "flight_icao",
        "flight_iata",
        "dep_icao",
        "dep_iata",
        "arr_icao",
        "arr_iata",
        "airline_icao",
        "airline_iata",
        "aircraft_icao",
        "updated",
        "status",
    ];

    public function arrivalAirport(){
        return $this->belongsTo(Airport::class,'arr_icao','icao_code');
    }
    public function depatureAirport(){
        return $this->belongsTo(Airport::class,'dep_icao','icao_code');
    }
    public function airlineName(){
        return $this->belongsTo(Airline::class,'airline_icao', 'icao_code');
    }
}
