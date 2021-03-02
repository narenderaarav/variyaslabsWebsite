import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const FooterAbout = () =>{
  return(
    <div className="col-md-4 col-sm-4">
      <div className="footerAbout">
        <h4>About us</h4>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </p>
        
        <ul className="footerSocial">
          <li>
            <Link to="/"><FontAwesomeIcon icon={faFacebookF} /></Link>
          </li>
          <li>
            <Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link>
          </li>
          <li>
            <Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link>
          </li>
          <li>
            <Link to="/"><FontAwesomeIcon icon={faLinkedin} /></Link>
          </li>
        </ul>

      </div>
    </div>
  )
}

export default FooterAbout