import React, { Fragment } from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Fragment>
      <footer id="footer">
        {/* <div className="leftFooter">
          <h4>Have Queries or Concern?</h4>
          <a href="/contact">

            <button className="contact-btn">Contact Us</button>
          </a> */}

        {/* <p>Download App for Android and IOS mobile phone</p>   */}
        {/* <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" /> */}
        {/* </div> */}

        <div className="midFooter">
          <h1>DHANVANTARI.</h1>
          <p>High Quality is our first priority</p>

          <p>Copyrights 2021 &copy; Dhanvantari</p>
        </div>

        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="http://instagram.com/dhanvantari_gadag">
            Instagram
            <InstagramIcon style={{ paddingLeft: "7px" }} />
          </a>
          {/* <a href="http://youtube.com/6packprogramemr">Youtube</a> */}
          <a href="/">
            Facebook
            <FacebookIcon style={{ paddingLeft: "7px" }} />
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
