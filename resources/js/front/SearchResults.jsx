import React, { useContext } from 'react'
import UserContext from './UserContext';

export default function SearchResults() {
  const {arrIata,depIata,arrIcao,depIcao,arrName,depName} = useContext(UserContext);
  console.log(arrIata)

// const receivedData = props.data;
// console.log(receivedData)

  return (
    <div>
      <h3>Flight arriving from {arrName} IATA Code: {arrIata} ICAO Code: {arrIcao}</h3>
      <h3>Flight departing from {depName} IATA Code: {depIata} ICAO Code: {depIcao}</h3>


        {/* <div className="top">

            <div className="location"></div>
            <p> {receivedData.name} </p>
            <div className="temperature"></div>
            { receivedData.main ? <p> {receivedData.main.temp} K </p> : null }
            <div className="description"></div>
             {receivedData.weather? <p> {receivedData.weather[0].main}</p> : null}
            
        </div> */}

    </div>
  )
}
