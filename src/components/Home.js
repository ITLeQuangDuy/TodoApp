import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer"
import TodoList from "./Todo/TodoList";

const Home = ({ setLogin }) => {
  const navigate = useNavigate();

  const handleLogut = () => {
    setLogin(false);
    navigate("/login");
  };

  return (
    <>
      <Header></Header>
        <div>TODO APP</div>
        <TodoList></TodoList>
        <button onClick={handleLogut}>Đăng xuất</button>
     <Footer></Footer>
    </>
  );
};

export default Home;
