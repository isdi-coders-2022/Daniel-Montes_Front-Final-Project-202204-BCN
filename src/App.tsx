import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PenguinsPage from "./pages/PenguinsPage/PenguinsPage";
import FavsPage from "./pages/FavsPage/FavsPage";
import CheckOutSecurity from "./components/CheckOutSecurity/CheckOutSecurity";
import CheckInSecurity from "./components/CheckInSecurity/CheckInSecurity";
import CreatePage from "./pages/CreatePage/CreatePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import { useAppDispatch, useAppSelector } from "./app/redux/hooks/hooks";
import { useEffect } from "react";
import { UserInfo } from "./app/redux/types/userInterfaces/userInterfaces";
import jwtDecode from "jwt-decode";
import { logInActionCreator } from "./app/redux/features/userSlice/userSlice";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { logged } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token || logged) {
      const userData: UserInfo = jwtDecode(token as string);
      dispatch(logInActionCreator(userData));
    }
  }, [dispatch, logged]);

  return (
    <>
      <Navbar title="Penguins" />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" />} />
        <Route
          path="/homepage"
          element={
            <CheckOutSecurity>
              <HomePage />
            </CheckOutSecurity>
          }
        />
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
          path="/penguins/favs"
          element={
            <CheckInSecurity>
              <FavsPage />
            </CheckInSecurity>
          }
        />
        <Route
          path="/create"
          element={
            <CheckInSecurity>
              <CreatePage />
            </CheckInSecurity>
          }
        />
        <Route
          path="/penguin-edit/:id"
          element={
            <CheckInSecurity>
              <CreatePage />
            </CheckInSecurity>
          }
        />
        <Route
          path="/detail/:idPenguin"
          element={
            <CheckInSecurity>
              <DetailPage />
            </CheckInSecurity>
          }
        />
      </Routes>
    </>
  );
}

export default App;
