import React from 'react';
import "../index.css";
import Navbar from './Navbar';
import OnGoingEvents from './onGoingEvents'; // Corrected case
import  {UpcomingEvents} from './UpcomingEvents'; // Corrected case



const Code = () => {
  return (
    <div>
      <Navbar />
      <OnGoingEvents />
      <UpcomingEvents />
      
      
    </div>
  );
};

export default Code;
