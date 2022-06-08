import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PenguinsPage from "./pages/PenguinsPage/PenguinsPage";
import FavsPage from "./pages/FavsPage/FavsPage";
import CheckOutSecurity from "./components/CheckOutSecurity/CheckOutSecurity";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/homepage" />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <CheckOutSecurity>
            <LoginPage />
          </CheckOutSecurity>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/penguins" element={<PenguinsPage />} />
      <Route path="/favs" element={<FavsPage />} />
    </Routes>
  );
}

export default App;
