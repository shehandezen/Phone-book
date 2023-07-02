import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
//css
import "./Header.css";
//icons
import { UserPlus, Users, LogOut, LogIn } from "react-feather";
//assets
import Avatar from "../../assets/avatar.png";

const Header = () => {
  const [isHome, setIsHome] = useState(false);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname == "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  const showOptions = () => {
    setIsShowOptions((current) => !current);
    console.log("clicked");
  };

  const hideOptions = () => {
    setIsShowOptions(false);
    console.log("blured");
  };

  return (
    <div className="Header">
      <Link to="/" className="drop-link">
        <div className="brand">Contact Keep</div>
      </Link>

      {isHome ? (
        <div className="profile">
          <Link to="/" className="drop-link">
            <button className="sign-in-btn">
              <LogIn className="sign-in-icon" /> Sign In{" "}
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="profile">
            {" "}
            <img tabIndex={0} src={Avatar} onClick={() => showOptions()} />
            <div
              className={isShowOptions ? "show-options" : "options"}
              onClick={() => showOptions()}
            >
              <Link to="/add" className="drop-link">
                <div>
                  {" "}
                  <UserPlus className="dropdown-icon" />
                  Add Contact
                </div>
              </Link>
              <Link to="/contacts" className="drop-link">
                <div>
                  {" "}
                  <Users className="dropdown-icon" /> My Contacts
                </div>
              </Link>
              <Link to="/logout" className="drop-link">
                <div>
                  {" "}
                  <LogOut className="dropdown-icon" /> Sign Out
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
