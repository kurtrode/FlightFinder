import React from 'react'
import { useState, useContext } from "react";
import UserContext from './UserContext';

export default function Flights() {

const {travelData }= useContext(UserContext);

  return (

 <div> 
        {
          travelData && travelData.data
          ?
              
          Object.keys(travelData.data).map((key) => {
            // console.log(travelData.data[key].airline)
            return (
                  <div className="flight-routes">
                    <p>Destination: {travelData.data[key].destination}</p>
                    <p>Flight Number: {travelData.data[key].flight_number}</p>
                    <p>Departure at: {travelData.data[key].departure_at} </p>
                    <p>Return at: {travelData.data[key].return_at}</p>
                    <p>Return at: {travelData.data[key].return_at}</p>
                  </div>  )
            // return <p>{key}</p>
          })
          :
          <> anything</>
        }
        {/* {  travelData.data? <p>{travelData.data.AAL.airline} </p> :null}  */}
        
  </div> 
  )
}
