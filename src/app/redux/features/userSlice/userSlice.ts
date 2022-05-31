import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";
import { LoginResponse } from "../../types/userInterfaces";

const initialState: LoginResponse = {
  name: "",
  username: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (
      currentState: LoginResponse,
      action: PayloadAction<LoginResponse>
    ) => {
      return { ...action.payload };
    },
    logout: () => initialState,
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;
export const selectCount = (state: RootState) => state.users;

export default userSlice.reducer;
