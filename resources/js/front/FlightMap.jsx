import './flightmap.css'

export default function FlightMap(){
    return(
        <div className="flightmap"><iframe src="http://www.flightradar24.com/simple_index.php?lat=50.10&lon=14.26" className="flightmap_map"></iframe></div> 
    )
}