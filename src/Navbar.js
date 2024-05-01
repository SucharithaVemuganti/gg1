import React from 'react';
import "./index.css";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faHeart, faUser, faList } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

library.add(faSearch, faHeart, faUser, faList, farHeart);

const Navbar = () => {
  return (
    <div className="first">

      
      <h3 className="title">BookUsNow</h3>
      <div className="mobile">
      <FontAwesomeIcon icon={faSearch} style={{ marginRight: '60px', backgroundColor: 'red' }}  id= "searchIcon"/>
        <i className="fas fa-search" id="searchIcon" style={{ marginRight: '60px' }}></i>
        <i className="far fa-heart" id="heart" style={{ marginLeft: '230px' }}></i>
        <i className="fas fa-user" id="user" style={{ marginLeft: '-80px', marginTop: '50px' }}></i>
      </div>
      

      <div className='category'>
            <FontAwesomeIcon icon={faList}  className='falist'/> Categories
        </div>
     
      <div id="search">
        <input type="text" placeholder="Search" id="searchInput" />
        <FontAwesomeIcon icon={faSearch} id="searchIcon"/>
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
