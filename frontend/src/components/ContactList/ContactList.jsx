import React from "react";
import { Link } from "react-router-dom";

// css
import "./ContactList.css";

//icons
import { UserPlus } from "react-feather";

// components
import ContactCard from "../ContactCard/ContactCard";

const ContactList = () => {
  const data = [
    {
      id: 1,
      fullName: "savindu",
      phoneNumber: "0755463582",
      thumbnail: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: 2,
      fullName: "savindu",
      phoneNumber: "0755463582",
      thumbnail: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: 3,
      fullName: "savindu",
      phoneNumber: "0755463582",
      thumbnail: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: 4,
      fullName: "savindu",
      phoneNumber: "0755463582",
      thumbnail: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: 5,
      fullName: "savindu",
      phoneNumber: "0755463582",
      thumbnail: "https://www.w3schools.com/w3images/avatar2.png",
    },
    {
      id: 6,
      fullName: "savindu",
      phoneNumber: "0755463582",
      thumbnail: "https://www.w3schools.com/w3images/avatar2.png",
    },
  ];
  return (
    <div className="ContactList">
      {data.length > 0 ? (
        data.map((contact) => (
          <Link to={`/contact/${contact.id}`} className="link">
            <ContactCard
              name={contact.fullName}
              phoneNumber={contact.phoneNumber}
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
    </div>
  );
};

export default ContactList;
