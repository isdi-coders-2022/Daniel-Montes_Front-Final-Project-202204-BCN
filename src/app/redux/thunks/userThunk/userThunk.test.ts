import { mockUser, mockUserRegister } from "../../../../mocks/users";
import { server } from "../../../../mocks/server";
import { loginThunk, registerThunk } from "./userThunk";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => () => ({ username: "jota", id: "1" }));

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
});
