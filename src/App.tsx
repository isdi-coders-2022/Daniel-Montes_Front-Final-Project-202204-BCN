import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PenguinsPage from "./pages/PenguinsPage/PenguinsPage";
import CheckInSecurity from "./components/CheckInSecurity/CheckInSecurity";
import CheckOutSecurity from "./components/CheckOutSecurity/CheckOutSecurity";
<<<<<<< refs/remotes/origin/feature/add-checkout-security
import FavsPage from "./pages/FavsPage/FavsPage";
import Spinner from "./components/Spinner/Spinner";
import { useAppSelector } from "./app/redux/hooks/hooks";
import { uiLoadSpinnerSelector } from "./app/redux/features/uiSlice/uiSlice";
=======
import CheckInSecurity from "./components/CheckInSecurity/CheckInSecurity";
>>>>>>> local

function App() {
  const hideSpinner = useAppSelector(uiLoadSpinnerSelector);

  return (
<<<<<<< refs/remotes/origin/feature/add-checkout-security
    <>
      <Spinner hide={hideSpinner} />
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
    </>
=======
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
>>>>>>> local
  );
}

export default App;
