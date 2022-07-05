import userReducer, {
  logInActionCreator,
  logOutActionCreator,
} from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When it receives a user and a login action", () => {
    test("Then it should return the same user but logged", () => {
      const initialUser = {
        id: "test",
        name: "Test",
        username: "test",
        isAdmin: false,
        logged: false,
        image: "",
      };
      const expectedUser = {
        id: "test",
        name: "Test",
        username: "test",
        isAdmin: false,
        logged: true,
        image: "",
      };

      const action = logInActionCreator(initialUser);
      const loggedUser = userReducer(initialUser, action);

      expect(loggedUser).toEqual(expectedUser);
    });
  });
  describe("When it receives a logout action", () => {
    test("Then it should switch the user logged property at false", () => {
      const loggedUser = {
        name: "Test1",
        username: "test1",
        isAdmin: false,
        logged: true,
        id: "test",
        image: "",
      };
      const expectedUserStatus = false;

      const logoutAction = logOutActionCreator();
      const loggedoutUser = userReducer(loggedUser, logoutAction);

      expect(loggedoutUser.logged).toEqual(expectedUserStatus);
    });
  });
});
