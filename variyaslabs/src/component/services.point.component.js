import React from 'react'

const ServicesPoint = (props) =>{
  return(
    <>
   {props.data.map (item =>{
     console.log("item", item)
     return(
      <div className="col-sm-6 col-md-6"> 
      <div className="serviceBox">
        <div className="serviceContent">
          <h4>{item.heading}</h4>
          <p>{item.content} </p>
        </div>
        <div className="serviceIcon">{item.icon}</div>
      </div>
      </div>
     )
   })}
    
       
    </>
  )
}

export default ServicesPoint;