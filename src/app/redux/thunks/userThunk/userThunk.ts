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
} from "../../../../components/Modals/Modals";
import { finishedLoadingActionCreator } from "../../features/uiSlice/uiSlice";

export const loginThunk =
  (userData: LoginData) => async (dispatch: Dispatch) => {
    try {
      const url: string = `${process.env.REACT_APP_API_URL}users/login`;

      const { data, status }: DataAxiosLogin = await axios.post(url, userData);

      if (status === 200) {
        const { name, username }: LoginResponse = jwt_decode(data.token);
        const logged = false;
        localStorage.setItem("token", data.token);
        correctAction("Logged in!");
        dispatch(logInActionCreator({ name, username, logged }));
      }
    } catch (error: any) {
      wrongAction(
        "Login failed!\nCheck credentials for username: " + userData.username
      );

      return error.message;
    } finally {
      dispatch(finishedLoadingActionCreator());
      document.location.href = "/penguins";
    }
  };

export const registerThunk =
  (userData: UserRegister) => async (dispatch: Dispatch) => {
    try {
      correctAction("Registering...");
      await axios.post(`${process.env.REACT_APP_API_URL}register`, userData);
      correctAction("Registed!...");
    } catch (error: any) {
      wrongAction(
        "Registration failed!: \nUsername: " +
          userData.username +
          "\nPass: " +
          userData.password
      );

      return error.message;
    } finally {
      dispatch(finishedLoadingActionCreator());
      document.location.href = "/penguins";
    }
  };
