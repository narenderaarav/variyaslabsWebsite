import React from 'react'

const GetTouch = () =>{
  return(
    <>
    <div className="heading">
      <h1>Get In Touch</h1>
    </div>
    <div className="getIn">
    
    <form>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label>Phone No</label>
    <input type="email" className="form-control" placeholder="Enter Phone"/>
  </div>
  <div className="form-group">
    <label>Messages</label>
    <textarea className="form-control" placeholder="Enter Messages"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</>
  )
}
export default GetTouch;