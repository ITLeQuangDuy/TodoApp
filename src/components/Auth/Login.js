import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setLogin}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "" && password.trim() === "") {
      alert("Vui lòng nhập đầy đủ tài khoản mật khẩu");
    } else {
      setLogin(true);
      navigate("/home");
    }
  };

  return (
    <div className="login">
      <h1>Đăng nhập</h1>
      <form className="login-form">
        <input
          className="login-input"
          placeholder="Tài khoản"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          className="login-input"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button className="login-button" onClick={handleLogin}>Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
