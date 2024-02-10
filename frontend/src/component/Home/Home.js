import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import "./Home.css";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import ProductCard from "./ProductCard.js";
import carousel1 from "../../images/slide1.jpg";
import carousel2 from "../../images/slide-2.jpg";
import carousel3 from "../../images/slide-3.jpg";
import carousel4 from "../../images/slide-4.jpg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//For Temporary Product view
// const product = {
//   name: "blue t-shirt",
//   images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//   price: "₹2000",
//   _id: "don",
// };

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="DHANVANTARI" />
          {/* <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>Find Products Below</h1>
            <a href="#container">
              <button>Scroll </button>
            </a>
          </div> */}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={carousel1}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={carousel2}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={carousel3}
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={carousel4}
                  alt="Fourth slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
              <ChevronLeftIcon
                sx={{ fontSize: 50 }}
                style={{ color: "black" }}
              />
              {/* <span className="sr-only">Previous</span> */}
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
              <ChevronRightIcon
                sx={{ fontSize: 50 }}
                style={{ color: "black" }}
              />
              {/* <span className="sr-only">Next</span> */}
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
