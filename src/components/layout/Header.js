import React, { useContext } from "react";
import "../../styles/layout/Header.css";
import { AuthContext } from "../Auth/AuthContext";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="header">
      <h1>TODO APP</h1>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <a href="/login">Login</a>
      )}
    </div>
  );
};

export default Header;
