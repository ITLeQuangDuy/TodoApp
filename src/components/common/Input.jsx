import React from "react";
import "../../styles/common/Input.css";

const Input = ({ label, name, onChange, placeholder, type }) => {
  return (
    <div>
      <label>{label}</label>
      <div className="input-container">
        <input
          className="input"
          placeholder={placeholder}
          name={name}
          type={type}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
};

export default Input;
