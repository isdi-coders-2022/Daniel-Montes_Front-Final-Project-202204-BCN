import uiReducer, {
  loadingActionCreator,
  finishedLoadingActionCreator,
  apiResponseActionCreator,
  cleanApiResponseActionCreator,
} from "./uiSlice";

describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState = {
        loading: false,
        feedback: false,
        apiResponse: "",
      };
      const expectedState = {
        loading: true,
        feedback: false,
        apiResponse: "",
      };

      const action = loadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the finiushedLoadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to false", () => {
      const initialState = {
        loading: true,
        feedback: false,
        apiResponse: "",
      };
      const expectedState = {
        loading: false,
        feedback: false,
        apiResponse: "",
      };

      const action = finishedLoadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the apiResponse", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true and the given message should be added", () => {
      const initialState = {
        loading: false,
        feedback: false,
        apiResponse: "",
      };
      const expectedState = {
        loading: false,
        feedback: true,
        apiResponse: "Message",
      };

      const action = apiResponseActionCreator("Message");
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the cleanApiResponse", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true", () => {
      const initialState = {
        loading: false,
        feedback: true,
        apiResponse: "Message",
      };
      const expectedState = {
        loading: false,
        feedback: false,
        apiResponse: "",
      };

      const action = cleanApiResponseActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
