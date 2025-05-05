import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
// import AppRoutes from "./routes";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/login" />}></Route>
    //   </Routes>
    // </Router>
    <>
      <Login setCurrentUser={setCurrentUser}></Login>
      <Register></Register>
    </>
  );
}

export default App;
