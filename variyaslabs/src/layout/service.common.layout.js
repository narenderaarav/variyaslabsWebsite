import React from 'react'
import ServicesPoint from'../component/services.point.component'
const ServiceCommonLayout = (props) =>{
  console.log("services--->", props)
  return(
    <>
   
   <div className="innerBanner">{props.banner.heading}</div>
    <div className="container">
    <div className="main">
      <div className="row">
        <div className="col-md-8 col-sm-8">
          <p>
            {props.content}
          </p>
        </div>
        <div className="col-md-4 col-sm-4">
        <img src={process.env.PUBLIC_URL + props.contentImage} alt="web"/>
        </div>
      </div>
    </div>
    <div className="main">
      <div className="row">
        <ServicesPoint
        data ={props.servicesPoint}
        />
      </div>
      </div>
    </div>
      
    
    </>
  )
}

export default ServiceCommonLayout;