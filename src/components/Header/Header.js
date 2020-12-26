import React, { useContext, useState } from "react";
import "./Header.css";
import { UserContext } from "../../Context/userContext";
import UserAvatar from "../UserAvatar/UserAvatar";
import MyHealth from "../MyHealth/MyHealth";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  const [user] = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__menuIcon" onClick={changeMenuOpen}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <Link to="/home">
          <div className="header__logoContainer">
            <img src={"/images/a.svg"} alt="AHC Logo" />
            {"\u00A0"}
            <img src={"/images/h.svg"} alt="AHC Logo" />
            {"\u00A0"}
            <img src={"/images/c.svg"} alt="AHC Logo" />
          </div>
        </Link>
        <div className="header__nav">
          <ul className="header__navList">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <MyHealth />
            </li>
            <li>
              <Link to="/nearbyHospitals">Nearby Hospitals</Link>
            </li>
            <li>
              <Link to="/bloodDonation">Blood Donation</Link>
            </li>
            <li>
              <Link to="/yogaAasans">Yoga Aasans</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* {menuOpen ? ( */}
      <div
        className={`header__sideNav ${menuOpen ? "header__sideNavActive" : ""}`}
      >
        <ul className="header__sideNavList">
          <Link to="/home">
            <li>Home</li>
          </Link>

          <Link to="smartBMI">
            <li>Smart BMI</li>
          </Link>

          <Link to="/diseaseDetection">
            <li>Disease detection</li>
          </Link>

          <Link to="/myEmotion">
            <li>Know your emotion</li>
          </Link>

          <Link to="/nearbyHospitals">
            <li>Nearby Hospitals</li>
          </Link>

          <Link to="/bloodDonation">
            <li>Blood Donation</li>
          </Link>

          <Link to="/yogaAasans">
            <li>Yoga Aasans</li>
          </Link>

          <Link to="/covid-19">
            <li>Covid 19</li>
          </Link>
        </ul>
      </div>
      {/* ) : (
        ""
      )} */}

      <div className="header__right">
        <div className="header__user">
          <div className="header__userDetails">
            Hello <br />
            <span className="header__userName">
              {user ? user.name : "Guest"}
            </span>
          </div>
          <div className="header__userAvatar">
            <UserAvatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
