import { useEffect, useState } from "react";



export default function FlightFinder (){

       
    const [searchQuery, setSearchQuery] = useState("");
        const [airlines, setAirlines] = useState([]);
       
        const [inputValue, setInputValue] = useState("");

    async function fetchData() {
        
        const response = await fetch(`/api/fetch-flights/${searchQuery}`);    

        const data = await response.json();
        console.log(data);

        setAirlines(data);
        // console.log(airlines);

               
    }

    const handleChange = (e) => {
        setInputValue(e.target.value) 
        console.log(inputValue) 
    }
    
    useEffect(()=>{
        fetchData();
    }, [searchQuery])

 

return(
    <div className="Flight">
        <h1>Flight status</h1>
        <input type="text"  className="Search" onChange={handleChange}   />

        <button onClick={() => {setSearchQuery(inputValue),console.log(inputValue)}}>SearchBar</button>
       

            {   
                airlines.filter((airline) => {
                    return (airline.flag == searchQuery || airline.aircraft_icao == searchQuery || airline.departure_airport ? airline.departure_airport.icao_code == searchQuery : null)
                } ).filter((airline, index) => (index < 5)).map((airline, index)=>
                <ul
                    key= { index }
                    >
                    <div className="aircraft_details">

                        <p>Aircraft type: {airline.aircraft_icao ? airline.aircraft_icao
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
                        "no flag"}</p>

                    </div>
                </ul>
                               
                )

            }

      

    </div>


);

}