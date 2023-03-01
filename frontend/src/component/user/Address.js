import React, { useState } from "react";
import "./address.css";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import TransferWithinAStationOutlinedIcon from "@mui/icons-material/TransferWithinAStationOutlined";
import { Country, State } from "country-state-city";
import { useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const Address = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const addressSubmit = (e) => {
    e.preventDefault();
    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number Should Be 10 Digit Long");
      return;
    }
    dispatch(
      saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );
    navigate("/account");
  };

  console.log(addressSubmit);

  return (
    <div className="shippingContainer">
      <div className="shippingBox">
        <h2 className="shippingHeading">Address Details</h2>
        <form
          action=""
          className="shippingForm"
          encType="multipart/form-data"
          onSubmit={addressSubmit}
        >
          <div>
            <HomeOutlinedIcon />
            <input
              type="text"
              placeholder="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div>
            <LocationCityOutlinedIcon />
            <input
              type="text"
              placeholder="City"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <PinDropOutlinedIcon />
            <input
              type="number"
              placeholder="pincode"
              required
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
          </div>
          <div>
            <PhoneOutlinedIcon />
            <input
              type="number"
              placeholder="number"
              required
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              size="10"
            />
          </div>
          <div>
            <PublicOutlinedIcon />
            <select
              name=""
              id=""
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option value={item.isoCode} key={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          {country && (
            <div>
              <TransferWithinAStationOutlinedIcon />
              <select
                name=""
                id=""
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((item) => (
                    <option value={item.isoCode} key={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          )}
          <input
            type="submit"
            value="Save"
            className="shippingBtn"
            disabled={state ? false : true}
          />
        </form>
      </div>
    </div>
  );
};

export default Address;
