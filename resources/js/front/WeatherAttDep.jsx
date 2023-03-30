import React from 'react'
import { useState } from "react";
import axios from 'axios';
import UserContext from './UserContext';


export default function WeatherAttDep(props) {
    // const{depIata}= useState(UserContext);

    const[ weatherData, setWeatherData] = useState({})
    const[city, setCity] = useState('')
    const[ weatherDepLat, setWeatherDepLat] = useState()
    const[ weatherDepLng, setWeatherDepLng] = useState()

    const aita = async()=>{
        const respond = await axios.get(`https://airlabs.co/api/v9/airports?iata_code=${props.depIata}&api_key=703a0329-5efa-4ed6-b128-02772bb1eb2f`);
        // const next = await respond.json()
        setWeatherDepLat(respond.lat)
        setWeatherDepLng(respond.lng)
        console.log(respond.lat)
    }
    aita();

    const url = `https://api.openweathermap.org/data/2.5/weather?${weatherDepLat}=44.34&${weatherDepLng}=10.99&appid=c97a46a679a747936540aa8b97b5ad40`


    const searchLocation = async(event) => {

        // event.preventDefault()
        
        if (event.key === 'Enter') {
            
            const response = await fetch(url)
            const locData = await response.json()
            setWeatherData(locData)
            
          
        }
        
    }

    // console.log(weatherData)



  return (
    

    <div className="main-container">

{/* {console.log(weatherData)} */}
        


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
