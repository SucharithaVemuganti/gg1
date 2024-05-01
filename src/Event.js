import React from 'react';
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const Event = ({ eventData }) => {
    const { date, eventName, cityName, weather, distanceKm, imgUrl } = eventData;

    // Truncate distanceKm to two decimal points
    //const truncatedDistanceKm = parseFloat(distanceKm).toFixed(2);
    
    const truncatedDistanceKm = Math.round(distanceKm * 100) / 100;

    return (
        <div className="event">
            <div className="sub-event" style={{ backgroundImage: `url(https://drive.google.com/uc?export=download&id=${imgUrl.split('/').pop()})` }}>
                <div id="date1">
                    <p>{new Date(date).toDateString()}</p>
                </div>
            </div>   

            <div className="text">
                <p>{eventName}</p>
            </div>
            <div className="item">
                
                    <span><FontAwesomeIcon icon={faMapMarkerAlt} />{cityName}</span>
                <div id="weather">
                    <p id="type">{weather} | </p>
                    {/* Ensure to use the truncated value */}
                    <p id="temp">{truncatedDistanceKm}km</p>
                </div>
            </div>
        </div>
    );
}

export default Event;



/*import React from 'react'
import "./index.css";

const Event = () => {
  return (
    <div class="event">
    <div class="sub-event">
        <div id="date1">
            <p>March 23,2024</p>
        </div>
    </div>

    <div class="text">
        <p>After note early</p>
    </div>
    <div class="item">
        <h6><i class="fas fa-location-dot"></i> Mumbai, India</h6>
        <div id="weather">
            <p id="type">Snowy | </p>
            <p id="temp"> 26.43km</p>
        </div>

    </div>
</div>
  )
}

export default Event*/