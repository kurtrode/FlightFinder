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
import axios from 'axios';
import './App.css'

import NearbyCities from "./NearbyCities";



function App() {


  const [user, setUser] = useState(null);


  const getUserInformation = async () => {

     try {
            // make the AJAX request
            const response = await axios.get('/api/user');
            // get the (already JSON-parsed) response data
            const data = response.data;

            setUser(data);
        } catch (error) {
            setUser(false);
        }
}

 useEffect(() => {
        getUserInformation();
    }, [])

    return (

      <>
      <UserContext.Provider value={ { getUserInformation } }>
        <BrowserRouter>

          < Navigation user={user} />
          < Main />
          < Carousel />
          < Footer />
          

        </BrowserRouter>
      </UserContext.Provider>
      </>
  )
}

export default App
