import { mockPenguin, mockPenguins } from "../../../../mocks/penguins";
import penguinReducer, { loadPenguinsActionCreator } from "./penguinSlice";

describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const action = loadPenguinsActionCreator(mockPenguins);
      const loadedState = penguinReducer(
        { allPenguins: mockPenguins, penguin: mockPenguin },
        action
      );

      expect(loadedState).toEqual({
        allPenguins: mockPenguins,
        penguin: mockPenguin,
      });
    });
  });
});
