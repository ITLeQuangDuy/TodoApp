import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import FormWrapper from "../common/FormWrapper";
import Input from "../common/Input";
import InputPassword from "../common/InputPassword";
import Button from "../common/Button";

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
    <FormWrapper>
      <h1>Đăng ký</h1>
      <Input
        placeholder="Tên"
        label="Tên"
        name="name"
        onChange={(e) => setName(e.target.value)}
      ></Input>
      <Input
        placeholder="Tài khoản"
        label="Tài khoản"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      ></Input>
      <InputPassword
        placeholder="Mật khẩu"
        label="Mật khẩu"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      ></InputPassword>
      <InputPassword
        placeholder="Nhập lại mật khẩu"
        label="Nhập lại mật khẩu"
        name="confirmPassword"
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></InputPassword>

      <Button onClick={handleSubmit}>Đăng ký</Button>
    </FormWrapper>
  );
};

export default Register;
