import { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, use } from "react-router-dom";
import axios from "axios";

import queryString from "query-string";

import AnimatedRoutes from "../AnimatedRoutes";

//css
import "./Container.css";

//components
import Header from "../Header/Header";

import FloatBtn from "../FloatBtn/FloatBtn";

const Container = () => {
  const [user, setUser] = useState(null);

  return (
    <div className={"Container"}>
      <Router>
        <Header user={user} />
        <div>
          <AnimatedRoutes user={user} />
        </div>
        <Link to={"/add"}>
          <FloatBtn />
        </Link>
      </Router>
    </div>
  );
};

export default Container;
