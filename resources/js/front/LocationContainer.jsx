import { useContext } from "react";
import FlightMap from "./FlightMap"
import NearbyCities from "./NearbyCities";
import UserContext from "./UserContext";
import WeatherAttDep from "./WeatherAttDep";


export default function LocationContainer(){
    const {flight,depIata,weatherDepLat,weatherDepLng} = useContext(UserContext);
    async function database(){
        const response = await fetch('/database');
        console.log(response);
    }
    database();
    
return(<><div className="result">
    {console.log(flight)}
    <h3>This flight departs from <strong>{flight.depature_airport.name ?? "Not defined"}</strong>.</h3>
    <h3>It arrives at <strong>{flight.arrival_airport.name ?? "Not defined"}.</strong></h3>
    <h3>The flight number is <strong>{flight.flight_number ?? "Not defined"}</strong> and the ICAO code is {flight.flight_icao ?? "Not defined"}.</h3>
    <h3>It's currently {flight.status} and flying at an altitude of {flight.alt} meters.</h3>
    {(depIata && weatherDepLat && weatherDepLng) ? <WeatherAttDep depIata={depIata} weatherDepLat={weatherDepLat} weatherDepLng={weatherDepLng}/> : null}
    {console.log([depIata,weatherDepLat,weatherDepLng])}
    {<NearbyCities/>}
</div>
{/* <h3>View flights from your plane's location here:</h3> */}
{/* <div><FlightMap/></div> */}
    <div></div></>)
}