import React, { useContext } from "react";
import "../../styles/layout/Header.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const Header = () => {
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="header">
      <h2>TODO APP</h2>
      {currentUser ? (
        <div className="header-hello-user">
          Xin chào <span>{currentUser.name}</span>
        </div>
      ) : (
        <div>
          <Button onClick={() => navigate("/")}>Đăng nhập</Button>
          <Button onClick={() => navigate("/register")}>Đăng ký</Button>
        </div>
      )}
    </div>
  );
};

export default Header;
