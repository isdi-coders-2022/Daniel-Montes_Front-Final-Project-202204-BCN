import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CheckOutSecurity from "./components/CheckOutSecurity/CheckOutSecurity";
import CheckInSecurity from "./components/CheckInSecurity/CheckInSecurity";
import CreatePage from "./pages/CreatePage/CreatePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import { useAppDispatch, useAppSelector } from "./app/redux/hooks/hooks";
import { useEffect, useState } from "react";
import { UserInfo } from "./app/redux/types/userInterfaces/userInterfaces";
import jwtDecode from "jwt-decode";
import { logInActionCreator } from "./app/redux/features/userSlice/userSlice";
import Navbar from "./components/Navbar/Navbar";
import { Error404Page } from "./pages/Error404/Error404";
import FavsPage from "./pages/FavsPage/FavsPage";
import { ToastContainer } from "react-toastify";
import PenguinsPage from "./pages/PenguinsPage/PenguinsPage";
import { getUserThunk } from "./app/redux/thunks/penguinThunk/userThunk/userThunk";

function App() {
  const { logged } = useAppSelector((state) => state.user);
  const { headerTitle, loading } = useAppSelector((state) => state.ui);
  const [, setMenu] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token || logged) {
      const userData: UserInfo = jwtDecode(token as string);
      dispatch(logInActionCreator(userData));
      dispatch(getUserThunk(userData.id));
      loading ? setMenu(true) : setMenu(false);
    }
  }, [dispatch, logged, loading]);

  return (
    <>
      <Navbar headerTitle={headerTitle} />
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
          path="/users/register"
          element={
            <CheckOutSecurity>
              <RegisterPage />
            </CheckOutSecurity>
          }
        />
        <Route
          path="/users/edit/:id"
          element={
            <CheckOutSecurity>
              <CreatePage />
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
          path="/penguins/edit/:id"
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
        <Route
          path="*"
          element={
            <CheckInSecurity>
              <Error404Page />
            </CheckInSecurity>
          }
        />
      </Routes>
      <ToastContainer limit={4} />
    </>
  );
}

export default App;
