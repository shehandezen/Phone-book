import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

//css
import "./Home.css";

//icons
import { AtSign } from "react-feather";

//image
import HeroImage from "../../assets/hero-image.svg";

const Home = () => {

  const navigate = useNavigate();

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };


  const getUser = async () => {
    if (localStorage.getItem("user")) {
      navigate("/contacts");
    }
  };
  useEffect(() => {
    getUser();
  });

  const navigateAuth = (url) => {
    window.location.href = url;
  };

  const auth = async () => {
    await axios
      .post(process.env.REACT_APP_AUTH_REQUEST)
      .then((response) => {
        console.log(response);
        navigateAuth(response.data.url);
      })
      .catch((error) => console.log(error));
  };

  return (
    <motion.div
      className="Home"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="heading-container">
        <div className="heading">
          <div className="Title">Contact Keep</div>
          <div className="tagline">Access your contacts in anywere.</div>
          <Link to="/" className="link">
            <button className="get-start-btn" onClick={() => auth()}>
              <AtSign className="sign-icon" />
              Get start with google
            </button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="Hero-image" />
      </div>
    </motion.div>
  );
};

export default Home;
