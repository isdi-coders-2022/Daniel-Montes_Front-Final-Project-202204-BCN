import userReducer, {
  logInActionCreator,
  logOutActionCreator,
} from "./userSlice";

describe("Given a userSlice reducer", () => {
  describe("When it receives a user and a login action", () => {
    test("Then it should return the same user but logged", () => {
      const initialUser = {
        name: "Test",
        username: "test",
        logged: false,
      };
      const expectedUser = {
        name: "Test",
        username: "test",
        logged: true,
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
        logged: true,
      };
      const expectedUserStatus = false;

      const logoutAction = logOutActionCreator();
      const loggedoutUser = userReducer(loggedUser, logoutAction);

      expect(loggedoutUser.logged).toEqual(expectedUserStatus);
    });
  });
});
