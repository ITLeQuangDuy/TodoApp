import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setLogin }) => {
  const navigate = useNavigate();

  const handleLogut = () => {
    setLogin(false);
    navigate("/login");
  };

  return (
    <div>
      <div>Đây là trang chủ</div>
      <button onClick={handleLogut}>Đăng xuất</button>
    </div>
  );
};

export default Home;
