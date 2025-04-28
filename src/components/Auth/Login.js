import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setLogin] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "" && password.trim() === "") {
      alert("Vui lòng nhập đầy đủ tài khoản mật khẩu");
    } else {
      setLogin(true);
    }
  };

  return (
    <div className="login">
      {isLogin ? (
        <div>Xin chào {username}</div>
      ) : (
        <div>
          <h1>Login</h1>
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

            <button className="login-button" onClick={handleLogin}>
              Đăng nhập
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
