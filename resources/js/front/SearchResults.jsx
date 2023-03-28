import React from 'react'

export default function SearchResults(props) {

const receivedData = props.data;
console.log(receivedData)

  return (
    <div>

        <div className="top">

            <div className="location"></div>
            <p> {receivedData.name} </p>
            <div className="temperature"></div>
            { receivedData.main ? <p> {receivedData.main.temp} K </p> : null }
            <div className="description"></div>
             {receivedData.weather? <p> {receivedData.weather[0].main}</p> : null}
            
        </div>

    </div>
  )
}
