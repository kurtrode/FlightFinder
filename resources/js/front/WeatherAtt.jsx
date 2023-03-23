import React from 'react'
import { useState } from "react";


export default function WeatherAtt() {

    const[ weatherData, setWeatherData] = useState({})
    const[city, setCity] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c97a46a679a747936540aa8b97b5ad40`


    const searchLocation = async(event) => {

        // event.preventDefault()
        
        if (event.key === 'Enter') {
            
            const response = await fetch(url)
            const locData = await response.json()
            setWeatherData(locData)
            
            setCity('')
        }
        
    }

    console.log(weatherData)



  return (

    <div className="main-container">

        <div className="search-container" >
            <input
                 type="text"
                 value={city}
                 onChange={event => setCity(event.target.value)}
                 onKeyPress={searchLocation} />
        </div>

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
