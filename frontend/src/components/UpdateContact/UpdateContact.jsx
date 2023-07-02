import { useState, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

// icons
import { Plus, Trash2 } from "react-feather";

// css
import "./UpdateContact.css";

//avatar
import Avatar from "../../assets/avatar.png";

export const UpdateContact = () => {
  const data = {
    prefix: "Mr.",
    fullName: "Savindu Shehan",
    jobTitle: "developer",
    phoneNumbers: [
      {
        label: "personal",
        phoneNumber: "075436945655",
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
    ],
  };

  const profileInputRef = useRef(null);
  const [image, setImage] = useState("");

  const profileImageHandle = () => {
    profileInputRef.current.click();
  };

  const profileImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(e.target.files[0]);
  };

  const [isActive, setIsActive] = useState(false);
  const [isSocialActive, setIsSocialActive] = useState(false);

  const fetchPhone = [...data.phoneNumbers];
  fetchPhone.splice(0, 1);

  const [phoneNumbers, setPhoneNumbers] = useState([...fetchPhone]);

  const fetchEmail = [...data.email];
  fetchEmail.splice(0, 1);

  const [email, setEmail] = useState([...fetchEmail]);

  const fetchSocial = [...data.socialMedia];
  fetchSocial.splice(0, 1);

  const [socialMedia, setSocialMedia] = useState([...fetchSocial]);

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
    setSocialMedia([...socialMedia, { label: "", username: "" }]);
    setSocialDropDown([...socialDropDown, false]);
  };

  const changePhoneNumber = (changeValue, i) => {
    const inputdata = [...phoneNumbers];
    inputdata[i].phoneNumber = changeValue.target.value;
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

  const [prefix, setPrefix] = useState(data.prefix);
  const [social, setSocial] = useState(data.socialMedia[0].label);

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

  const [fullName, setFullName] = useState(data.fullName);

  const fullNameHadle = (e) => {
    setFullName(e.target.value);
  };

  const [jobTitle, setJobTitle] = useState(data.jobTitle);

  const jobTitleHandle = (e) => {
    setJobTitle(e.target.value);
  };

  const [label, setLabel] = useState(data.postalAddress.label);
  const [address, setAddress] = useState(data.postalAddress.address);
  const [city, setCity] = useState(data.postalAddress.city);
  const [state, setState] = useState(data.postalAddress.state);
  const [postCode, setPostCode] = useState(data.postalAddress.postCode);
  const [country, setCountry] = useState(data.postalAddress.country);

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

  const [date, setDate] = useState(data.date);

  const dateHandle = (e) => {
    setDate(e.target.value);
  };

  const [iEmailLabel, setIEmailLabel] = useState(data.email[0].label);
  const [iEmail, setIEmail] = useState(data.email[0].email);

  const iEmailLabelHandle = (e) => {
    setIEmailLabel(e.target.value);
  };
  const iEmailHandle = (e) => {
    setIEmail(e.target.value);
  };

  const firstEmail = {
    label: iEmailLabel,
    email: iEmail,
  };

  const [iPhoneLabel, setIPhoneLabel] = useState(data.phoneNumbers[0].label);
  const [iPhone, setIPhone] = useState(data.phoneNumbers[0].phoneNumber);

  const iPhoneLabelHandle = (e) => {
    setIPhoneLabel(e.target.value);
  };
  const iPhoneHandle = (e) => {
    setIPhone(e.target.value);
  };

  const firstPhone = {
    label: iPhoneLabel,
    phoneNumber: iPhone,
  };

  const [iSocial, setISocial] = useState(data.socialMedia[0].username);

  const iSocialHandle = (e) => {
    setISocial(e.target.value);
  };

  const firstSocial = {
    label: social,
    username: iSocial,
  };

  const userData = {
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
  };

  const isVaildFullName = () => {
    if (fullName.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const isVaildPhoneNumber = () => {
    console.log(iPhone);
    if (iPhone.length <= 0) {
      return false;
    } else {
      return true;
    }
  };

  const [isSubmit, setIsSubmit] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(userData);
  };

  return (
    <div className="form-container">
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
                      <img src={Avatar} className="profile-image" />
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
                    class={
                      isSubmit
                        ? !isVaildFullName()
                          ? "erorr data"
                          : "data "
                        : "data"
                    }
                    value={fullName}
                    placeholder="Full Name"
                    onChange={(e) => fullNameHadle(e)}
                  />
                </div>
                {isSubmit ? (
                  !isVaildFullName() ? (
                    <div className="input-group">
                      {" "}
                      <div className="err-msg">Full name is required!</div>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
              </div>
              {/* job title */}
              <div className="view-group">
                <div className="label">Job Title </div>
                <input
                  type="text"
                  class="data"
                  placeholder="Job Title"
                  onChange={(e) => jobTitleHandle(e)}
                  value={jobTitle}
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
                    onChange={(e) => iPhoneLabelHandle(e)}
                    value={iPhoneLabel}
                  />
                  <input
                    id={`val-0`}
                    type="text"
                    placeholder="Phone Number"
                    class={
                      isSubmit
                        ? !isVaildPhoneNumber()
                          ? "erorr data"
                          : "data "
                        : "data"
                    }
                    onChange={(e) => iPhoneHandle(e)}
                    value={iPhone}
                  />
                  <button className="add" onClick={() => addNewPhoneNumber()}>
                    <Plus />
                  </button>
                </div>
                {isSubmit ? (
                  !isVaildPhoneNumber() ? (
                    <div className="input-group">
                      {" "}
                      <div className="err-msg">Full name is required!</div>
                    </div>
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )}
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
                        class="data"
                        value={data.phoneNumber}
                        placeholder="Phone Number"
                        onChange={(e) => changePhoneNumber(e, i)}
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
                    onChange={(e) => {
                      iEmailLabelHandle(e);
                    }}
                    value={iEmailLabel}
                  />
                  <input
                    type="text"
                    class="data"
                    placeholder="Email Address"
                    onChange={(e) => iEmailHandle(e)}
                    value={iEmail}
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
                      onChange={(e) => labelHandle(e)}
                      value={label}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">Address </div>
                    <input
                      type="text"
                      class="data"
                      placeholder="No 12, Galle Rd."
                      onChange={(e) => addressHandle(e)}
                      value={address}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">City</div>
                    <input
                      type="text"
                      class="data"
                      placeholder="Colombo"
                      onChange={(e) => cityHandle(e)}
                      value={city}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">State </div>
                    <input
                      type="text"
                      class="data"
                      placeholder="Western Province"
                      onChange={(e) => stateHandle(e)}
                      value={state}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">Post Code </div>
                    <input
                      type="text"
                      class="data"
                      placeholder="00100"
                      onChange={(e) => postCodeHandle(e)}
                      value={postCode}
                    />
                  </div>
                  <div className="input-group">
                    <div className="sub-label">Country </div>
                    <input
                      type="text"
                      class="data"
                      placeholder="Sri Lanka"
                      onChange={(e) => countryHandle(e)}
                      value={country}
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
                  onChange={(e) => {
                    dateHandle(e);
                  }}
                  value={date}
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
                      onChange={(e) => iSocialHandle(e)}
                      value={iSocial}
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
                <button className="submit" type="submit">
                  Save
                </button>
                <Link to="/">
                  <button type="reset" className="close">
                    Discard
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export const UpdateDataLoader = async ({ params }) => {
  return 0;
};
