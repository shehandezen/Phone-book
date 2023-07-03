import { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";

//icons
import {
  Clipboard,
  Facebook,
  Twitter,
  Instagram,
  Edit3,
  X,
  Phone,
} from "react-feather";

//css
import "./ContactDetailsCard.css";

//avatar
import Avatar from "../../assets/avatar.png";

export const ContactDetailsCard = () => {
  const copy = (value) => {
    navigator.clipboard.writeText(value);
    triggerClipButton();
  };
  const data = {
    prefix: "Mr.",
    fullName: "Savindu Shehan",
    jobTitle: "developer",
    phoneNumbers: [
      {
        label: "personal",
        phoneNumber: "075436945655",
      },
      {
        label: "work",
        phoneNumber: "011546545655",
      },
    ],
    email: [
      {
        label: "personal",
        email: "savindu@personal.com",
      },
      {
        label: "work",
        email: "savindu@work.com",
      },
    ],
    postalAddress: {
      label: "home",
      address: "no 12 , galle rd",
      city: "kalutara",
      state: "western",
      postCode: "12055",
      country: "sri lanka",
    },
    date: "2023-07-20",
    socialMedia: [
      {
        label: "Twitter",
        username: "shehan",
      },
      {
        label: "Facebook",
        username: "savindu",
      },
      {
        label: "Instagram",
        username: "savindu",
      },
    ],
  };

  const [clipboard, setClipboard] = useState(false);

  const triggerClipButton = () => {
    setClipboard(true);
    setTimeout(() => setClipboard(false), 2000);
  };

  return (
    <div className="contact-details-card">
      <div className="card">
        <span className="operate-btns">
          <Link to="/update/2">
            <Edit3 className="edit-icon" />
          </Link>
          <Link to="/contacts">
            <X className="close-icon" />
          </Link>
        </span>
        <img src={Avatar} className="profile-photo" />
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
                  readOnly
                  onClick={() => copy(data.postalAddress.address)}
                />
              </div>

              <div>
                <input
                  type="text"
                  value={data.postalAddress.city}
                  className="detail-view "
                  readOnly
                  onClick={() => copy(data.postalAddress.city)}
                />
              </div>

              <div>
                <input
                  type="text"
                  value={data.postalAddress.state}
                  className="detail-view "
                  disabled
                  onClick={() => copy(data.postalAddress.state)}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={data.postalAddress.postCode}
                  className="detail-view "
                  readOnly
                  onClick={() => copy(data.postalAddress.postCode)}
                />
              </div>
              <div>
                <input
                  type="text"
                  value={data.postalAddress.country}
                  className="detail-view "
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
              <div className="detail-label"></div>
              {data.email.map((email) => (
                <div>
                  <input
                    type="text"
                    value={email.label}
                    className="detail-view short"
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
    </div>
  );
};

export const dataLoader = async ({ params }) => {
  return 0;
};

// export default ContactDetailsCard;
