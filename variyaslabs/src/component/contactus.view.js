import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const ContactUsView = ({phone, address, email}) =>{
  return(
    <ul className="contactInfo">
    <li>
      <span>
        <Link to="/">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </Link>
      </span>
      <span>{address}</span>
    </li>
    <li>
      <span>
        <Link to="/">
          <FontAwesomeIcon icon={faPhoneAlt} />
        </Link>
      </span>
      <span>
        <Link to="tel:9873648658">{phone}</Link>
      </span>
    </li>
    <li>
      <span>
        <Link to="/">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </span>
      <span>
        <Link to="mailto:variyaslabls.com">{email}</Link>
      </span>
    </li>
  </ul>
  )
}

export default ContactUsView;