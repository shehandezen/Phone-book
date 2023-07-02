import React from "react";

//css
import "./ContactCard.css";

//icons
import { ArrowRight } from "react-feather";

//avatar
import Avatar from "../../assets/avatar.png";

const ContactCard = ({ name, phoneNumber, thumbnail }) => {
  return (
    <div className="Card">
      <img src={thumbnail} />
      <div className="description">
        <div>
          <div className="name">{name}</div>
          <div className="phone-number">{phoneNumber}</div>
        </div>
        <div className="arrow">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
