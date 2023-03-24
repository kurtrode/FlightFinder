<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CountriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('countries')->truncate();
        $source_file = storage_path('countries.json');
        if (!file_exists($source_file)){
            die('Source file '.$source_file.' not found');
        }
        $data = json_decode(file_get_contents($source_file));
        foreach ($data as $item){
            $countries = new Country();
            $countries->name = $item->name;
            $countries->code = $item->code;
            $countries->code3 = $item->code3;
            $countries->save();
        }
    }
}
