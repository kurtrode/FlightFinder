<?php

namespace Database\Seeders;

use App\Models\Airline;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AirlineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('airlines')->truncate();
        $source_file = storage_path('airlines.json');
        if (!file_exists($source_file)){
            die('Source file '.$source_file.' not found');
        }
        $data = json_decode(file_get_contents($source_file));
        foreach ($data as $item){
            $airlines = new Airline();
            $airlines->name = $item->name;
            if (isset($item->iata_code))$airlines->iata_code = $item->iata_code;
            if (isset($item->icao_code))$airlines->icao_code = $item->icao_code;
            $airlines->save();
        }
    }
}
