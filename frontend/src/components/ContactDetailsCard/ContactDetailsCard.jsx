import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { motion } from "framer-motion";

//icons
import { Facebook, Twitter, Instagram, Edit3, X, Trash2 } from "react-feather";

//css
import "./ContactDetailsCard.css";

//avatar
import Avatar from "../../assets/avatar.png";

export const ContactDetailsCard = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("001122");
  const [data, setData] = useState({
    prefix: "",
    fullName: "",
    jobTitle: "",
    phoneNumbers: [
      {
        label: "",
        phoneNumber: "",
      },
    ],
    email: [
      {
        label: "",
        email: "",
      },
    ],
    postalAddress: {
      label: "",
      address: "",
      city: "",
      state: "",
      postCode: "",
      country: "",
    },
    date: "",
    socialMedia: [
      {
        label: "",
        username: "",
      },
    ],
  });
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://y5sm93-4000.csb.app/contact/${id}`).then((response) => {
      setData(response.data.data.contact[0]);
      console.log(response.data.data.contact[0], "response");
    });
  }, []);

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };
  const copy = (value) => {
    navigator.clipboard.writeText(value);
    triggerClipButton();
  };

  const [clipboard, setClipboard] = useState(false);

  const triggerClipButton = () => {
    setClipboard(true);
    setTimeout(() => setClipboard(false), 2000);
  };
  const URL = process.env.REACT_APP_API;

  const [showWarn, setShowWarn] = useState(false);

  const deleteContact = () => {
    axios
      .delete(`${process.env.REACT_APP_API}/contact/${id}`)
      .then((response) => {
        if (response.status == 204) {
          setShowWarn(false);
          navigate("/contacts");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <motion.div
      className="contact-details-card"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {showWarn ? (
        <div className="warn-wrapper">
          <div className="warn-card">
            <div className="warn-msg">
              Are you sure to delete {data.fullName} ?{" "}
            </div>
            <div className="btns">
              <button className="positive" onClick={() => deleteContact()}>
                Yes, delete
              </button>
              <button className="negative" onClick={() => setShowWarn(false)}>
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="card">
        <span className="operate-btns">
          <Link to={`/update/${id}`}>
            <Edit3 className="edit-icon" />
          </Link>

          <Trash2 className="close-icon" onClick={() => setShowWarn(true)} />
          <Link to="/contacts">
            <X className="close-icon" />
          </Link>
        </span>
        <img
          src={
            data.thumbnail == undefined
              ? Avatar
              : `${process.env.REACT_APP_API}/${data.thumbnail}`
          }
          className="profile-photo"
        />
        {clipboard ? <div className="clipboard-msg">Copied!</div> : ""}

        <div className="details-box">
          <div className="detail-feild">
            <div className="detail-label">Full Name</div>
            <input
              type="text"
              value={`${data.prefix} ${data.fullName}`}
              className="detail-view"
              readOnly
              onClick={() => {
                copy(`${data.prefix} ${data.fullName}`);
              }}
            />
          </div>

          <div className="detail-feild">
            <div className="detail-label">Phone Number</div>

            {data.phoneNumbers.map((phone) => (
              <div>
                <input
                  type="text"
                  value={phone.label}
                  className="detail-view short"
                  placeholder="Label"
                  disabled
                />
                <input
                  type="text"
                  value={phone.phoneNumber}
                  className="detail-view long"
                  readOnly
                  onClick={() => copy(phone.phoneNumber)}
                />
              </div>
            ))}
          </div>

          {data.jobTitle !== "" ? (
            <div className="detail-feild">
              <div className="detail-label">Job Title</div>
              <div>
                <input
                  type="text"
                  value={data.jobTitle}
                  className="detail-view "
                  readOnly
                  onClick={() => copy(data.jobTitle)}
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {data.date !== "" ? (
            <div className="detail-feild">
              <div className="detail-label">Birth day</div>
              <div>
                <input
                  type="text"
                  value={data.date}
                  className="detail-view "
                  readOnly
                  onClick={() => copy(data.date)}
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {data.postalAddress.address !== "" ? (
            <div className="detail-feild">
              <div className="detail-label">Postal Address</div>
              <div>
                <input
                  type="text"
                  value={data.postalAddress.address}
                  className="detail-view "
                  placeholder="Address"
                  readOnly
                  onClick={() => copy(data.postalAddress.address)}
                />
              </div>

              <div>
                <input
                  type="text"
                  value={data.postalAddress.city}
                  className="detail-view "
                  placeholder="City"
                  readOnly
                  onClick={() => copy(data.postalAddress.city)}
                />
              </div>

              <div>
                <input
                  type="text"
                  value={data.postalAddress.state}
                  className="detail-view "
                  placeholder="State"
                  disabled
                  onClick={() => copy(data.postalAddress.state)}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={data.postalAddress.postCode}
                  className="detail-view "
                  placeholder="Post Code"
                  readOnly
                  onClick={() => copy(data.postalAddress.postCode)}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={data.postalAddress.country}
                  className="detail-view "
                  placeholder="Country"
                  readOnly
                  onClick={() => copy(data.postalAddress.country)}
                />
              </div>
            </div>
          ) : (
            ""
          )}

          {data.email !== [] ? (
            <div className="detail-feild">
              <div className="detail-label">Email</div>
              {data.email.map((email) => (
                <div>
                  <input
                    type="text"
                    value={email.label}
                    className="detail-view short"
                    placeholder="Label"
                    readOnly
                  />
                  <input
                    type="text"
                    value={email.email}
                    className="detail-view long"
                    readOnly
                    onClick={() => copy(email.email)}
                  />
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          <div className="detail-label">Social media</div>
          {data.socialMedia !== [] ? (
            <div className="social-group">
              {data.socialMedia
                .filter((media) => media.label == "Facebook")
                .map((social) => (
                  <a
                    href={`https://www.facebook.com/${social.username}`}
                    className="social-link facebook"
                  >
                    <Facebook />
                  </a>
                ))}
              {data.socialMedia
                .filter((media) => media.label == "Twitter")
                .map((social) => (
                  <a
                    href={`https://www.twitter.com/${social.username}`}
                    className="social-link twitter"
                  >
                    <Twitter />
                  </a>
                ))}
              {data.socialMedia
                .filter((media) => media.label == "Instagram")
                .map((social) => (
                  <a
                    href={`https://www.instagram.com/${social.username}`}
                    className="social-link instagram"
                  >
                    <Instagram />
                  </a>
                ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactDetailsCard;
