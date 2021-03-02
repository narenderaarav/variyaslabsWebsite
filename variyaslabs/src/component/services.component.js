import React from 'react'

const HomeServices = () =>{
  return(
    <div className="main">
      <div className="serviceImage">
    <div className="container">
      <div className="heading">
        <h1>Our Services</h1>
      </div>
      <div className="servicesBox">
      <div className="row">
        <div className="col-md-4 col-sm-4">
          <div className="serveBox">
            <div className="icon">
              <img src="../images/web.svg" alt="web"  width="60"/>
            </div>
            <div className="content">
              <h4>Web Development</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>          
        </div>

        <div className="col-md-4 col-sm-4">
          <div className="serveBox">
            <div className="icon">
            <img src="../images/mobile.png" alt="web"  width="60"/>
            </div>
            <div className="content">
              <h4>Mobile App Development</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>          
        </div>


        <div className="col-md-4 col-sm-4">
          <div className="serveBox">
            <div className="icon">
            <img src="../images/devops.png" alt="web"  width="60"/>
            </div>
            <div className="content">
              <h4>Devops</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
          </div>          
        </div>

        

        
        </div>
      </div>
      </div>
    </div>
    
    </div>
    
  )
}
export default HomeServices;