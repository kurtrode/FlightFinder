// import './flightmap.css'
// import { useGeolocated } from 'react-geolocated'
// import Geolocation from 'react-native-geolocation-service'
// 

import { useState } from "react"
import UserContext from "./UserContext"

// import { useEffect, useState } from "react";


export default function FlightMap(){
    const {lat,lng} = useState(UserContext);
    const url = `http://www.flightradar24.com/simple_index.php?lat=${lat}&lon=${lng}`
//     const [lat, setLat] = useState(null);
// const [lng, setLng] = useState(null);
// const [status, setStatus] = useState(null);
// const getLocation = () => {
//     if (!navigator.geolocation) {
//       setStatus('Geolocation is not supported by your browser');
//     } else {
//       setStatus('Locating...');
//       navigator.geolocation.getCurrentPosition((position) => {
//         setStatus(null);
//         setLat(position.coords.latitude);
//         setLng(position.coords.longitude);
//       }, () => {
//         setStatus('Unable to retrieve your location');
//       });
//     }
//   }
//   useEffect(()=>{
//     getLocation();
//     console.log(lng);
//     console.log(status);
//   },[]);
    // Geolocation.getCurrentPosition(
    //         position => {
    //           console.log(position);
    //           setLocation(position);
    //         });
    // const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    //     useGeolocated({
    //         positionOptions: {
    //             enableHighAccuracy: false,
    //         },
    //         userDecisionTimeout: 5000,
    //     });
    //     console.log(coords.latitude);
    return(
        
        <div className="flightmap"><iframe src={url} className="flightmap_map" width={400} height={300}></iframe></div> 
    
    )
}