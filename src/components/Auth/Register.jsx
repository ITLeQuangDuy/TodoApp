import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //   const [error, setError] = useState("");
  //   const [success, setSuccess] = useState("");

  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !username || !password || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    const result = register(name, username, password);
    if (result.success) {
      //   setSuccess(result.message);
      alert(result.message);
    } else {
      //   setError(result.message);
      alert(result.message);
    }
  };

  return (
    <div className="register">
      <h2>Đăng ký</h2>
      <input
        name="name"
        className="register-innput"
        placeholder="Tên"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        name="username"
        className="register-input"
        placeholder="Email"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        name="password"
        className="register-input"
        placeholder="Mật khẩu"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <input
        name="confirmPassword"
        className="register-input"
        placeholder="Nhập lại mật khẩu"
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></input>

      <button onClick={handleSubmit} className="register-button">
        Đăng ký
      </button>
    </div>
  );
};

export default Register;
