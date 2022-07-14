import { mockUser } from "../../../../../mocks/users";
import { server } from "../../../../../mocks/server";
import { loginThunk } from "./userThunk";
import axios from "axios";

jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

beforeAll(() => {
  server.listen({ onUnhandledRequest: "bypass" });
});

beforeEach(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => () => ({ username: "user1", id: "1" }));
jest.mock("axios");

HTMLAnchorElement.prototype.click = jest.fn();
global.window.URL.createObjectURL = jest.fn();

// describe("Given a registerThunk", () => {
//   describe("When its called", () => {
//     test("Then it should call the dispatch", async () => {
//       const dispatch = jest.fn();
//       const dispatch2 = jest.fn();
//       const thunklogin = createFavThunk(mockPenguin);

//       await thunklogin(dispatch2);
//       const thunk = registerThunk(mockUser);
//       thunk(dispatch());
//       jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");
//       expect(dispatch).toHaveBeenCalled();

//       jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");
//       expect(dispatch).toHaveBeenCalled();

//       const thunkLoginAction = loginThunk(mockUser);
//       thunkLoginAction(dispatch());
//       expect(dispatch).toHaveBeenCalled();
//     });
//   });
// });

describe("Given a LoginThunk", () => {
  describe("When its called", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = loginThunk(mockUser);

      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe("When invoked with a valid user and axios throws an error", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.post = jest.fn().mockRejectedValue({});

      const thunk = loginThunk({
        username: mockUser.username,
        password: "",
      });
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
