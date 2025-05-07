import React, { useState } from "react";
import "../../styles/common/InputPassword.css";

const InputPassword = ({ placeholder, label, name, onChange }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <div className="input-password-container">
        <input
          className="input-password"
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          onChange={onChange}
        ></input>
        <button
          className="button-icon"
          onClick={handleShow}
          
        >
          {show ? "🤨" : "😑"}
        </button>
      </div>
    </div>
  );
};

export default InputPassword;
