import React from "react";

//css
import "./ContactCard.css";

//icons
import { ArrowRight } from "react-feather";

//avatar
import Avatar from "../../assets/avatar.png";

const ContactCard = ({ name, phoneNumber, thumbnail }) => {
  console.log(thumbnail);
  const URL = process.env.REACT_APP_API;

  return (
    <div className="Card">
      <img src={thumbnail === undefined ? Avatar : `${URL}/${thumbnail}`}  alt=""Thumbnail />
      <div className="description">
        <div>
          <div className="name">{name}</div>
          <div className="phone-number">{phoneNumber[0].phoneNumber}</div>
        </div>
        <div className="arrow">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
