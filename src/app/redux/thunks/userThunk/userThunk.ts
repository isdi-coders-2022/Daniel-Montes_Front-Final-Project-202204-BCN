import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  DataAxiosLogin,
  LoginData,
  LoginResponse,
  UserRegister,
} from "../../types/userInterfaces/userInterfaces";
import {
  loadUserDataActionCreator,
  logInActionCreator,
} from "../../features/userSlice/userSlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  wrongAction,
  setLoadingOffWithMessage,
  setLoadingOn,
} from "../../../../components/Modals/Modals";
import { finishedLoadingActionCreator } from "../../features/uiSlice/uiSlice";

export const loginThunk =
  (userData: LoginData) => async (dispatch: Dispatch) => {
    try {
      const url: string = `${process.env.REACT_APP_API_URL}users/login`;

      const { data, status }: DataAxiosLogin = await axios.post(url, userData);

      if (status === 200) {
        const { id, username, image }: LoginResponse = jwt_decode(data.token);
        const logged = false;
        const isAdmin = false;

        localStorage.setItem("token", data.token);

        dispatch(logInActionCreator({ id, username, logged, isAdmin, image }));
      }
      dispatch(finishedLoadingActionCreator());
      // correctAction("Logged in!");
    } catch (error: any) {
      wrongAction(
        "Login failed!\nCheck credentials for username: " + userData.username
      );

      return error.message;
    }
  };

export const registerThunk =
  (userData: UserRegister) => async (dispatch: Dispatch) => {
    try {
      const { data, status }: DataAxiosLogin = await axios.post(
        `${process.env.REACT_APP_API_URL}users/register`,
        userData
      );
      if (status === 200) {
        localStorage.setItem("token", data.token);
      }

      // correctAction("Registed!...");

      dispatch(finishedLoadingActionCreator());

      document.location.href = "/penguins";
    } catch (error: any) {
      wrongAction(
        "Registration failed!: \nUsername: " +
          userData.username +
          "\nPass: " +
          userData.password
      );

      //stopLoadingAction();
      setLoadingOffWithMessage("REGISTER: Finished successfully", false);

      return error.message;
    }
  };

export const getUserThunk = (id: string) => async (dispatch: Dispatch) => {
  try {
    const token = localStorage.getItem("token");
    setLoadingOn("Getting user data...");

    if (token) {
      const { data: user } = await axios.get(
        `${process.env.REACT_APP_API_URL}users/${id}`
      );

      dispatch(loadUserDataActionCreator(user));
      dispatch(finishedLoadingActionCreator());
      // correctAction("GET User: Finished successfully");
      setLoadingOffWithMessage("GET User: Finished successfully", false);
    }
  } catch (error) {
    // wrongAction(`ERROR: ${this} Exiting with error:  ${error}`);
    setLoadingOffWithMessage("GET User: Finished successfully", false);
  }
};
