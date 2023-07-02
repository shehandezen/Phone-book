import React from "react";
import { Link } from "react-router-dom";

//css
import "./Home.css";

//icons
import { AtSign } from "react-feather";

//image
import HeroImage from "../../assets/hero-image.svg";

const Home = () => {
  return (
    <div className="Home">
      <div className="heading-container">
        <div className="heading">
          <div className="Title">Contact Keep</div>
          <div className="tagline">Access your contacts in anywere.</div>
          <Link to="/" className="link">
            <button className="get-start-btn">
              <AtSign className="sign-icon" />
              Get start with google
            </button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} />
      </div>
    </div>
  );
};

export default Home;
