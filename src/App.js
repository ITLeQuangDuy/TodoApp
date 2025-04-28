import "./App.css";
import { useState } from "react";
import Login from "./components/Auth/Login";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

function App() {
  const [isLogin, setLogin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setLogin={setLogin} />} />
        <Route
          path="/home"
          element={
            isLogin ? (
              <Home setLogin={setLogin} />
            ) : ( 
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
