import React from 'react'
import { useLocation } from 'react-router-dom'
import ServiceCommonLayout from '../layout/service.common.layout'
const data = {
  banner:{
    heading:"Web Develoment"
    
  },
  content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  contentImage:"/images/webDevelopment.png",
  servicesPoint:[
    {
      heading:"E-commerce Solutions",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    },
    {
      heading:"E-commerce Solutions",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    },

    {
      heading:"E-commerce Solutions",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    },


    {
      heading:"E-commerce Solutions",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    }
  ]
}
const dataMobile = {
  banner:{
    heading:"Mobile App Develoment"
    
  },
  content:"Mobile App Develoment It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  contentImage:"/images/webDevelopment.png",
  servicesPoint:[
    {
      heading:"Mobile App Develoment 1",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    },
    {
      heading:"Mobile App Develoment 2",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    },

    {
      heading:"Mobile App Develoment 2",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    },


    {
      heading:"Mobile App Develoment 3",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    }
  ]
}

const dataDevops = {
  banner:{
    heading:"Devops"
    
  },
  content:"Devops Devops It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  contentImage:"/images/webDevelopment.png",
  servicesPoint:[
    {
      heading:"Devops Point 1",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    },
    {
      heading:"Devops Point 2",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    },

    {
      heading:"Devops Point 3",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    },


    {
      heading:"Devops Point 4",
      content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      icon:"/images/webDevelopment.png"
    }
  ]
}
const Services = () =>{
  const location = useLocation()
  console.log("testing---", location)
  if (location.pathname == "/devops"){
    return <ServiceCommonLayout
    {...dataDevops}
    />
  }else if (location.pathname == "/mobile-app-development"){
    return <ServiceCommonLayout
    {...dataMobile}
    />
  }
  return(
    <>
    
   <ServiceCommonLayout
    {...data}
    
   />
    </>
  )
}

export default Services;



// https://stackoverflow.com/questions/3922739/limit-text-length-to-n-lines-using-css