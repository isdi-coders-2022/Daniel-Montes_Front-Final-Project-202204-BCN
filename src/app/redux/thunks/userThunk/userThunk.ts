import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  DataAxiosLogin,
  LoginData,
  LoginResponse,
  UserRegister,
} from "../../types/userInterfaces/userInterfaces";
import {
  editUserActionCreator,
  loadUserDataActionCreator,
  logInActionCreator,
} from "../../features/userSlice/userSlice";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setLoadingOffWithMessage,
  setLoadingOn,
} from "../../../../components/Modals/Modals";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice/uiSlice";

export const loginThunk =
  (userData: LoginData) => async (dispatch: Dispatch) => {
    try {
      setLoadingOn(`LOGIN: ${userData.username}...`);
      const url: string = `${process.env.REACT_APP_API_URL}users/login`;

      const { data, status }: DataAxiosLogin = await axios.post(url, userData);

      if (status === 200) {
        const { id, username, image }: LoginResponse = jwt_decode(data.token);
        const logged = false;
        const isAdmin = false;

        localStorage.setItem("token", data.token);

        dispatch(logInActionCreator({ id, username, logged, isAdmin, image }));

        dispatch(finishedLoadingActionCreator());
        setLoadingOffWithMessage(
          `${userData.username} logged successfully.`,
          false
        );
      }
    } catch (error: any) {
      setLoadingOffWithMessage(
        "Login failed!\nCheck credentials for username: " + userData.username,
        true
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

      dispatch(finishedLoadingActionCreator());

      document.location.href = "/penguins";
    } catch (error: any) {
      setLoadingOffWithMessage(
        "Registration failed!: \nUsername: " +
          userData.username +
          "\nPass: " +
          userData.password,
        true
      );

      return error.message;
    }
  };

export const getUserThunk = (id: string) => async (dispatch: Dispatch) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const { data: user } = await axios.get(
        `${process.env.REACT_APP_API_URL}users/${id}`
      );

      dispatch(loadUserDataActionCreator(user));
      dispatch(finishedLoadingActionCreator());
    }
  } catch (error) {
    setLoadingOffWithMessage(`GET User: ERROR: ${error}`, false);
  }
};

export const editUserThunk = (idUser: any) => async (dispatch: Dispatch) => {
  setLoadingOn("EDIT User...");

  dispatch(loadingActionCreator());

  const token = localStorage.getItem("token");
  debugger;
  if (token) {
    const { data: user } = await axios.put(
      `${process.env.REACT_APP_API_URL}users/edit/${idUser}`,
      idUser,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch(editUserActionCreator(user));

    dispatch(finishedLoadingActionCreator());

    setLoadingOffWithMessage(`Edit user finished successfully.`, false);
  }
};
