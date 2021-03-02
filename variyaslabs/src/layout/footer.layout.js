import React from "react";
import GetTouch from "../component/getTouch.component";
import FooterAbout from "../component/footer.about.component";
import FooterServices from "../component/footer.service.component";
import FooterContact from "../component/footer.contact.component";
import Copyright from "../component/footer.copyright.component";
const Footer = () => {
  return (
    <>
      <GetTouch />

      <div className="mainFooter">
        <div className="container">
          <div className="row">
            <FooterAbout />
            <FooterServices />
            <div className="col-md-4 col-sm-4">
              <div className="footerContact footerAbout">
                <h4>Contact us</h4>
                <FooterContact/>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </>
  );
};

export default Footer;
