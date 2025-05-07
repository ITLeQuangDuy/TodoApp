import React from "react";
import { useNavigate } from "react-router-dom";
import TodoList from "./Todo/TodoList";
import { useAuth } from "./contexts/AuthContext";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import InputPassword from "../components/common/InputPassword";
import FormWrapper from "../components/common/FormWrapper";

const Home = ({}) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogut = () => {
    logout();
    navigate("/");
  };

  return (
      <FormWrapper>
        <TodoList></TodoList>
        <Button onClick={handleLogut}>Đăng xuất</Button>
      </FormWrapper>

  );
};

export default Home;
