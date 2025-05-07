import React from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "./Todo/TodoList";
import { useAuth } from "./contexts/AuthContext";

const Home = ({  }) => {
  const navigate = useNavigate();
  const {logout} = useAuth();

  const handleLogut = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <TodoList></TodoList>
      <button onClick={handleLogut}>Đăng xuất</button>
    </>
  );
};

export default Home;
