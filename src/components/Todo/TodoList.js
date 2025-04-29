import React, { useState } from "react";

const TodoList = (e) => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [selectedTodos, setSelectedTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
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

  return (
    <div>
      <h2>Danh sách việc cần làm</h2>
      <input
        placeholder="Thêm việc cần làm"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>

      {todos.length === 0 ? (
        <div>Không có việc cần làm</div>
      ) : (
        <ul>
          {todos.map((todo) => (
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
        <button onClick={handleAddTodo}>Thêm</button>
        <button>Sửa</button>
        <button onClick={handleDeleteSelected}>Xóa</button>
      </div>
    </div>
  );
};

export default TodoList;
