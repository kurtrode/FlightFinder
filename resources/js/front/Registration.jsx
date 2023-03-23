import { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from "./UserContext"

export default function Registration(props) {

    const { getUserInformation } = useContext(UserContext);

    // const [redirect, setRedirect] = useState(false)


    const [values, setValues] = useState({
        email: '',
        name: '',
        lastName: '',
        password: '',
        password_confirmation: ''
    })

    const formHandleSubmit = async (event) => {

        event.preventDefault();

        // make the AJAX request
        const response = await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        // parse the response as JSON
        const response_data = await response.json();

        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', response_data.errors);
                    break;
                default:
                    console.log('UNKNOWN ERROR', response_data);
                    break;
            }
        }

        getUserInformation();

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

        <h2>Register</h2>

        <form onSubmit={ formHandleSubmit } className="reg-form" method="post">

            <label className="label" htmlFor="name">First Name:</label>
            <input 
                className="reg-form__input" 
                type="text" 
                id="name" 
                name="name" 
                value={ values.name }
                onChange={ handleChange }
            />

            <label className="label" htmlFor="lastName">Last Name:</label>
            <input 
                className="reg-form__input" 
                type="text" 
                id="lastName" 
                name="lastName" 
                value={ values.lastName } 
                onChange={ handleChange }
            />

            <label className="label" htmlFor="email">Email:</label>
            <input 
                className="reg-form__input" 
                type="email" 
                id="email" 
                name="email" 
                value={values.email} 
                onChange={ handleChange }
            />

            <label className="label" htmlFor="password">Password:</label>
            <input 
                className="reg-form__input" 
                type="password" 
                id="password" 
                name="password" 
                value={values.password}
                onChange={ handleChange }
            />

            <input 
                className="reg-form__input" 
                type="password" 
                name="password_confirmation"
                placeholder="Confirm password"
                value={ values.password_confirmation } 
                onChange={ handleChange }
            />

            <button className="button" type="submit">Register </button>
        </form>

        <Link to="/login"> <button className="button switch">Have an account? Login here</button> </Link>


    </div>
  )
}
