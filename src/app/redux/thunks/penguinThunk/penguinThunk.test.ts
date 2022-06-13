import { deletePenguinActionCreator } from "../../features/penguinSlice/penguinSlice";
import { loadPenguinsThunk } from "./penguinThunk";

const dispatch = jest.fn();
jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given the loadPenguinsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the load notes action with the penguins received from the axios request", async () => {
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      const thunk = loadPenguinsThunk();
      thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's called and there is no token", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = deletePenguinActionCreator("");
      dispatch();

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
