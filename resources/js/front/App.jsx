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

function App() {

  // const [currentForm, setCurrentForm] = useState('login');
  const [user, setUser] = useState(null);

  const formSwitch = (formName) => {
    setCurrentForm(formName)
  }

  const getUserInformation = async () => {
    const response = await fetch('/api/user');
    
    if (response.status === 200) {
      //user is logged-in
      const data = await response.json();
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
      <UserContext.Provider value={ { user, setUser, getUserInformation } }>
        <BrowserRouter>

          < Navigation user={user}/>

        < Homepage />

          < Main user={user} />
          < Footer user={user} />


        </BrowserRouter>
      </UserContext.Provider>
        
  )
}

export default App
