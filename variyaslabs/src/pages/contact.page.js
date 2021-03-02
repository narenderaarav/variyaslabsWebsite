import React from 'react';
import FooterContact from '../component/footer.contact.component'
import GetTouch from '../component/get.in.touch.form.component'
const Contact = (props) =>{
  return(
    <>
    <div className="innerBanner">Contact</div>
    <div className="main">
      <div className="container">
        <div className="row">
         
          <div className="col-md-7 col-sm-7">
            <GetTouch/>
          </div>
          <div className="col-md-5 col-sm-5">
          <div className="heading">
              <h1>Office Address</h1>
            </div>
            <div className="address">
                <FooterContact/>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
export default Contact;