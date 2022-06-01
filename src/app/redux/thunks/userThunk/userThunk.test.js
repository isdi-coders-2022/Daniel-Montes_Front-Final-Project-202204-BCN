import { mockUser } from "../../../../mocks/users";
import { server } from "../../../../mocks/server";
import { loginThunk } from "./userThunk";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loginThunk", () => {
  describe("When its called", () => {
    test("Then it should call the dispatch", () => {
      const dispatch = jest.fn();

      const thunk = loginThunk(mockUser);

      thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
