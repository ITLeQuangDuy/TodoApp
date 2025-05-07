import React from "react";
import "../../styles/common/Button.css";

const Button = ({ className, onClick, children }) => {
  return (
    <button className={`button ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
