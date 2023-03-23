<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Airport;
use Illuminate\Support\Facades\DB;

class AirportsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('airports')->truncate();
        $source_file = storage_path('airports.json');
        if (!file_exists($source_file)){
            die('Source file '.$source_file.' not found');
        }
        $data = json_decode(file_get_contents($source_file));
        foreach ($data as $item){
            $airport = new Airport;
            $airport->name = $item->name;
            $airport->iata_code ? $airport->iata_code = $item->iata_code : $airport->iata_code="";
            $airport->icao_code ? $airport->icao_code = $item->icao_code : $airport->icao_code="";
            $airport->lat = $item->lat;
            $airport->lng = $item->lng;
            $airport->country_code = $item->country_code;
            $airport->save();

        }
    }
}
