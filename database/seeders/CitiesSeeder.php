<?php

namespace Database\Seeders;

use App\Models\City;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('cities')->truncate();
        $source_file = storage_path('cities.json');
        if (!file_exists($source_file)){
            die('Source file '.$source_file.' not found');
        }
        $data = json_decode(file_get_contents($source_file));
        foreach ($data as $item){
            $cities = new City();
            $cities->name = $item->name;
            $cities->city_code = $item->city_code;
            $cities->lat = $item->lat;
            $cities->lng = $item->lng;
            $cities->country_code = $item->country_code;
            $cities->save();
        }
    }
}
