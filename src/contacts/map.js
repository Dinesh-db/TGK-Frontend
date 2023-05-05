
import "./map.css"

import mapimg from "../assests/mapimg.png"
function Map(){
    return(
        <>
        <div className="map1">
            <a href="https://www.google.com/maps/place/TGK+ENTERPRISES/@11.7573146,78.050279,15.94z/data=!4m6!3m5!1s0x3babf90ffbfe98a9:0xdcb174a774b5503a!8m2!3d11.7572853!4d78.0505089!16s%2Fg%2F11sk6gsvyv?hl=en" target="_blank"  rel="noreferrer">
                <img className="mapimg" src={mapimg} alt="Location"></img>
            </a>
        </div>
        </>
    );
}

export default Map;