// import './flightmap.css'
// import { useGeolocated } from 'react-geolocated'
// import Geolocation from 'react-native-geolocation-service'
// 

// import { useEffect, useState } from "react";


export default function FlightMap(){
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
        
        <div className="flightmap"><iframe src="http://www.flightradar24.com/simple_index.php?lat=50.10&lon=14.26" className="flightmap_map" width={700} height={500}></iframe></div> 
    
    )
}