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

            <div className="location"></div>
            <p> {receivedData.name} </p>
            <div className="temperature"></div>
            { receivedData.main ? <p> {temp.toFixed(2)} &#8451;</p> : null }
            <div className="description"></div>
             {receivedData.weather? <p> {receivedData.weather[0].main}</p> : null}
            
        </div>

    </div>
  )
}
