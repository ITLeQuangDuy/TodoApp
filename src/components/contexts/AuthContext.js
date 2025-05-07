import { useContext, useEffect, useState, createContext } from "react";
import { jsx } from "react/jsx-runtime";
// import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  // const navigate = useNavigate();

  // lấy dữ liệu từ local store
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    const loggedInUser = localStorage.getItem("currentUser");
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser));
    }
  }, []);

  const register = (name, username, password) => {
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      return { success: false, message: "Tên người dùng đã tồn tại" };
    } else {
      const newUser = { name, username, password };
      setUsers([...users, newUser]);

      localStorage.setItem("users", JSON.stringify(users));
      return { success: true, message: "Đăng ký thành công" };
    }
  };

  const login = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      return { success: false, message: "Đăng nhập không thành công" };
    } else {
      setCurrentUser(user);
      return { success: true, message: "Đăng nhập thành công" };
    }
  };

  const forgotPassword = (username, newPassword) => {
    const userUpdate = users.map((user) => {
      if (user.username === username) {
        return {
          ...user,
          password: newPassword,
        };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(userUpdate));
    setUsers(userUpdate);
    return { success: true, message: "Cập nhật mật khẩu thành công" };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  const value = { users, currentUser, register, login, forgotPassword, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
