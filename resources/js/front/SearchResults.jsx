import React, { useContext } from 'react'

import UserContext from './UserContext';

export default function SearchResults(props) {
  const {arrIata,depIata,arrIcao,depIcao,arrName,depName,flight} = useContext(UserContext);
  console.log(arrIata)

const receivedData = props.data;
console.log(receivedData)
const temp = receivedData.main.temp - 273.15;

  return (
    <div>
     

        <div className="top">

            <h1 className="weather-header">The weather in {receivedData.name}:</h1>
{/* 
            <div className="location">Location:</div>
            <p> <strong>{receivedData.name} </strong></p> */}
            <div className="temperature">Temperature:</div>
            { receivedData.main ? <p> <strong> {temp.toFixed(2)}  &#8451; </strong></p> : null }
            <div className="description">Weather:</div>
             {receivedData.weather? <p> <strong> {receivedData.weather[0].main} </strong></p> : null}
            
        </div>

    </div>
  )
}
