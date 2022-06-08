import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PenguinsPage from "./pages/PenguinsPage/PenguinsPage";
import FavsPage from "./pages/FavsPage/FavsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/homepage" />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/penguins" element={<PenguinsPage />} />
      <Route path="/favs" element={<FavsPage />} />
    </Routes>
  );
}

export default App;
