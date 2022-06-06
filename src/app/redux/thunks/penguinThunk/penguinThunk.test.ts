import axios from "axios";
import { loadPenguinsThunk } from "./penguinThunk";
import { mockPenguins } from "../../../../mocks/penguins";
import { loadPenguinsActionCreator } from "../../features/penguinSlice/penguinSlice";

describe("Given the loadPenguinsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the load notes action with the penguins received from the axios request", async () => {
      const dispatch = jest.fn();
      const action = loadPenguinsActionCreator(mockPenguins);

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { penguins: mockPenguins }, status: 200 });

      const thunk = loadPenguinsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe("When it's called and there is no token", () => {
    test("Then it should not call dispatch", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = loadPenguinsThunk();
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
