import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//css
import "./FloatBtn.css";

//icons
import { UserPlus } from "react-feather";

const FloatBtn = () => {
  const [isHome, setIsHome] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);
  return (
    <div>
      {isHome ? (
        ""
      ) : (
        <div className="float-plus" onClick={() => {}}>
          <UserPlus />
        </div>
      )}
    </div>
  );
};

export default FloatBtn;
