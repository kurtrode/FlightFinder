import React, { useContext, useEffect } from 'react'
import { useState } from "react";
import axios from 'axios';
import UserContext from './UserContext';


export default function WeatherAttDep(props) {
    // const{depIata}= useState(UserContext);
    // const{weatherDepLat,weatherDepLng} = useContext(UserContext);

    const[ weatherData, setWeatherData] = useState({})
    const[city, setCity] = useState('')
   

    // const aita = async()=>{
    //     const respond = await axios.get(`https://airlabs.co/api/v9/airports?iata_code=${props.depIata}&api_key=703a0329-5efa-4ed6-b128-02772bb1eb2f`);
    //     // const next = await respond.json();
    //     setWeatherDepLat(respond.data.response[0].lat.toFixed(2));
    //     setWeatherDepLng(respond.data.response[0].lng.toFixed(2));
        
    // }
    // aita();

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${props.weatherDepLat}&lon=${props.weatherDepLng}&appid=c97a46a679a747936540aa8b97b5ad40`

console.log(url);
    const searchLocation = async(event) => {

        // event.preventDefault()
        
        
            
            const response = await fetch(url)
            const locData = await response.json()
            setWeatherData(weatherData)
            
          
        
        
    }
useEffect(()=>{
searchLocation();},[weatherDepLat]);
    console.log(weatherData)



  return (
    

    <div className="main-container">

{console.log(weatherData)}
        


        <div className="weather-container">

            <div className="top">

            <div className="location"></div>
            <p> {weatherData.name} </p>
            <div className="temperature"></div>
            { weatherData.main ? <p> {weatherData.main.temp} K </p> : null }
            <div className="description"></div>
             {weatherData.weather? <p> {weatherData.weather[0].main}</p> : null}
            
            </div>


            <div className="bottom"></div>
        </div>

    </div>

  )
}
