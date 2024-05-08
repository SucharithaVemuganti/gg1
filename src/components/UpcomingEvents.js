import React, { useState, useEffect } from 'react';
import Event from './Event';

const UpcomingEvents = () => {
    const [eventsData, setEventsData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // State to handle errors

    const fetchData = () => {
        setLoading(true);
        fetch(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then(data => {
                setEventsData(prevData => [...prevData, ...data.events]);
                setPage(page + 1);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data. Please try again later.'); // Set error state
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleScroll = () => {
        if (
            window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
            && !loading
        ) {
            fetchData();
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [loading]);

    return (
        <div className="upcoming1">
            <div id="upcoming_event_heading">
                <p>Upcoming events</p>
                <p id="see-all">see all</p>
            </div>
            <div className="upcoming">
                {/* Render Event component for each event data */}
                {eventsData.map(event => (
                    <Event key={event.eventName} eventData={event} /> // Use a unique identifier as key
                ))}
                {/* Render loading spinner or error message */}
                {loading && <div className="spinner"></div>}
                {error && <div className="error">{error}</div>}
            </div>
        </div>
    );
}

export { UpcomingEvents };
