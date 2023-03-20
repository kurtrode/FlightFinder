<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aircraft_Type extends Model
{
    use HasFactory;
    public function flights(){
        return $this->hasMany(Flight::class);
    }
    public function emissions(){
        return $this->hasMany(Emission::class);
    }

}
