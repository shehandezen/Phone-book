import React from "react";

//css
import "./ContactCard.css";

//icons
import { ArrowRight } from "react-feather";

//avatar
import Avatar from "../../assets/avatar.png";

const ContactCard = ({ name, phoneNumber, thumbnail }) => {
  console.log(thumbnail);
  const URL = "https://y5sm93-4000.csb.app/";

  return (
    <div className="Card">
      <img src={thumbnail == undefined ? Avatar : URL + thumbnail} />
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
