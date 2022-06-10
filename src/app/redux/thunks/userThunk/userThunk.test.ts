import { mockUser, mockUserRegister } from "../../../../mocks/users";
import { server } from "../../../../mocks/server";
import { loginThunk, registerThunk } from "./userThunk";
import axios from "axios";

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

describe("Given a registerThunk", () => {
  describe("When its called", () => {
    test("Then it should call the dispatch", () => {
      const dispatch = jest.fn();

      const thunk = registerThunk(mockUserRegister);

      thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a LoginThunk", () => {
  describe("When its called", () => {
    test("Then it should call the dispatch", async () => {
      const dispatch = jest.fn();

      const thunk = loginThunk(mockUser);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When invoked with a valid user and axios throws an error", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.post = jest.fn().mockRejectedValue({});

      const thunk = loginThunk({ username: mockUser.username, password: "" });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
