import React, { useContext } from "react";
import "../../styles/layout/Header.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
        <div>
          Xin chào {currentUser.name}
          <button onClick={handleLogut}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate("/login")}>Đăng nhập</button>
          <button onClick={() => navigate("/register")}>Đăng ký</button>
        </div>
      )}
    </div>
  );
};

export default Header;
