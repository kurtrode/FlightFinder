import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
export default function NearbyCities(){
    const [emissions, setEmissions] = useState([]);
const encodedParams = new URLSearchParams();
const {arrIata,depIata} = useContext(UserContext);
encodedParams.append("iata_airport_from", depIata);
encodedParams.append("iata_airport_to", arrIata);
encodedParams.append("number_of_passengers", "1");
console.log(depIata);

const options = {
  method: 'POST',
  url: 'https://carbonsutra1.p.rapidapi.com/flight_estimate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    Authorization: 'Bearer fQ98oU704xFvsnXcQLVDbpeCJHPglG1DcxiMLKfpeNEMGumlbzVf1lCI6ZBx',
    'X-RapidAPI-Key': 'ff11e50708msh8107b98312c4760p171694jsn7e6cc0d3480f',
    'X-RapidAPI-Host': 'carbonsutra1.p.rapidapi.com'
  },
  data: encodedParams
};
async function fetchEmissions(){
    const response = await axios.request(options);
    
    // console.log(response.data.data);
    setEmissions(response.data.data);
    console.log(emissions);
}
useEffect(()=>{
    fetchEmissions();
},[arrIata,depIata])

return(
    <>
       <h3>{emissions.co2e_kg} kg of CO2 from {emissions.airport_from} to {emissions.airport_to}</h3>
        </>
)

// axios.request(options).then(function (response) {
// 	console.log(response.data.data.co2e_kg);
//     return(
//         <>
//         <h3>{response.data.data.co2e_kg} kg of CO2 from {response.data.data.airport_from} to {response.data.data.airport_to}</h3>
//         </>
//     )})
// }).catch(function (error) {
// 	console.error(error);
// });
}