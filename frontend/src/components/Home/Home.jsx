import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//css
import "./Home.css";

//icons
import { AtSign } from "react-feather";

//image
import HeroImage from "../../assets/hero-image.svg";

const Home = ({ user }) => {
  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const googleAuth = () => {
    window.location.href = `https://y5sm93-4000.csb.app/google/auth`;
  };
  console.log(user);

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
            <button className="get-start-btn" onClick={() => googleAuth()}>
              <AtSign className="sign-icon" />
              Get start with google
            </button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={HeroImage} />
      </div>
    </motion.div>
  );
};

export default Home;
