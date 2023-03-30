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
  const [travelData, setTravelData] = useState({});


  const loadData = () => {
    const place = 'PRG';
    
    const options = {
      method: 'GET',
      url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions',
      params: {
        currency: 'EUR', 
        origin: place
      },
      headers: {
        'X-Access-Token': 'c2cd424dc4f26d67f7c72240f58ad7b6',
        'X-RapidAPI-Key': '1769a21b21mshea09cbdde04f8cdp1db0dejsn75791fddfb99',
        'X-RapidAPI-Host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
  
      setTravelData(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  
  }
  

  const getUserInformation = async () => {

    // CAROUSEL PART STARTS







    // CAROUSEL PART ENDS





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
        loadData();
    }, [])

    return (

      <>
      <UserContext.Provider value={ { getUserInformation,depIata,setDepIata,arrIata,setArrIata,arrIcao,setArrIcao,depIcao,setDepIcao,arrName,setArrName,depName,setDepName,lat,setLat,lng,setLng,flight,setFlight,weatherDepLat,weatherDepLng, travelData} }>
        <BrowserRouter>

          < Navigation user={user} />
          < Main />
          < Footer />
          

        </BrowserRouter>
      </UserContext.Provider>
      </>
  )
}

export default App
