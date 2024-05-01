import React, { useState, useEffect } from 'react';
import Event from './Event';

const UpcomingEvents = () => {
    // State to hold event data
    const [eventsData, setEventsData] = useState([]);

    // Effect to fetch data from the API
    useEffect(() => {
        // Fetch data from the API
        fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming')
            .then(response => response.json())
            .then(data => {
                // Set the fetched events data in state
                console.log('Fetched data:', data); // Log fetched data
                setEventsData(data.events);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures effect runs only once after initial render

    console.log('Events data:', eventsData); // Log eventsData just before rendering

    return (
        <div className="upcoming1">
            <div id="upcoming_event_heading">
                <p>Upcoming events</p>
                <p id="see-all">see all</p>
            </div>
            <div className="upcoming">
                {/* Render Event component for each event data */}
                {eventsData.map((event, index) => (
                    <Event key={index} eventData={event} />
                ))}
            </div>
        </div>
    );
}

export { UpcomingEvents };

/*import React from 'react'
import Event from './Event'

const UpcomingEvents = () => {
  return (

        
        <div class="upcoming1">

            <div id="upcoming_event_heading">
                <p>Upcoming events</p>
                <p id="see-all">see all</p>
            </div>
            <div class="upcoming">
                
               <Event />
               <Event />
               <Event />
               <Event />
               <Event />
               <Event />
               <Event />
               <Event />


            </div>
    </div>
  )
}

export { UpcomingEvents }; */