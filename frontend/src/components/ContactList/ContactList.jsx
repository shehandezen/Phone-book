import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

// css
import "./ContactList.css";

//icons
import { UserPlus } from "react-feather";

// components
import ContactCard from "../ContactCard/ContactCard";

const ContactList = () => {
  const [data, setData] = useState([]);

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const [userId, setUserId] = useState("001122");

  console.log(data);
  useEffect(() => {
    axios
      .get(`https://y5sm93-4000.csb.app/contacts/user/${userId}`)
      .then((response) => {
        setData(response.data.data.contacts);
      })
      .catch((err) => console.log(err));
  }, []);

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
