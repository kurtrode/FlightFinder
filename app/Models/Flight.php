<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;

    public function users(){
        return $this->belongsTo(User::class);
    }
    public function aircraftType(){
        return $this->belongsTo(AircraftType::class,'aircraft_type_id','id');
    }
    public function emissions(){
        return $this->belongsTo(Emission::class);
    }
    public function departure_cities(){
        return $this->hasOne(City::class, 'departure_city_id');
    }
    public function arrival_cities(){
        return $this->hasOne(City::class,'arrival_city_id');
    }
}
