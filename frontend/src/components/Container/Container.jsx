
import { BrowserRouter as Router, Link } from "react-router-dom";

import AnimatedRoutes from "../AnimatedRoutes";

//css
import "./Container.css";

//components
import Header from "../Header/Header";

import FloatBtn from "../FloatBtn/FloatBtn";

const Container = () => {
  return (
    <div className={"Container"}>
      <Router>
        <Header />
        <div>
          <AnimatedRoutes />
        </div>
        <Link to={"/add"}>
          <FloatBtn />
        </Link>
      </Router>
    </div>
  );
};

export default Container;
