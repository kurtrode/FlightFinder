import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css'
import Registration from './Registration'
import Login from './Login'
import Main from './Main'
import Navigation from './Navigation'
import AboutUs from './AboutUs'
import Footer from "./Footer";
import UserContext from './UserContext';
import Homepage from "./Homepage";
import WeatherAtt from "./WeatherAtt";
import axios from 'axios';
import NearbyCities from "./NearbyCities";


function App() {

  // const [currentForm, setCurrentForm] = useState('login');
  const [user, setUser] = useState(false);


  const formSwitch = (formName) => {
    setCurrentForm(formName)
  }

  const getUserInformation = async () => {
    const response = await axios.get('/api/user');
    
    if (response.status === 200) {
      //user is logged-in
      const data = await response.data;
      setUser(data);
    } else {
      // user is not logged-in
      setUser(false);
  }
}

// {
//   currentForm === 'login' ? <Login formSwitch={formSwitch}/> : <Registration formSwitch={formSwitch} />
// }

 useEffect(() => {
        getUserInformation();
    }, [])

    return (
      <UserContext.Provider value={ { user, setUser, getUserInformation} }>
        <BrowserRouter>

          < WeatherAtt />

          < Navigation user={user}/>

          < Homepage />
          

          < Main user={user} />

          <div className='footer_cont'>
          < Footer user={user} />
          </div>

        </BrowserRouter>
      </UserContext.Provider>
        
  )
}

export default App
