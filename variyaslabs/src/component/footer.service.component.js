import React from 'react'
import { Link } from "react-router-dom";
const FooterServices = () =>{
  return(
    <div className="col-md-4 col-sm-4">
      <div className="footerAbout">
        <h4>Services</h4>
       <ul>
         <li><Link to="/">Web Development</Link></li>
         <li><Link to="/">Mobile Aplication Development</Link></li>
         {/* <li><Link to="/">E-commerce Development</Link></li>
         <li><Link to="/">UI/UX Design</Link></li> */}
         <li><Link to="/">Devops</Link></li>
       </ul>
      </div>
    </div>
  )
}

export default FooterServices