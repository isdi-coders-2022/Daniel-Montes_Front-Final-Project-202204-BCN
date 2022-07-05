import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo, UserState } from "../../types/userInterfaces/userInterfaces";

const initialState: UserState = {
  id: "",
  username: "",
  logged: localStorage.getItem("token") ? true : false,
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (user: UserState, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
      logged: true,
      username: action.payload.username,
      image: action.payload.image,
    }),
    logout: () => ({
      id: "",
      name: "",
      username: "",
      logged: false,
      image: "",
    }),
    loadUserData: (user: UserState, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
      id: action.payload.id,
      name: action.payload.username,
      username: action.payload.username,
      logged: true,
      image: action.payload.image,
    }),
  },
});

export const {
  login: logInActionCreator,
  logout: logOutActionCreator,
  loadUserData: loadUserDataActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
