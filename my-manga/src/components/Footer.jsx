import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer=() => {
    return (
      <footer >
          <div className="logo">
              Manga<span >Harbor</span>
              <h6>Explore Manga Realms</h6>
          </div>
          <div className="about">
              <Link to="/about">About Us</Link>
          </div>
          <div className="social-media">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
                  
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
                  
              </a>
          </div>
          
      
      </footer>
      )

}
export default Footer;