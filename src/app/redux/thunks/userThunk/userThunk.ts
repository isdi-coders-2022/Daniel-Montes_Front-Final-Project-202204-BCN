import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  DataAxiosLogin,
  LoginData,
  LoginResponse,
} from "../../types/userInterfaces";
import { loginActionCreator } from "../../features/userSlice/userSlice";
import { Dispatch } from "@reduxjs/toolkit";

export const loginThunk =
  (userData: LoginData) => async (dispatch: Dispatch) => {
    const url: string = `${process.env.REACT_APP_API_URL}/users/login`;
    try {
      const { data, status }: DataAxiosLogin = await axios.post(url, userData);

      if (status === 200) {
        const { name, username }: LoginResponse = jwt_decode(data.token);
        localStorage.setItem("token", data.token);
        dispatch(loginActionCreator({ name, username }));
      }
    } catch (error: any) {
      return error.message;
    }
  };
