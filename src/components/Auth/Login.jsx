import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "../common/Button";
import Input from "../common/Input";
import InputPassword from "../common/InputPassword";
import FormWrapper from "../common/FormWrapper";

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
      <FormWrapper>
        <FormWrapper>
          <h1>Đăng nhập</h1>
          <Input
            label="Tài khoản"
            placeholder="Tài khoản"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>
          <InputPassword
            label="Mật khẩu"
            placeholder="Mật khẩu"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></InputPassword>
          <div>
            <p>
              Chưa có tài khoản <Link to="/register">Đăng ký ngay</Link>
            </p>
            <Link to="/forgotpassword">Quên mật khẩu</Link>
          </div>
          <Button onClick={handleLogin}>Đăng nhập</Button>
        </FormWrapper>
      </FormWrapper>
    </>
  );
};

export default Login;
