import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useAlert } from "react-alert";
import logo from "../../../images/dhanvantari.png"


const Header = () => {
  const alert = useAlert();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    }
    else {
      navigate(`/products`);
      alert.error("No Products Found")
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="DHANVANTARI" className="logo" />
          </Link>
          <button
            className="navbar-toggler d-flex d-lg-none flex-column justify-content-around collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 mr-auto ml-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form action="" className="d-flex " onSubmit={searchSubmitHandler}>
              <input
                className="form-control"
                type="text"
                placeholder="Search for products..."
                onChange={(e) => setKeyword(e.target.value)}
              />
              {/* <input type="submit" value="search" /> */}
              <button className="btn" type="">
                <SearchIcon sx={{ color: "white" }} />
              </button>

            </form>
            <div className="nav-icon">

              <Link to="/cart">
                <LocalMallOutlinedIcon style={{ color: "white" }} />
              </Link>
              <Link className="accountCircleIcon" to="/login">
                <AccountCircleIcon style={{ color: "white", margin: "15" }} />
              </Link>

            </div>
          </div>
        </div>

      </nav>


      {/* <div className="wrapper">
        <input spellCheck="false" type="text" />
        <div className="label">First Name</div>
        <span>
          <LinkccountCircleIcon sx={{ color: "black" }} />
        </span>
      </div> */}
    </>
  );
};

export default Header;
