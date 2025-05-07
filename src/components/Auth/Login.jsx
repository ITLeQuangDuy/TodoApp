import React, { useContext, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  if (currentUser) {
    navigate("/home");
    return null;
  }

  const handleLogin = () => {
    if (!username && !password) {
      alert("Vui lòng nhâp đầy đủ tài khoản & mật khẩu");
      return;
    }

    const result = login(username, password);
    if (result.success) {
      navigate("/home");
    } else {
      alert(result.message);
    }
  };

  return (
    <>
      <div className="login">
        <h1>Đăng nhập</h1>

        <input
          className="login-input"
          placeholder="Tài khoản"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className="login-input"
          placeholder="Mật khẩu"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button onClick={handleLogin} className="login-button">
          Đăng nhập
        </button>
        <div>
          <p>
            Chưa có tài khoản <Link to="/register">Đăng ký ngay</Link>
          </p>
          <Link to="/forgotpassword">Quên mật khẩu</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
