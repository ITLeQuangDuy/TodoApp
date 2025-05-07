import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const ForgotPassword = () => {
  const { users, forgotPassword } = useAuth();

  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [foundData, setFoundData] = useState();
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!username) {
      alert("Vui lòng nhập thông tin");
      return;
    }

    const user = users.find((user) => user.username === username);
    setHasSearched(true);
    setFoundData(user);
  };

  const handleSubmit = () => {
    if (!newPassword || !confirmPassword) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    const result = forgotPassword(username, newPassword);
    alert(result.message);

    //reset state
  };

  return (
    <div>
      <h2>Quên mật khẩu</h2>
      <input
        placeholder="Nhập tài khoản"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <button onClick={handleSearch}>Tìm</button>

      {hasSearched && !foundData && <div>Không tìm thấy thông tin</div>}

      {foundData && (
        <div>
          <input
            placeholder="Nhập mật khẩu mới"
            onChange={(e) => setNewPassword(e.target.value)}
          ></input>
          <input
            placeholder="Nhập lại mật khẩu"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <button onClick={handleSubmit}>Đổi mật khẩu</button>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
