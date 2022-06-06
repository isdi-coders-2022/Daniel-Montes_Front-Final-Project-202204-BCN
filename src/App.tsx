import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PenguinsPage from "./pages/PenguinsPage/PenguinsPage";
import Maripuri from "./components/Maripuri/Maripuri";
// import Maripuri from "./components/Maripuri/Maripuri";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/homepage" />} />
      <Route path="/homepage" element={<HomePage />} />
      <Route
        path="/login"
        element={
          <Maripuri>
            <LoginPage />
          </Maripuri>
        }
      />
      <Route
        path="/register"
        element={
          <Maripuri>
            <RegisterPage />
          </Maripuri>
        }
      />
      <Route
        path="/penguins"
        element={
          <Maripuri>
            <PenguinsPage />
          </Maripuri>
        }
      />
    </Routes>
  );
}

export default App;
