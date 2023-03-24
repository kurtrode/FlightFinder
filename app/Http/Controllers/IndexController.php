<?php

namespace App\Http\Controllers;

use Laravel\Sanctum\Sanctum;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        // dd(Sanctum::currentApplicationUrlWithPort());
        return view('index.index');
    }
}
