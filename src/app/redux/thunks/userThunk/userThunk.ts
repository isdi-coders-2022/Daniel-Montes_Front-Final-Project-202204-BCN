import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  DataAxiosLogin,
  LoginData,
  LoginResponse,
  UserRegister,
} from "../../types/userInterfaces/userInterfaces";
import { logInActionCreator } from "../../features/userSlice/userSlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  correctAction,
  wrongAction,
  infoAction,
  stopLoadingAction,
} from "../../../../components/Modals/Modals";
import { loadingActionCreator } from "../../features/uiSlice/uiSlice";

export const loginThunk =
  (userData: LoginData) => async (dispatch: Dispatch) => {
    try {
      dispatch(loadingActionCreator());
      const url: string = `${process.env.REACT_APP_API_URL}users/login`;

      const { data, status }: DataAxiosLogin = await axios.post(url, userData);

      if (status === 200) {
        const { name, username }: LoginResponse = jwt_decode(data.token);
        const logged = false;
        localStorage.setItem("token", data.token);

        dispatch(logInActionCreator({ name, username, logged }));
        stopLoadingAction();
      }
    } catch (error: any) {
      wrongAction(
        "Login failed!\nCheck credentials for username: " + userData.username
      );

      return error.message;
    } finally {
      document.location.href = "/penguins";
      stopLoadingAction();
      correctAction("Logged in!");
    }
  };

export const registerThunk =
  (userData: UserRegister) => async (dispatch: Dispatch) => {
    try {
      infoAction("Registering...");
      const { data, status }: DataAxiosLogin = await axios.post(
        `${process.env.REACT_APP_API_URL}register`,
        userData
      );
      if (status === 200) {
        localStorage.setItem("token", data.token);
      }
    } catch (error: any) {
      wrongAction(
        "Registration failed!: \nUsername: " +
          userData.username +
          "\nPass: " +
          userData.password
      );

      return error.message;
    } finally {
      stopLoadingAction();
      correctAction("Registed!...");
      document.location.href = "/penguins";
    }
  };
