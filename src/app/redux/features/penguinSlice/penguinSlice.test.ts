import mockPenguins from "../../../../mocks/penguins";
import penguinReducer, {
  loadPenguinsActionCreator,
} from "../../features/penguinSlice/penguinSlice";

const initialState = {
  AllPenguins: [],
};

describe("Given the loadAllPropertiesActionCreator", () => {
  describe("When invoked", () => {
    test("Then the initialstate will contain the loaded properties", () => {
      const expectedState = {
        AllPenguins: mockPenguins,
      };

      const action = loadPenguinsActionCreator(mockPenguins);
      const loadedState = penguinReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
