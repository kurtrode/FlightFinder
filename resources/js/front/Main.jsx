import React from 'react'
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Registration from './Registration'
import Login from './Login'
import AboutUs from './AboutUs'
import Logout from './Logout'
import FlightFinder from './FlightFinder';
import NotFound from './NotFound';
// import ProtectedRoutes from './ProtectedRoutes'
import SearchResults from './SearchResults'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
import LocationContainer from './LocationContainer';
import Flights from "./Flights";


export default function Main({user}) {


  // HERE STARTS WEATHER API PART
  const[ weatherData, setWeatherData] = useState({})
    const[city, setCity] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c97a46a679a747936540aa8b97b5ad40`

    const handleSearch = () => {
      // if (event.key === 'Enter') {
        search();
      // }
    };

    const search = async() => {
      const response = await axios.get(url);
      // handleRedirect();
      setWeatherData(response.data);
    };

    const handleRedirect = () => {
      if(Object.keys(weatherData).length > 0) {
        console.log(weatherData)
        return <Navigate to={{ pathname: '/results', state: {data: weatherData} }} />;
        console.log( " JSEM REDIRECT ")
      } else {
        return console.log(" JSEM NEPOVEDENÝ REDIRECT ");
      }
    };
    
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    }
    // HERE ENDS WEATHER API PART

  return (
    <Routes>


        {/* visible to every user : */}
        
         <Route path="/" element={ <h3 className="home-flight-finder">Welcome to Flight Finder < FlightFinder /> </h3>} />
         <Route path="/maps" element={
           
            <div className="search-container" >
            <p>Check the weather in:</p>
            <input className="weather-input"
                 type="text"
                 value={city}
                 onChange={event => setCity(event.target.value)}
                 onKeyPress={handleKeyPress} />
          {Object.keys(weatherData).length > 0 ?  <Navigate to={{ pathname: '/results', state: {data: weatherData} }} /> : null }
            </div>
          } 
          />
 
        <Route path="/results" element={<SearchResults data={weatherData} />} />

        <Route path="/github" element={ <h1>Github</h1>} />
        <Route path="/linkedin" element={ <h1>LinkedIn </h1>} />
        <Route path="/flight" element={ <h1>Future flights from Prague: <Flights /> </h1>} />
        <Route path="/about-us" element={ <AboutUs/>} />
        <Route path="/destinations" element={ <h1>Destinations </h1>} />
        <Route path="/searchresults" element={<SearchResults/>}/>
        {/* <Route path="/flight" element={ <FlightFinder /> } /> */}
        <Route path="/container" element={<LocationContainer/>}/>
        <Route path="*" element={ <NotFound />} />


        {/* visible for not-logged users :  */}
        
        {/* <Route element={< ProtectedRoutes />} > */}
          <Route path="/register" element={ <Registration /> } />
          <Route path="/login" element={ <Login /> } />
        {/* </Route> */}
    

        {/* visible to logged users :  */}
        
        {/* <Route element={ <ProtectedRoutes />} > */}
          <Route path="/logout" element={ <Logout /> } />
        {/* </Route> */}
       
    </Routes>
  )
}
