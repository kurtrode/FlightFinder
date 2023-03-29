import FlightMap from "./FlightMap"


export default function LocationContainer(){
    async function database(){
        const response = await fetch('/database');
        console.log(response);
    }
    database();
    
return(<><div><FlightMap/></div>
    <div></div></>)
}