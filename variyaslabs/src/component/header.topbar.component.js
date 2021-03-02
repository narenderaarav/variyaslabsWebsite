import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


const HeaderTopbar = () =>{
  return(
    <div className="headerTopbar">
      <div className="container">
        <div className="topbar">
        <div className="emailAddress">info@variyaslabs.com</div>
        <div className="socialBox">
          <div className="connect">Connect with us</div>
          <div className="socialIcon">
          <Router>
          <ul>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faFacebookF} /></Link>
            </li>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
            </li>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
            </li>
            
          </ul>
          </Router>
          </div>
        </div> 
      </div>
      </div>
    </div>
  )
}

export default HeaderTopbar;


{/* 
        <div className="socialIcon">
          <ul>
            <li>
            <FontAwesomeIcon icon={faCoffee} />

            </li>
          </ul>
        </div> */}