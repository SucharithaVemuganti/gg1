
import React, { useState, useEffect } from 'react';
import Event1 from './Event1';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import "../index.css";

const OnGoingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco');
        setEvents(response.data.events.slice(0, 8)); // Slice to get only the first 8 events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <div className="second">
        <div className="loc">
       
                    
          <span className='location'> <FontAwesomeIcon icon={faMapMarkerAlt} />Mumbai,India</span>
          <h6 id="one1">Live Shows</h6>
          <h6 id="one">Liveshows</h6>
          <h6 id="one">Streams</h6>
          <h6 id="one">Movies</h6>
          <h6 id="one">Plays</h6>
          <h6 id="one">Events</h6>
          <h6 id="one">Sports</h6>
          <h6 id="one">Activities</h6>
        </div>
      </div>

      <div className="i1">
        <div className="text-overlay">
          <h3>Discover Exciting Events Happening</h3>
          <h3 id="nextline">Near You - Stay Tuned for Updates</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus nostrum impedit repudiandae
            minima quibusdam aut atque rem incidunt accusantium tempore laboriosam sint</p>
        </div>
        <div className="see">
          <h5>Recommended shows</h5>
          <h5 id="see">See All</h5>
        </div>
      </div>


      <div className="events">
        {events.map((event, index) => (
          <Event1 key={index} eventData={event} />
        ))}
      </div>
    </div>
  );
}

export default OnGoingEvents;
