<?php

use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FlightSearchController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware([])->get('/user/check', function (Request $request) {
    return auth()->user() ?? '';
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/fetch-flights/{searchQuery}', [FlightSearchController::class, 'fetchFlightsData']);
Route::get('/fetch-departure/{departQuery}', [FlightSearchController::class, 'fetchDeparture']);
Route::get('/fetch-arrival/{arriveQuery}', [FlightSearchController::class, 'fetchArrival']);
Route::get('/fetch-travel',[FlightSearchController::class, 'fetchTravel']);
Route::get('/search',[FlightSearchController::class, 'fetchFlightsData']);
Route::get('/emissions', [FlightSearchController::class, 'emisisons']);
Route::get('/database',[FlightSearchController::class, 'databaseCall']);
// Route::post('/login', [RegisterController::class, 'login'])->name('login');
