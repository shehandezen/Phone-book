import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
//css
import "./Header.css";
//icons
import { UserPlus, Users, LogOut, LogIn } from "react-feather";
//assets
import Avatar from "../../assets/avatar.png";
import queryString from "query-string";

const Header = () => {
  const [isHome, setIsHome] = useState(false);
  const [isShowOptions, setIsShowOptions] = useState(false);
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
    getUser();
  }, [location]);

  useEffect(() => {
    const query = queryString.parse(location.search);
    if (
      Object.hasOwn(query, "access_token") &&
      Object.hasOwn(query, "userId") &&
      Object.hasOwn(query, "name") &&
      Object.hasOwn(query, "email") &&
      Object.hasOwn(query, "picture")
    ) {
      localStorage.setItem("user", JSON.stringify(query));
      setUser(query);
    }
  }, [location.search]);

  const getUser = async () => {
    if (localStorage.getItem("user")) {
      await setUser(JSON.parse(localStorage.getItem("user")));
    }
  };

  const showOptions = () => {
    setIsShowOptions((current) => !current);
    console.log("clicked");
  };

  // const hideOptions = () => {
  //   setIsShowOptions(false);
  //   console.log("blured");
  // };
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

  const logout = async () => {
    await axios
      .get(`${process.env.REACT_APP_API}/google/logout`)
      .then((response) => {})
      .catch((err) => console.log(err));
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="Header">
      <Link to="/" className="drop-link">
        <div className="brand">Contact Keep</div>
      </Link>

      {isHome ? (
        <div className="profile">
          <Link onClick={() => auth()} className="drop-link">
            <button className="sign-in-btn">
              <LogIn className="sign-in-icon" /> Sign In{" "}
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <div className="profile">
            <div className="email">
              {user ? `${user.email.slice(0, 20)}...` : ""}{" "}
            </div>
            <img
              tabIndex={0}
              src={user ? user.picture : Avatar}
              onClick={() => showOptions()}
              alt="user"
            />
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
              <Link className="drop-link" onClick={() => logout()}>
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
