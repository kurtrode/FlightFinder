<?php

namespace Database\Seeders;

use App\Models\Emission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('emissions')->truncate();
        $source_file = storage_path('emissions.json');
        if (!file_exists($source_file)){
            die('Source file '.$source_file.' not found');
        }
        $data = json_decode(file_get_contents($source_file));
        foreach ($data as $item){
            $emissions = new Emission();
            if(isset($item->{'UID No'}))$emissions->{'UID No'} = $item->{'UID No'};
            if(isset($item->{'Engine Identification'}))$emissions->{'Engine Identification'} = $item->{'Engine Identification'};
            if(isset($item->{'HC EI T/O (g/kg)'}))$emissions->{'HC EI T/O (g/kg)'} = $item->{'HC EI T/O (g/kg)'};
            if(isset($item->{'HC EI C/O (g/kg)'}))$emissions->{'HC EI C/O (g/kg)'} = $item->{'HC EI C/O (g/kg)'};
            if(isset($item->{'HC EI App (g/kg)'}))$emissions->{'HC EI App (g/kg)'} = $item->{'HC EI App (g/kg)'};
            if(isset($item->{'CO EI T/O (g/kg)'}))$emissions->{'CO EI T/O (g/kg)'} = $item->{'CO EI T/O (g/kg)'};
            if(isset($item->{'CO EI C/O (g/kg)'}))$emissions->{'CO EI C/O (g/kg)'} = $item->{'CO EI C/O (g/kg)'};
            if(isset($item->{'CO EI App (g/kg)'}))$emissions->{'CO EI App (g/kg)'} = $item->{'CO EI App (g/kg)'};
            if(isset($item->{'NOx EI T/O (g/kg)'}))$emissions->{'NOx EI T/O (g/kg)'} = $item->{'NOx EI T/O (g/kg)'};
            if(isset($item->{'NOx EI C/O (g/kg)'}))$emissions->{'NOx EI C/O (g/kg)'} = $item->{'NOx EI C/O (g/kg)'};
            if(isset($item->{'NOx EI App (g/kg)'}))$emissions->{'NOx EI App (g/kg)'} = $item->{'NOx EI App (g/kg)'};
            if(isset($item->{'Fuel Flow T/O (kg/sec)'}))$emissions->{'Fuel Flow T/O (kg/sec)'} = $item->{'Fuel Flow T/O (kg/sec)'};
            if(isset($item->{'Fuel Flow C/O (kg/sec)'}))$emissions->{'Fuel Flow C/O (kg/sec)'} = $item->{'Fuel Flow C/O (kg/sec)'};
            if(isset($item->{'Fuel Flow App (kg/sec)'}))$emissions->{'Fuel Flow App (kg/sec)'} = $item->{'Fuel Flow App (kg/sec)'};
            if(isset($item->{'Fuel Flow Idle (kg/sec)'}))$emissions->{'Fuel Flow Idle (kg/sec)'} = $item->{'Fuel Flow Idle (kg/sec)'};
            if(isset($item->{'Fuel LTO Cycle (kg)  '}))$emissions->{'Fuel LTO Cycle (kg)'} = $item->{'Fuel LTO Cycle (kg)  '};
            $emissions->save();
        }
        }
    }

