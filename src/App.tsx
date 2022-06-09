import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PenguinsPage from "./pages/PenguinsPage/PenguinsPage";
import CheckInSecurity from "./components/CheckInSecurity/CheckInSecurity";
import CheckOutSecurity from "./components/CheckOutSecurity/CheckOutSecurity";
import FavsPage from "./pages/FavsPage/FavsPage";

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
      <Route
        path="/register"
        element={
          <CheckOutSecurity>
            <RegisterPage />
          </CheckOutSecurity>
        }
      />
      <Route
        path="/penguins"
        element={
          <CheckInSecurity>
            <PenguinsPage />
          </CheckInSecurity>
        }
      />
      <Route
        path="/favs"
        element={
          <CheckInSecurity>
            <FavsPage />
          </CheckInSecurity>
        }
      />
    </Routes>
  );
}

export default App;
