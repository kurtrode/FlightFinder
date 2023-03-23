<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emission extends Model
{
    use HasFactory;
    public function aircraft_types(){
        return $this->belongsTo(Aircraft_Type::class);
    }
    public function emissions(){
        return $this->hasMany(Flight::class);
    }
}
