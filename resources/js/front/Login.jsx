import React, { useState, useEffect, useContext } from 'react';
import UserContext from './UserContext';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router';
import axios from 'axios';


export default function Login(props) {

    const navigate = useNavigate();

    const { getUserInformation } = useContext(UserContext);

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const formHandleSubmit = async (event) => {

        event.preventDefault()

        // const response = await fetch('/login', {
        //     method: 'POST',
        //     body: JSON.stringify(values),
        //     headers: {
        //         'Content-type': 'application/json',
        //         'Accept': 'application/json',
        //         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        //     }
        // });

        // const response_data = await response.json();

         try {
            // make the AJAX request
            const response = await axios.post('/login', values);
            // get the (already JSON-parsed) response data
            const response_data = response.data;
        } catch (error) {
            // if the response code is not 2xx (success)
            switch (error.response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', error.response.data.errors);
                    break;
                case 500:
                    console.log('UNKNOWN ERROR', error.response.data);
                    break;
            }
        }

        getUserInformation();

        navigate('/')
        
    }

   const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    return (
     <div className="form-container" >

        <h2>Login</h2>

         <form action="/login" onSubmit={ formHandleSubmit } className="log-form" method="post">


            <label className="label" htmlFor="email">Email</label>
            <input 
                className="reg-form__input"
                type="email" 
                id="email" 
                name="email" 
                value={ values.email } 
                onChange={ handleChange }
            />

            <label className="label" htmlFor="password">Password</label>
            <input 
                className="reg-form__input"
                type="password" 
                id="password" 
                name="password" 
                value={ values.password } 
                onChange={ handleChange }
            />

            <button className="button" >Log In</button>

       <Link to="/register"> <button className="button switch">Don't have an accout? Register here </button></Link>
        </form>

        {/* {
            user === false ?
            
            
            
            < Navigate to="/homepage" /> : < Navigate to="register" />

        } */}
        

    </div>
  )
}
