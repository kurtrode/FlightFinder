import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import './FlightFinder.css';



export default function FlightFinder (){
    const {arrIata,setArrIata,depIata,setDepIata,arrIcao,setArrIcao,depIcao,setDepIcao,arrName,setArrName,depName,setDepName,flight,setFlight,weatherDepLat,weatherDepLng} = useContext(UserContext);

       
    const [searchQuery, setSearchQuery] = useState("");
    const [departQuery, setDepartQuery] = useState("");
    const [arrivalQuery, setArrivalQuery] = useState("");
        const [airlines, setAirlines] = useState([]);
       const [departValue, setDepartValue] = useState("");
       const [arrivalValue, setArrivalValue] = useState("");
        const [inputValue, setInputValue] = useState("");
        const[travelQuery,setTravelQuery] = useState([]);
        const[multiSearchInput,setMultiSearchInput]= useState({});

    async function fetchData() {
        
        const response = await fetch(`/api/fetch-flights/${searchQuery}`);    

        const data = await response.json();
        console.log(data);

        setAirlines(data);
        console.log(airlines);

               
    }
     async function fetchDepart() {
        
        const response = await fetch(`/api/fetch-departure/${departQuery}`);    

        const data = await response.json();
        console.log(data);

        setAirlines(data);
        console.log(airlines);

               
    }
    async function fetchArrive() {
        
        const response = await fetch(`/api/fetch-arrival/${arrivalQuery}`);    

        const data = await response.json();
        console.log(data);

        setAirlines(data);
        console.log(airlines);

               
    }
    async function multiSearch(e) {
        e.preventDefault();
        
        const response = await fetch(`/api/search?arrival=${multiSearchInput.arrival}&departure=${multiSearchInput.departure}`);  
  

        const data = await response.json();
        console.log(data);

        setAirlines(data);
        // console.log(airlines);

               
    }
    

    const handleChange = (e) => {
        setInputValue(e.target.value) 
        console.log(inputValue) 
    }
    const handleMultiSearch = (e) => {
        setMultiSearchInput({...multiSearchInput,[e.target.name]: e.target.value}) 
        console.log({[e.target.name]: e.target.value}) 
    }
    
    
    useEffect(()=>{
        fetchData();
    }, [searchQuery])
    useEffect(()=>{
        fetchDepart();
    }, [departQuery])
    useEffect(()=>{
        fetchArrive();
    }, [arrivalQuery])
 

return(
    <div className="flight">
        <h1>Flight status</h1>

        <input type="text"  placeholder="Flight #" className="flight-search" onChange={handleChange}   />
        <button onClick={() => {setSearchQuery(inputValue),console.log(inputValue)}} className="flight-s-button">Search</button>
        <input type="text"  placeholder="Departure Airport" className="flight-search" onChange={handleChange}   />
        <button onClick={() => {setDepartQuery(inputValue),console.log(inputValue)}} className="flight-s-button">Search</button>

         <input type="text"  placeholder="Arrival Airport" className="flight-search" onChange={handleChange}   />
        <button onClick={() => {setArrivalQuery(inputValue),console.log(inputValue)}} className="flight-s-button">Search</button>
        <form>
            <input type="text" name="departure" placeholder="Departure Airport" className="flight-search" onChange={handleMultiSearch} />
            <input type="text" name="arrival" placeholder="Arrival Airport" className="flight-search" onChange={handleMultiSearch}/>
            <button type="submit" onClick={(e)=>{multiSearch(e)}}>Send</button>
        </form>

        {/* <input type="text"  placeholder="Departure Airport" className="flight-search" onChange={handleChange}   />
        <button onClick={() => {setDepartQuery(inputValue),console.log(inputValue)}} className="flight-s-button">Search</button>

         <input type="text"  placeholder="Arrival Airport" className="flight-search" onChange={handleChange}   />
        <button onClick={() => {setArrivalQuery(inputValue),console.log(inputValue)}} className="flight-s-button">Search</button> */}

{/*        
        <input type="text"  placeholder="Depature airport"className="Search" onChange={handleChange}   />
        <button onClick={() => {setSearchQuery(inputValue),console.log(inputValue)}}>SearchBar</button>

        <input type="text"  placeholder="Arrival airport"className="Search" onChange={handleChange}   />
        <button onClick={() => {setSearchQuery(inputValue),console.log(inputValue)}}>SearchBar</button>     */}

 
            {   
                // airlines.filter((airline) => {
                //     return (airline.flag == searchQuery || airline.aircraft_icao == searchQuery || airline.departure_airport ? airline.departure_airport.icao_code == searchQuery : null)
                // } ).filter((airline, index) => (index < 5)).map((airline, index)=>
                
                //flight number, arrival, depa and flight status

                airlines.map((airline, index)=>
                <ul
                    key= { index }
                    >
                    <Link to="/container"  onClick={()=>{setArrIata(airline.arr_iata);setDepIata(airline.dep_iata);setArrIcao(airline.dep_icao);setDepIcao(airline.dep_icao);setArrName(airline.arrival_airport.name);setDepName(airline.depature_airport.name);setFlight(airline)}}>
                    <div className="aircraft_details">

                       
                        {(airline && airline.flight_icao) ? <p>Flight number: {airline.flight_icao}</p>
                        :
                        "no number"}
                      
                        
                        {(airline && airline.depature_airport && airline.depature_airport.name) ? <p> Departure: {airline.depature_airport.name}</p>
                        :
                        "no depature"}
                        {(airline && airline.arrival_airport && airline.arrival_airport.name) ? <p> Arrival: {airline.arrival_airport.name}</p>
                        :
                        "no arrival"}
                         
                          
                        {/* <p>Aircraft type: {airline.aircraft_icao ? airline.aircraft_icao
                        :
                        "no aircraft"}</p>
                        <p>Status: {airline.status ? airline.status
                        :
                        "no status"}</p>
                        
                        <p>Depature: {airline.dep_icao ? airline.dep_icao
                        :
                        "not departed"}</p>
                         <p>Arrival: {airline.arr_icao ? airline.arr_icao
                        :
                        ""}</p>

                        <p>latitude: {airline.lat ? airline.lat
                        :
                        "no num"}</p>
                        <p>longitude: {airline.lng ? airline.lng
                        :
                        "no num"}</p>
                        <p>Speed: {airline.speed ? airline.speed
                        :
                        "no status"}</p>
                        <p>Flag of Airline: {airline.flag ? airline.flag
                        :
                        "no flag"}</p> */}

                    </div>
                    </Link>
                </ul>
                               
                )

            }

      

    </div>


);

}