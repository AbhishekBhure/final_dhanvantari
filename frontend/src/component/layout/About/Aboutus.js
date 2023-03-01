import React from "react";
import "./Aboutus.css";
import logo from "../../../images/dhanvantari2.png"

const Aboutus = () => {
  return (
    <div className="About-content">
      <br />
      <h1 align="center">About Us </h1>
      <br />
      <div className="about_logo" align="center">
        <img src={logo} alt="logo" srcset="" />
      </div>
      <div className="content-1">
        <strong>From over 5000 years, the realm of Ayurveda is still alive in our lives. To have a wonderful experience of ayurveda, one must have a deep touch in it’s entirety.The ancient scripture are reprising with science and nature to create the endorsement of best quality healthcare products.</strong>
        <br /><br />
        We, <strong>Dhanvantari Ayurvedic Center Estd in the year 1996</strong>  that deals with healthcare and mankind products.
        Based in Gadag, Karnataka, India, we are known and trusted for our
        premium quality products. However vast our range of products may be, it
        is unified by being pure, natural, health-friendly and easy-to-use for
        the everyday convenience of the modern urban life.<br /><br />
        We also sale top 120 ayurvedic company products like Alva's, Baidyanath, Dabur, etc. <br /><br />
        <strong>Let’s have a walk in our wellness journey.... Just You & Us..</strong>

      </div>
      <div className="content-2"></div>
      <div className="content-3"></div>
    </div>
  );
};

export default Aboutus;
