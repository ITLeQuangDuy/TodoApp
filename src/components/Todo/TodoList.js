import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Input from "../common/Input";
import FormWrapper from "../common/FormWrapper";
import Button from "../common/Button";

const TodoList = (e) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [selectedTodos, setSelectedTodos] = useState([]);
  const { currentUser } = useAuth();

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        owner: currentUser.username,
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    } else {
      alert("Vui lòng nhập giá trị input");
    }
  };

  //   const handleDeleteTodo = (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   };

  const handleSelectedTodo = (id) => {
    if (selectedTodos.includes(id)) {
      // bỏ chọn
      setSelectedTodos(selectedTodos.filter((selectedId) => selectedId !== id));
    } else {
      // chọn
      setSelectedTodos([...selectedTodos, id]);
    }
  };

  const handleDeleteSelected = () => {
    if (selectedTodos.length === 0) {
      alert("Vui lòng chọn ít nhất một mục để xóa");
      return;
    }
    setTodos(todos.filter((todo) => !selectedTodos.includes(todo.id)));
    setSelectedTodos([]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (


    <FormWrapper>
      <h2>Danh sách việc cần làm</h2>
      <Input
        placeholder="Thêm việc cần làm"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></Input>

      {todos.length === 0 ? (
        <div>Không có việc cần làm</div>
      ) : (
        <ul>
          {todos
            .filter((todo) => todo.owner === currentUser?.username) // chỉ lấy todo của user hiện tại
            .map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  checked={selectedTodos.includes(todo.id)}
                  onChange={() => handleSelectedTodo(todo.id)}
                ></input>{" "}
                {todo.text}{" "}
                {/* <button onClick={() => handleDeleteTodo(todo.id)}>Xóa</button> */}
              </li>
            ))}
        </ul>
      )}

      <div>
        <Button onClick={handleAddTodo}>Thêm</Button>
        <Button>Sửa</Button>
        <Button onClick={handleDeleteSelected}>Xóa</Button>
      </div>
    </FormWrapper>

  );
};

export default TodoList;
