import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Registration from './Registration'
import Login from './Login'
import Main from './Main'
import Navigation from './Navigation'
import AboutUs from './AboutUs'
import Footer from "./Footer";
import UserContext from './UserContext';
import Carousel from './Carousel'
import SearchResults from './SearchResults'
import FlightFinder from './FlightFinder'
import axios from 'axios';
import './App.css'

import NearbyCities from "./NearbyCities";



function App() {


  const [user, setUser] = useState(null);
  const [arrIata, setArrIata] = useState('');
  const [depIata, setDepIata] = useState('');
  const [arrIcao, setArrIcao] = useState('');
  const [depIcao, setDepIcao] = useState('');
  const [arrName, setArrName] = useState('');
  const [depName, setDepName] = useState('');
  const [lat,setLat] = useState(null);
  const [lng,setLng] = useState(null);
  const [flight,setFlight] = useState({});
  const[ weatherDepLat, setWeatherDepLat] = useState();
  const[ weatherDepLng, setWeatherDepLng] = useState();


  const getUserInformation = async () => {

     try {
            // make the AJAX request
            const response = await axios.get('/api/user/check');
            // get the (already JSON-parsed) response data
            const data = response.data;
            if (data) {
              setUser(data);
            } else {
              setUser(false);
            }
        } catch (error) {
            setUser(false);
        }
}
const aita = async()=>{
  const respond = await axios.get(`https://airlabs.co/api/v9/airports?iata_code=${props.depIata}&api_key=703a0329-5efa-4ed6-b128-02772bb1eb2f`);
  // const next = await respond.json();
  setWeatherDepLat(respond.data.response[0].lat.toFixed(2));
  setWeatherDepLng(respond.data.response[0].lng.toFixed(2));
  
}

 useEffect(() => {
        getUserInformation();
    }, [])

    return (

      <>
      <UserContext.Provider value={ { getUserInformation,depIata,setDepIata,arrIata,setArrIata,arrIcao,setArrIcao,depIcao,setDepIcao,arrName,setArrName,depName,setDepName,lat,setLat,lng,setLng,flight,setFlight,weatherDepLat,weatherDepLng} }>
        <BrowserRouter>

          < Navigation user={user} />
          < Main />
          {/* carousel should be displayed via routes on "/" */}
          < Footer />
          

        </BrowserRouter>
      </UserContext.Provider>
      </>
  )
}

export default App
