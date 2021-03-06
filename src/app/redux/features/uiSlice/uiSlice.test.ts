import uiReducer, {
  loadingActionCreator,
  finishedLoadingActionCreator,
  apiResponseActionCreator,
  cleanApiResponseActionCreator,
} from "./uiSlice";

const initialState = {
  loading: false,
  finishedLoading: true,
  modalMessage: "",
  modalType: "",
  feedback: false,
  headerTitle: "",
  headerLastTitle: "",
  apiResponse: "",
  pages: 0,
  currentPage: 1,
  pagination: 5,
};
const expectedState = {
  loading: false,
  finishedLoading: true,
  modalMessage: "",
  modalType: "",
  feedback: true,
  headerTitle: "",
  headerLastTitle: "",
  apiResponse: "Message",
  pages: 0,
  currentPage: 1,
  pagination: 5,
};

const expectedLoadingState = {
  loading: true,
  finishedLoading: false,
  modalMessage: "",
  modalType: "",
  feedback: true,
  headerTitle: "",
  headerLastTitle: "",
  apiResponse: "Message",
  pages: 0,
  currentPage: 1,
  pagination: 5,
};
describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const action = loadingActionCreator();
      const loadedState = uiReducer(expectedLoadingState, action);

      expect(loadedState).toEqual(expectedLoadingState);
    });
  });
});

describe("Given the finiushedLoadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to false", () => {
      const action = finishedLoadingActionCreator();
      const loadedState = uiReducer(expectedState, action);

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

      expect(loadedState).toEqual(initialState);
    });
  });
});
