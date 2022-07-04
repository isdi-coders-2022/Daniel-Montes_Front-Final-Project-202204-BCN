import uiReducer, {
  loadingActionCreator,
  finishedLoadingActionCreator,
  apiResponseActionCreator,
  cleanApiResponseActionCreator,
} from "./uiSlice";

const initialState = {
  loading: false,
  finishedLoading: false,
  headerTitle: "",
  apiResponse: "",
};
const expectedState = {
  loading: true,
  finishedLoading: false,
  apiResponse: "",
};

describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const action = loadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the finiushedLoadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to false", () => {
      const action = finishedLoadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the apiResponse", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true and the given message should be added", () => {
      const action = apiResponseActionCreator("Message");
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the cleanApiResponse", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true", () => {
      const action = cleanApiResponseActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
