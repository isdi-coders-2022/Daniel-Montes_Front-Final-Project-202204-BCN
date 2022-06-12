import { mockPenguins } from "../../../../mocks/penguins";
import penguinReducer, {
  loadPenguinsActionCreator,
} from "../../features/penguinSlice/penguinSlice";

const initialState = {
  AllPenguins: [],
};

describe("Given the loadAllPropertiesActionCreator", () => {
  describe("When invoked", () => {
    test("Then the initialstate will contain the loaded properties", () => {
      const action = loadPenguinsActionCreator(mockPenguins);
      const loadedState = penguinReducer(initialState.AllPenguins, action);

      expect(loadedState).toEqual(mockPenguins);
    });
  });
});
