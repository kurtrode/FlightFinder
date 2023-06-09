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
    public function fetchFlightsData(Request $request,$searchQuery=null)
    {
        
        // $searchString = $request->input('searchQuery');
        
        // fetch the flights data from API
        $response = Http::get("https://airlabs.co/api/v9/flights?api_key=703a0329-5efa-4ed6-b128-02772bb1eb2f");

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
        $multiSearchInput = $request->all();
        if($multiSearchInput['arrival'] && $multiSearchInput['departure']){
            
            $filteredFlights = $flights->filter(function ($flight) use ($multiSearchInput) {
            
                // $matchesDepartureAirport = ($flight->depatureAirport->name ?? false) === $searchQuery;
                $matchesArrivalAirport =  str_contains(strtolower($flight->arrivalAirport->name ?? ''), strtolower($multiSearchInput['arrival']));
                $matchesDepartureAirport = str_contains(strtolower($flight->depatureAirport->name ?? ''), strtolower($multiSearchInput['departure']));
                // $matchesArrivalAirport = ($flight->arrivalAirport->name ?? false) === $searchQuery;
                
    
                $isInFuture = true;
    
                $filterPassed = ($matchesDepartureAirport && $matchesArrivalAirport) && $isInFuture;
    
                return $filterPassed;
            
            });
           
        }else{

        
        $filteredFlights = $flights->filter(function ($flight) use ($multiSearchInput) {
            
            // $matchesDepartureAirport = ($flight->depatureAirport->name ?? false) === $searchQuery;
            $matchesArrivalAirport =  str_contains(strtolower($flight->arrivalAirport->name ?? ''), strtolower($multiSearchInput['arrival']));
            $matchesDepartureAirport = str_contains(strtolower($flight->depatureAirport->name ?? ''), strtolower($multiSearchInput['departure']));
            // $matchesArrivalAirport = ($flight->arrivalAirport->name ?? false) === $searchQuery;
            $matchesFlightNumberIcao = ($flight->flight_icao ?? '') === $searchQuery;
            $matchesFlightNumber = ($flight->flight_number ?? '') === $searchQuery;

            $isInFuture = true;

            $filterPassed = ($matchesDepartureAirport || $matchesArrivalAirport || $matchesFlightNumberIcao || $matchesFlightNumber ) && $isInFuture;

            return $filterPassed;
        });
    }
        return $filteredFlights->values();
    
    }
    public function fetchDeparture($departQuery)
    {
        
        // $searchString = $request->input('searchQuery');
        
        // fetch the flights data from API
        $response = Http::get("https://airlabs.co/api/v9/flights?api_key=703a0329-5efa-4ed6-b128-02772bb1eb2f");

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


        $filteredFlights = $flights->filter(function ($flight) use ($departQuery) {
            
            // $matchesDepartureAirport = ($flight->depatureAirport->name ?? false) === $searchQuery;
            $matchesArrivalAirport =  str_contains(strtolower($flight->arrivalAirport->name ?? ''), strtolower($departQuery));
            $matchesDepartureAirport = str_contains(strtolower($flight->depatureAirport->name ?? ''), strtolower($departQuery));
            // $matchesArrivalAirport = ($flight->arrivalAirport->name ?? false) === $searchQuery;
            $matchesFlightNumberIcao = ($flight->flight_icao ?? '') === $departQuery;
            $matchesFlightNumber = ($flight->flight_number ?? '') === $departQuery;

            $isInFuture = true;

            $filterPassed = ($matchesDepartureAirport) && $isInFuture;

            return $filterPassed;
        });
        return $filteredFlights->values();
    }
    public function fetchArrival($arrivalQuery)
    {
        
        // $searchString = $request->input('searchQuery');
        
        // fetch the flights data from API
        $response = Http::get("https://airlabs.co/api/v9/flights?api_key=703a0329-5efa-4ed6-b128-02772bb1eb2f");

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


        $filteredFlights = $flights->filter(function ($flight) use ($arrivalQuery) {
            
            // $matchesDepartureAirport = ($flight->depatureAirport->name ?? false) === $searchQuery;
            $matchesArrivalAirport =  str_contains(strtolower($flight->arrivalAirport->name ?? ''), strtolower($arrivalQuery));
            $matchesDepartureAirport = str_contains(strtolower($flight->depatureAirport->name ?? ''), strtolower($arrivalQuery));
            // $matchesArrivalAirport = ($flight->arrivalAirport->name ?? false) === $searchQuery;
            $matchesFlightNumberIcao = ($flight->flight_icao ?? '') === $arrivalQuery;
            $matchesFlightNumber = ($flight->flight_number ?? '') === $arrivalQuery;

            $isInFuture = true;

            $filterPassed = ($matchesArrivalAirport) && $isInFuture;

            return $filterPassed;
        });
        return $filteredFlights->values();
    }
    public function fetchTravel(Request $request)
    {
        
        // $searchDepart = $request->input('departure');
        // $searchArrive = $request->input('arrival');
        
        // fetch the flights data from API
        $response = Http::get("https://airlabs.co/api/v9/flights?api_key=703a0329-5efa-4ed6-b128-02772bb1eb2f");

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


        $filteredFlights = $flights->filter(function ($flight) use ($request) {
            
            // $matchesDepartureAirport = ($flight->depatureAirport->name ?? false) === $searchQuery;
            $matchesArrivalAirport =  str_contains(strtolower($flight->arrivalAirport->name ?? ''), strtolower($request->input('arrival')));
            $matchesDepartureAirport = str_contains(strtolower($flight->depatureAirport->name ?? ''), strtolower($request->input('departure')));
            // $matchesArrivalAirport = ($flight->arrivalAirport->name ?? false) === $searchQuery;
            // $matchesFlightNumberIcao = ($flight->flight_icao ?? '') === $arrivalQuery;
            // $matchesFlightNumber = ($flight->flight_number ?? '') === $arrivalQuery;

            $isInFuture = true;

            $filterPassed = ($matchesArrivalAirport && $matchesDepartureAirport) && $isInFuture;

            return $filterPassed;
        });
        return $filteredFlights->values();
    }
        public function fetchNumber($travelQuery)
    {
        
        // $searchString = $request->input('searchQuery');
        
        // fetch the flights data from API
        $response = Http::get("https://airlabs.co/api/v9/flights?api_key=703a0329-5efa-4ed6-b128-02772bb1eb2f");

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


        $filteredFlights = $flights->filter(function ($flight) use ($travelQuery) {
            
            // $matchesDepartureAirport = ($flight->depatureAirport->name ?? false) === $searchQuery;
            // $matchesArrivalAirport =  str_contains(strtolower($flight->arrivalAirport->name ?? ''), strtolower($arrivalQuery));
            // $matchesDepartureAirport = str_contains(strtolower($flight->depatureAirport->name ?? ''), strtolower($arrivalQuery));
            // $matchesArrivalAirport = ($flight->arrivalAirport->name ?? false) === $searchQuery;
            $matchesFlightNumberIcao = ($flight->flight_icao ?? '') === $travelQuery;
            $matchesFlightNumber = ($flight->flight_number ?? '') === $travelQuery;

            $isInFuture = true;

            $filterPassed = ($matchesArrivalAirport) && $isInFuture;

            return $filterPassed;
        });
        return $filteredFlights->values();
    
    }
    
    // public function databaseCall(Request $request){
    //     $lat = $request->input('lat');
    //     $lng = $request->input('lng');
    //     $cities = Airport::where('name','like',"%Los Angeles International%")->get();
    // return $cities;}
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
