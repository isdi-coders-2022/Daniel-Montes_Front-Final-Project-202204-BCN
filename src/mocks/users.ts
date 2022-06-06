import { UserState } from "../app/redux/types/userInterfaces/userInterfaces";

export const mockUser = {
  username: "user1",
  name: "user1",
  password: "user1",
};

export const mockUserRegister = {
  username: "user1",
  name: "user1",
  password: "user1",
};

export const mockUserNotLogged: UserState = {
  username: "username",
  name: "user1",
  logged: false,
};

export const mockUserLogged: UserState = {
  username: "username",
  name: "user1",
  logged: true,
};
