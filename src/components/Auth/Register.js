import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState([{ name: "", email: "", password: "" }]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === form.email)) {
      alert("Email đã được sử dụng");
      return;
    }

    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công");
  };

  return (
    <div className="register">
      <form className="register-form" onSubmit={handleRegister}>
        <input
          name="name"
          className="register-innput"
          placeholder="Tên"
          onChange={handleChange}
        ></input>
        <input
          name="email"
          className="register-input"
          placeholder="Email"
          onChange={handleChange}
        ></input>
        <input
          name="password"
          className="register-input"
          placeholder="Mật khẩu"
          onChange={handleChange}
        ></input>

        <button className="register-button">Đăng ký</button>
      </form>
    </div>
  );
};

export default Register;
