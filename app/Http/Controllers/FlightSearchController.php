<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use App\Models\FetchedFlight;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Database\Eloquent\Collection;
use App\Models\Airport;

class FlightSearchController extends Controller
{
    public function fetchFlightsData($searchQuery)
    {
        
        // $searchString = $request->input('searchQuery');
        
        // fetch the flights data from API
        $response = Http::get("https://airlabs.co/api/v9/flights?api_key=add866a8-32ef-4e81-b5a4-145620e6da18");

        // read the response property of response as JSON (turns into array of associative arrays)
        $flightArrays = $response->json('response');
        
        // create empty array which we will populate with models
        $flightsArray = [];

        // populate the array with models based on fetched associative arrays
        foreach ($flightArrays as $flight) {
            // get rid of all the useless data about a flight to make the response leaner
            unset ($flight['v_speed']);
            unset ($flight['reg_number']);
            unset ($flight['squawk']);
            // unset ($flight['dep_iata']);
            // unset ($flight['arr_iata']);
            unset ($flight['airline_iata']);
            unset ($flight['flight_iata']);

            // you can controll which of the flights are returned to FE by including
            // conditions here which have to be met in order for the model to be created
            // dd($flight);
            // if (($flight['flight_icao'] ?? '') == $searchQuery) {
            //     $flightsArray[] = new FetchedFlight($flight);
            // }
            $flightsArray[] = new FetchedFlight($flight);

        }
  
        // make a collection out of arrays
        $flights = new Collection($flightsArray);
        // at this point, we have the same thing as if we retrieved the flights from DB
        // using the below statement
        // $flights = FetchedFlight::get();

        $flights->load('arrivalAirport:icao_code,name');
        // at this point, we have the same thing as if we retrieved the flights from DB
        // using the below statement
        // $flights = FetchedFlight::with('arrivalAirport:icao_code,name')->get();
        $flights->load('depatureAirport:icao_code,name');
      
        $flights->load('airlineName:icao_code,name');


        $filteredFlights = $flights->filter(function ($flight) use ($searchQuery) {
            
            // $matchesDepartureAirport = ($flight->depatureAirport->name ?? false) === $searchQuery;
            $matchesArrivalAirport =  str_contains(strtolower($flight->arrivalAirport->name ?? ''), strtolower($searchQuery));
            $matchesDepartureAirport = str_contains(strtolower($flight->depatureAirport->name ?? ''), strtolower($searchQuery));
            // $matchesArrivalAirport = ($flight->arrivalAirport->name ?? false) === $searchQuery;
            $matchesFlightNumberIcao = ($flight->flight_icao ?? '') === $searchQuery;
            $matchesFlightNumber = ($flight->flight_number ?? '') === $searchQuery;

            $isInFuture = true;

            $filterPassed = ($matchesDepartureAirport || $matchesArrivalAirport || $matchesFlightNumberIcao || $matchesFlightNumber ) && $isInFuture;

            return $filterPassed;
        });
        return $filteredFlights->values();
    }
    public function databaseCall(Request $request){
        $lat = $request->input('lat');
        $lng = $request->input('lng');
        $cities = Airport::where('name','like',"%Los Angeles International%")->get();
    return $cities;}
    // public function emissions(Request $request){
    //     $encodedParams = new URLSearchParams();
    //     $encodedParams.append("iata_airport_from", "LHR");
    //     $encodedParams.append("iata_airport_to", "LAX");
    //     $encodedParams.append("number_of_passengers", "1");
    //     $response = Http::get('https://airlabs.co/api/v9/flights?api_key=add866a8-32ef-4e81-b5a4-145620e6da18',headers: {
    //         'content-type': 'application/x-www-form-urlencoded',
    //         Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
    //         'X-RapidAPI-Key': 'ff11e50708msh8107b98312c4760p171694jsn7e6cc0d3480f',
    //         'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
    //       },data: encodedParams);
    //  }
}
