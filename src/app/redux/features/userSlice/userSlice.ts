import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo, UserState } from "../../types/userInterfaces/userInterfaces";

const initialState: UserState = {
  id: "",
  username: "",
  logged: localStorage.getItem("token") ? true : false,
  image: "",
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (user: UserState, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
      logged: true,
      name: action.payload.username,
      username: action.payload.username,
      isAdmin: action.payload.isAdmin,
      image: action.payload.image,
    }),

    logout: () => ({
      id: "",
      name: "",
      username: "",
      isAdmin: false,
      logged: false,
      image: "",
    }),

    loadUserData: (user: UserState, action: PayloadAction<UserInfo>) => ({
      id: action.payload.id,
      name: action.payload.username,
      username: action.payload.username,
      isAdmin: action.payload.isAdmin,
      logged: true,
      image: action.payload.image,
    }),

    editUser: (user: UserState, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
    }),
    createUser: (user: UserState, action: PayloadAction<UserInfo>) => ({
      ...action.payload,
    }),
  },
});

export const {
  login: logInActionCreator,
  logout: logOutActionCreator,
  editUser: editUserActionCreator,
  loadUserData: loadUserDataActionCreator,
  createUser: createUserDataActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
