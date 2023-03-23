<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;
    public function airports(){
        return $this->hasMany(Airport::class);
    }
    public function departure_city(){
        return $this->hasMany(Flight::class);
    }
    public function arrival_city(){
        return $this->hasMany(Flight::class);
    }
    public function countries(){
        return $this->belongsTo(Country::class);
    }
}
