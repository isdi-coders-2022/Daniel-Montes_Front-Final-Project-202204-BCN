import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo, UserState } from "../../types/userInterfaces/userInterfaces";
import { RootState } from "../../store/store";

const initialState: UserState = {
  name: "",
  username: "",
  logged: localStorage.getItem("token") ? true : false,
};

const userSlice = createSlice({
  name: "users",
  initialState,

  reducers: {
    login: (users: UserState, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
      logged: true,
      username: users.username,
    }),
    logout: () => ({ name: "", username: "", logged: false }),
  },
});

export const { login: logInActionCreator, logout: logOutActionCreator } =
  userSlice.actions;

export const penguinsSelector = (state: RootState) => state.users;

export default userSlice.reducer;
