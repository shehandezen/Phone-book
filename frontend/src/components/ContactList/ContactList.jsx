import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import { motion } from "framer-motion";

// css
import "./ContactList.css";

//icons
import { UserPlus } from "react-feather";

// components
import ContactCard from "../ContactCard/ContactCard";

const ContactList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const getContacts = async (id) => {
    await axios
      .get(`${process.env.REACT_APP_API}/contacts/user/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        setData(response.data.data.contacts);
      })
      .catch((err) => console.log(err));
  };

  const initialJob = async () => {
    const query = queryString.parse(location.search);
    if (
      Object.hasOwn(query, "access_token") &&
      Object.hasOwn(query, "userId") &&
      Object.hasOwn(query, "name") &&
      Object.hasOwn(query, "email") &&
      Object.hasOwn(query, "picture")
    ) {
      localStorage.setItem("user", JSON.stringify(query));
      await getContacts(query.userId);
    } else {
      if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"));
        await getContacts(user.userId);
      } else {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    initialJob();
  }, [location.search]);

  return (
    <motion.div
      className="ContactList"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {data.length > 0 ? (
        data.map((contact) => (
          <Link to={`/contact/${contact._id}`} className="link">
            <ContactCard
              name={contact.fullName}
              phoneNumber={contact.phoneNumbers}
              thumbnail={contact.thumbnail}
            />
          </Link>
        ))
      ) : (
        <div className="Card">
          <div className="empty-description">
            No Contacts available. Add new contact by clicking button.
          </div>
          <Link to="/add" className="add-contact">
            <div>
              <UserPlus className="add-icon" />
            </div>
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default ContactList;
