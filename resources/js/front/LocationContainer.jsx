import { useContext } from "react";
import FlightMap from "./FlightMap"
import NearbyCities from "./NearbyCities";
import UserContext from "./UserContext";
import WeatherAttDep from "./WeatherAttDep";


export default function LocationContainer(){
    const {flight,depIata} = useContext(UserContext);
    async function database(){
        const response = await fetch('/database');
        console.log(response);
    }
    database();
    
return(<><div className="result">
    {console.log(flight)}
    <h3>This flight departs from {flight.depature_airport.name ?? "Not defined"}.</h3>
    <h3>It arrives at {flight.arrival_airport.name ?? "Not defined"}.</h3>
    <h3>The flight number is {flight.flight_number ?? "Not defined"} and the ICAO code is {flight.flight_icao ?? "Not defined"}.</h3>
    {<WeatherAttDep depIata={depIata}/>}
    {<NearbyCities/>}
</div>
<h3>View flights from your plane's location here:</h3>
<div><FlightMap/></div>
    <div></div></>)
}