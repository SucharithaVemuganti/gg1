

import React from 'react';
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Event1 = ({ eventData }) => {
  const { eventName, cityName, date, weather, distanceKm } = eventData;

  const truncatedDistanceKm = Math.round(distanceKm * 100) / 100;


  return (
    <div className="event1">
      <div className="details">
        <div className="left-content">
          <p id="text1">{eventName}</p>
          <p id="loc">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>{cityName}</span>
          </p>
        </div>
        <div className="right-content">
          <p id="date">{new Date(date).toDateString()}</p>
          <div className="weather_details">
            <p id="weat">{weather} |</p>
            <p id="dist">{truncatedDistanceKm}km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event1;


/*import React from 'react'
import "./index.css";

const Event1 = () => {
  return (
    <div>
         <div class="event1">




         <div class="details">
    <div class="left-content">
      

        <p id="text1">Make Agree</p>
        <p id="loc">Make Agree</p>
       
    </div>
    <div class="right-content">
        <p id="date">March 23, 2024</p>
        <div class="weather_details">
            <p id="weat">Snowy, 26°C |</p>
            <p id="dist">42km</p>
        </div>
    </div>
</div>


</div>



</div>

  )
}

export default Event1 */