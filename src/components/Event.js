
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Event = ({ eventData }) => {
  // Handle case where eventData is undefined or null
  if (!eventData) return null;

  const fileId = eventData.imgUrl.split('/d/')[1].split('/view')[0];
  const imgUrl = `https://drive.google.com/thumbnail?id=${fileId}`;
  //onst imgUrl = `https://drive.google.com/thumbnail?id=${fileId}`;

  
  const truncateDistance = (distance) => Math.round(distance * 100) / 100;

  return (
    <div className="event">
          

      <div className="sub-event" style = {{backgroundImage : `url(${imgUrl})`}}>
        <div id="date1">
          <p>{new Date(eventData.date).toDateString()}</p>
        </div>
      </div>
      <div className="text">
        <p>{eventData.eventName}</p>
      </div>
      <div className="item">
        <span>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {eventData.cityName}
        </span>
        <div id="weather">
          <p id="type">{eventData.weather} | </p>
          <p id="temp">{truncateDistance(eventData.distanceKm)} km</p>
        </div>
      
      </div>
    </div>
  );
};

export default Event;
