import React from 'react';
import "../index.css";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHeart, faUser, faList } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

library.add(faSearch, faHeart, faUser, faList, farHeart);

const Navbar = () => {
  return (
    <div className="first">

      
      <h3 className="title">BookUsNow</h3>
      <div className="mobile">
      <span className='location'> 
      <FontAwesomeIcon icon={faMapMarkerAlt} style={{marginTop :'45px',marginLeft :'20px' }}/><p>Mumbai,India</p></span>
      <FontAwesomeIcon icon={faSearch} id="searchIcon" style={{marginTop :"-18px" ,  marginRight:"70px"} }/>
      <FontAwesomeIcon icon={faHeart} style={{marginLeft :'170px', marginTop:"23px" ,color:"#989090"}} />
      <FontAwesomeIcon icon={faUser} style={{ marginLeft: '15px' ,marginTop :"23px" , color :"#989090"
      
      }} />
       
       
      </div>
      

      <div className='category'>
            <FontAwesomeIcon icon={faList}  className='falist'/> Categories
        </div>
     
      <div id="search">
        <input type="text" placeholder="Search" id="searchInput" />
        <FontAwesomeIcon icon={faSearch} id="searchIcon" />
      </div>

      <div className="favo">
            <h6 id="fav">
                <FontAwesomeIcon icon={faHeart} style={{marginRight :'5px'}} />
                Favorites
            </h6>
      </div>

      <h6 id="sign">Sign in</h6>
    </div>
  );
};

export default Navbar;
