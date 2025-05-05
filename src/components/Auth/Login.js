import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./AuthContext";
// import Home from "../Home";

const Login = ({ setCurrentUser }) => {
  const [form, setForm] = useState([{ emai: "", password: "" }]);
  // const nivigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);
      alert("Xin chào " + user.name);
      // nivigate("/home");
    } else {
      alert("Email hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="login">
      <h1>Đăng nhập</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          className="login-input"
          placeholder="Tài khoản"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          className="login-input"
          placeholder="Mật khẩu"
          name="password"
          onChange={handleChange}
        ></input>

        <button className="login-button">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
