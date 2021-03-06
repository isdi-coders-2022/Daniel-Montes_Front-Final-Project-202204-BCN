import { mockUser } from "../../../../mocks/users";
import { server } from "../../../../mocks/server";
import { editUserThunk, getUserThunk, loginThunk } from "./userThunk";
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

describe("Given the getuserThunk function", () => {
  describe("When it's called with an user", () => {
    test("Then it should call dispatch with the set notes to show action with the notes received from the axios request", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({ data: { user: mockUser } });

      const thunk = getUserThunk(mockUser.id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });
});
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

  describe("When invoked with a invalid user and axios throws an error", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.post = jest.fn().mockReturnValue({ status: 200 });

      const thunk = loginThunk({
        username: mockUser.username,
        password: mockUser.password,
      });
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  describe("When invoked editUser", () => {
    test("Then it should not call the dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "setItem").mockReturnValue();
      axios.put = jest.fn().mockRejectedValue({});

      const thunk = editUserThunk({
        username: mockUser.username,
        password: "",
      });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
