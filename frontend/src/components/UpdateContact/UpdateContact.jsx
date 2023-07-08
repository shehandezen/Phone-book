import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { motion } from "framer-motion";
import axios from "axios";

// icons
import { Plus, Trash2 } from "react-feather";
import { Spinner } from "react-spinner-animated";

import "react-spinner-animated/dist/index.css";

// css
import "./UpdateContact.css";

//avatar
import Avatar from "../../assets/avatar.png";

const UpdateContact = () => {
  const navigate = useNavigate();
  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const { id } = useParams();

  const fetchData = async () => {
    await axios
      .get(`${process.env.REACT_APP_API}/contact/${id}`)
      .then((response) => {
        let data = response.data.data.contact[0];
        setFullName(data.fullName);
        setThumbnail(data.thumbnail);
        setPrefix(data.prefix);
        setJobTitle(data.jobTitle);
        setIPhone(data.phoneNumbers[0].phoneNumber);
        setIPhoneLabel(data.phoneNumbers[0].label);
        setIEmail(data.email[0].email);
        setIEmailLabel(data.email[0].label);
        setISocial(data.socialMedia[0].username);
        setSocial(data.socialMedia[0].label);
        setDate(data.date);
        setAddress(data.postalAddress.address);
        setCity(data.postalAddress.city);
        setLabel(data.postalAddress.label);
        setPostCode(data.postalAddress.postCode);
        setState(data.postalAddress.state);
        setCountry(data.postalAddress.country);
        setEmail(data.email.slice(1));
        setPhoneNumbers(data.phoneNumbers.slice(1));
        setSocialMedia(data.socialMedia.slice(1));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const profileInputRef = useRef(null);
  const [image, setImage] = useState("");
  const [thumbnail, setThumbnail] = useState();

  const profileImageHandle = () => {
    profileInputRef.current.click();
  };

  const profileImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file[0]);
    setImage(e.target.files[0]);
  };

  const [isActive, setIsActive] = useState(false);
  const [isSocialActive, setIsSocialActive] = useState(false);

  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [email, setEmail] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);

  const [socialDropDown, setSocialDropDown] = useState([]);

  const socialDropDownHanndle = (i) => {
    console.log(i, socialDropDown);
    const dropDown = [...socialDropDown];
    let current = dropDown[i];
    dropDown.fill(false);
    dropDown[i] = !current;
    setSocialDropDown(dropDown);
  };

  const addNewPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, { label: "", phoneNumber: "" }]);
  };

  const addEmail = () => {
    setEmail([...email, { label: "", email: "" }]);
  };

  const addNewSocial = () => {
    setSocialMedia([...socialMedia, { label: "Facebook", username: "" }]);
    setSocialDropDown([...socialDropDown, false]);
  };

  const changePhoneNumber = (changeValue, i) => {
    const inputdata = [...phoneNumbers];
    inputdata[i].phoneNumber = changeValue.target.value;
    changeValue.target.setCustomValidity("");
    if (!changeValue.target.validity.valid) {
      changeValue.target.setCustomValidity("Phone Number is required");
    }
    setPhoneNumbers(inputdata);
    console.log(phoneNumbers);
  };

  const changePhoneLabel = (changeValue, i) => {
    const inputdata = [...phoneNumbers];
    inputdata[i].label = changeValue.target.value;
    setPhoneNumbers(inputdata);
    console.log(phoneNumbers);
  };

  const changeEmail = (changeValue, i) => {
    const inputdata = [...email];
    inputdata[i].email = changeValue.target.value;
    changeValue.target.setCustomValidity("");
    if (!changeValue.target.validity.valid) {
      changeValue.target.setCustomValidity("Email is required");
    }
    setEmail(inputdata);
    console.log(email);
  };

  const changeEmailLabel = (changeValue, i) => {
    const inputdata = [...email];
    inputdata[i].label = changeValue.target.value;
    setEmail(inputdata);
  };

  const changeSocialMedia = (changeValue, i) => {
    const inputdata = [...socialMedia];
    inputdata[i].username = changeValue.target.value;
    setSocialMedia(inputdata);
  };

  const changeSocialMediaLabel = (changeValue, i) => {
    const inputdata = [...socialMedia];
    inputdata[i].label = changeValue.target.value;
    setSocialMedia(inputdata);
  };

  const socialOption = (value, i) => {
    const inputdata = [...socialMedia];
    inputdata[i].label = value;
    setSocialMedia(inputdata);
  };

  const removePhoneNumber = (i) => {
    const phone = [...phoneNumbers];
    phone.splice(i, 1);
    setPhoneNumbers(phone);
  };

  const removeEmail = (i) => {
    const emailAdrr = [...email];
    emailAdrr.splice(i, 1);
    setEmail(emailAdrr);
    console.log(email);
  };

  const removeSocialMedia = (i) => {
    const socialMed = [...socialMedia];
    socialMed.splice(i, 1);
    setSocialMedia(socialMed);
    console.log(socialMedia);
  };

  const [prefix, setPrefix] = useState();
  const [social, setSocial] = useState();

  const dropdownClick = () => {
    setIsActive((active) => !active);
  };

  const socialDropdownClick = () => {
    setIsSocialActive((active) => !active);
  };

  const PrefixOptionClick = (value) => {
    console.log(value);
    setPrefix(value);
  };

  const SocialOptionClick = (value) => {
    console.log(value);
    setSocial(value);
  };

  const [fullName, setFullName] = useState();

  const fullNameHadle = (e) => {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity("Full name is required");
    }

    setFullName(e.target.value);
  };

  const [jobTitle, setJobTitle] = useState();

  const jobTitleHandle = (e) => {
    setJobTitle(e.target.value);
  };

  const [label, setLabel] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [postCode, setPostCode] = useState();
  const [country, setCountry] = useState();

  const labelHandle = (e) => {
    setLabel(e.target.value);
  };

  const addressHandle = (e) => {
    setAddress(e.target.value);
  };

  const cityHandle = (e) => {
    setCity(e.target.value);
  };

  const stateHandle = (e) => {
    setState(e.target.value);
  };

  const postCodeHandle = (e) => {
    setPostCode(e.target.value);
  };

  const countryHandle = (e) => {
    setCountry(e.target.value);
  };

  const [date, setDate] = useState();

  const dateHandle = (e) => {
    setDate(e.target.value);
  };

  const [iEmailLabel, setIEmailLabel] = useState();
  const [iEmail, setIEmail] = useState();

  const iEmailLabelHandle = (e) => {
    setIEmailLabel(e.target.value);
  };
  const iEmailHandle = (e) => {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity("Email is required");
    }
    setIEmail(e.target.value);
  };

  const firstEmail = {
    label: iEmailLabel,
    email: iEmail,
  };

  const [iPhoneLabel, setIPhoneLabel] = useState();
  const [iPhone, setIPhone] = useState();

  const iPhoneLabelHandle = (e) => {
    setIPhoneLabel(e.target.value);
  };
  const iPhoneHandle = (e) => {
    e.target.setCustomValidity("");
    if (!e.target.validity.valid) {
      e.target.setCustomValidity("Phone Number is required");
    }
    setIPhone(e.target.value);
  };

  const firstPhone = {
    label: iPhoneLabel,
    phoneNumber: iPhone,
  };

  const [iSocial, setISocial] = useState();

  const iSocialHandle = (e) => {
    setISocial(e.target.value);
  };

  const firstSocial = {
    label: social,
    username: iSocial,
  };

  const [userId, setUserId] = useState("001122");

  const userData = {
    userId: userId,
    prefix: prefix,
    fullName: fullName,
    jobTitle: jobTitle,
    phoneNumbers: [...phoneNumbers, firstPhone],
    email: [...email, firstEmail],
    postalAddress: {
      label: label,
      address: address,
      city: city,
      state: state,
      postCode: postCode,
      country: country,
    },
    date: date,
    socialMedia: [...socialMedia, firstSocial],
    image: image,
  };

  const formData = new FormData();

  const buildFormData = (formData, data, parentKey) => {
    if (
      data &&
      typeof data === "object" &&
      !(data instanceof Date) &&
      !(data instanceof File)
    ) {
      Object.keys(data).forEach((key) => {
        buildFormData(
          formData,
          data[key],
          parentKey ? `${parentKey}[${key}]` : key
        );
      });
    } else {
      const value = data == null ? "" : data;

      formData.append(parentKey, value);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault(e);
    setIsLoading(true);
    buildFormData(formData, userData);
    console.log(formData);
    axios
      .put(`${process.env.REACT_APP_API}/contact/${id}`, formData)
      .then((response) => {
        if (response.status == 201) {
          setIsLoading(false);
          navigate("/contacts");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("err", err);
      });
  };

  return (
    <motion.div
      className="form-container"
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="Form">
        <form onSubmit={(e) => submitHandle(e)}>
          <div className="header">Update Contact</div>
          <div className="details">
            <div className="box">
              {/* photo */}
              <div className="view-group">
                <div className="label">Profile Image </div>
                <div onClick={() => profileImageHandle()}>
                  <div className="image-container">
                    {image ? (
                      <img
                        src={URL.createObjectURL(image)}
                        className="profile-image"
                      />
                    ) : (
                      <img
                        src={
                          thumbnail == undefined
                            ? Avatar
                            : `${process.env.REACT_APP_API}/${thumbnail}`
                        }
                        className="profile-image"
                      />
                    )}
                    <span className="camera-icon">📷</span>
                  </div>
                  <input
                    type="file"
                    ref={profileInputRef}
                    style={{ display: "none" }}
                    onChange={(e) => profileImageChange(e)}
                  />
                </div>
              </div>
              {/* full name */}

              <div className="view-group fullname">
                <div className="label">Full Name </div>
                <div className="input-group">
                  <div
                    className={isActive ? "dropdown active" : "dropdown"}
                    onClick={dropdownClick}
                  >
                    <input
                      type="text"
                      class="selector"
                      readOnly
                      placeholder="Mr."
                      value={prefix}
                    />
                    <div className="option">
                      <div onClick={() => PrefixOptionClick("Mr.")}>Mr.</div>
                      <div onClick={() => PrefixOptionClick("Mrs.")}>Mrs.</div>
                      <div onClick={() => PrefixOptionClick("Rev.")}>Rev.</div>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="data"
                    class={"data "}
                    placeholder="Full Name"
                    onChange={(e) => fullNameHadle(e)}
                    value={fullName}
                    // onClick={() => isVaildFullName()}
                    required
                    // onInvalid={this.setCustomValidity("Enter User Name Here")}
                    // onInput={this.setCustomValidity("")}
                  />
                </div>
                {/* {!validFullName ? (
                  <div className="input-group">
                    {" "}
                    <div className="err-msg">Full name is required!</div>
                  </div>
                ) : (
                  ""
                )} */}
              </div>
              {/* job title */}
              <div className="view-group">
                <div className="label">Job Title </div>
                <input
                  type="text"
                  class="data"
                  placeholder="Job Title"
                  value={jobTitle}
                  onChange={(e) => jobTitleHandle(e)}
                />
              </div>
              {/* phone numbers */}
              <div className="view-group">
                <div className="label">phone numbers </div>

                <div className="full-input">
                  <input
                    id={`label-0`}
                    type="text"
                    class="data type-label"
                    placeholder="Label"
                    value={iPhoneLabel}
                    onChange={(e) => iPhoneLabelHandle(e)}
                  />
                  <input
                    id={`val-0`}
                    type="text"
                    placeholder="Phone Number"
                    class={"data "}
                    value={iPhone}
                    onChange={(e) => iPhoneHandle(e)}
                    required
                  />
                  <button className="add" onClick={() => addNewPhoneNumber()}>
                    <Plus />
                  </button>
                </div>
                {/* {!validPhone ? (
                  <div className="input-group">
                    <div className="err-msg">Phone number is required!</div>
                  </div>
                ) : (
                  ""
                )} */}
                {phoneNumbers.map((data, i) => {
                  return (
                    <div className="full-input">
                      <input
                        id={`label-${i}`}
                        type="text"
                        value={data.label}
                        class="data type-label"
                        placeholder="Label"
                        onChange={(e) => changePhoneLabel(e, i)}
                      />
                      <input
                        id={`val-${i}`}
                        type="text"
                        class={"data"}
                        value={data.phoneNumber}
                        placeholder="Phone Number"
                        onChange={(e) => {
                          changePhoneNumber(e, i);
                        }}
                        required
                      />
                      <button
                        className="remove"
                        onClick={() => removePhoneNumber(i)}
                      >
                        <Trash2 />
                      </button>
                    </div>
                  );
                })}
              </div>
              {/* email addresses */}
              <div className="view-group">
                <div className="label">Email address </div>
                <div className="full-input">
                  <input
                    type="text"
                    class="data type-label"
                    placeholder="Label"
                    value={iEmailLabel}
                    onChange={(e) => {
                      iEmailLabelHandle(e);
                    }}
                  />
                  <input
                    type="text"
                    class="data"
                    placeholder="Email Address"
                    value={iEmail}
                    onChange={(e) => iEmailHandle(e)}
                    required
                  />
                  <button className="add" onClick={() => addEmail()}>
                    <Plus />
                  </button>
                </div>
                {email.map((data, i) => {
                  return (
                    <div className="full-input">
                      <input
                        id={`label-${i}`}
                        type="text"
                        value={data.label}
                        class="data type-label"
                        placeholder="Label"
                        onChange={(e) => changeEmailLabel(e, i)}
                      />
                      <input
                        id={`val-${i}`}
                        type="text"
                        class="data"
                        value={data.email}
                        placeholder="Email Address"
                        onChange={(e) => changeEmail(e, i)}
                        required
                      />
                      <button className="remove" onClick={() => removeEmail(i)}>
                        <Trash2 />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="box">
              {/* postal addresses */}
              <div className="view-group">
                <div className="label">postal address </div>
                <div className="address-group">
                  <div className="input-group">
                    <div className="sub-label">Label </div>
                    <input
                      type="text"
                      class="data"
                      placeholder="Work"
                      value={label}
                      onChange={(e) => labelHandle(e)}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">Address </div>
                    <input
                      type="text"
                      class="data"
                      placeholder="No 12, Galle Rd."
                      value={address}
                      onChange={(e) => addressHandle(e)}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">City</div>
                    <input
                      type="text"
                      class="data"
                      placeholder="Colombo"
                      value={city}
                      onChange={(e) => cityHandle(e)}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">State </div>
                    <input
                      type="text"
                      class="data"
                      placeholder="Western Province"
                      value={state}
                      onChange={(e) => stateHandle(e)}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">Post Code </div>
                    <input
                      type="text"
                      class="data"
                      placeholder="00100"
                      value={postCode}
                      onChange={(e) => postCodeHandle(e)}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">Country </div>
                    <input
                      type="text"
                      class="data"
                      placeholder="Sri Lanka"
                      value={country}
                      onChange={(e) => countryHandle(e)}
                    />
                  </div>
                </div>
              </div>
              {/* birth day  */}
              <div className="view-group">
                <div className="label">Birth day </div>
                <input
                  type="date"
                  class="data"
                  value={date}
                  onChange={(e) => {
                    dateHandle(e);
                  }}
                />
              </div>
              {/* social media  */}
              <div className="view-group social-media">
                <div className="label">Social Media </div>
                <div className="full-input">
                  <div className="input-group">
                    <div
                      className={
                        isSocialActive ? "dropdown active" : "dropdown"
                      }
                      onClick={socialDropdownClick}
                    >
                      <input
                        type="text"
                        class="selector"
                        readOnly
                        placeholder="Facebook"
                        value={social}
                        // onChange={(e) => iSocialLabelHandle(e)}
                      />
                      <div className="option">
                        <div onClick={() => SocialOptionClick("Facebook")}>
                          Facebook
                        </div>
                        <div onClick={() => SocialOptionClick("Twitter")}>
                          Twitter
                        </div>
                        <div onClick={() => SocialOptionClick("Instagram")}>
                          Instagram
                        </div>
                      </div>
                    </div>

                    <input
                      type="text"
                      class="data"
                      placeholder="Username"
                      value={iSocial}
                      onChange={(e) => iSocialHandle(e)}
                      required
                    />
                    <button className="add" onClick={() => addNewSocial()}>
                      <Plus />
                    </button>
                  </div>
                </div>
                {socialMedia.map((data, i) => {
                  return (
                    <div className="full-input">
                      <div className="input-group">
                        <div
                          className={
                            [...socialDropDown][i]
                              ? "dropdown active"
                              : "dropdown"
                          }
                          onClick={() => socialDropDownHanndle(i)}
                        >
                          <input
                            type="text"
                            class="selector"
                            readOnly
                            placeholder="Facebook"
                            value={data.label}
                            onChange={(e) => changeSocialMediaLabel(e, i)}
                          />
                          <div className="option">
                            <div onClick={() => socialOption("Facebook", i)}>
                              Facebook
                            </div>
                            <div onClick={() => socialOption("Twitter", i)}>
                              Twitter
                            </div>
                            <div onClick={() => socialOption("Instagram", i)}>
                              Instagram
                            </div>
                          </div>
                        </div>
                        <input
                          type="text"
                          class="data"
                          value={data.username}
                          placeholder="Username"
                          onChange={(e) => changeSocialMedia(e, i)}
                          required
                        />
                        <button
                          className="remove"
                          onClick={() => removeSocialMedia(i)}
                        >
                          <Trash2 />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="input-group">
                <button className="submit" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <Spinner
                      bgColor={"rgba(0,0,0,0.5)"}
                      center={true}
                      text={"Updating..."}
                      width={"150px"}
                      height={"150px"}
                      styles={{ transform: "translate(-50%,-50%" }}
                    />
                  ) : (
                    ""
                  )}{" "}
                  Update
                </button>
                <Link to="/contacts">
                  <button type="reset" className="close">
                    Discard Changes
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default UpdateContact;
