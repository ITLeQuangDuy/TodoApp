import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Login from "./components/Auth/Login";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <MainLayout>
          <Login />
        </MainLayout>
      }
    ></Route>
  </Routes>
);

export default AppRoutes;