import { Route, Router, Routes, Navigate, BrowserRouter } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./components/contexts/AuthContext";
import Header from "./components/layout/Header";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import ForgotPassword from "./components/Auth/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
