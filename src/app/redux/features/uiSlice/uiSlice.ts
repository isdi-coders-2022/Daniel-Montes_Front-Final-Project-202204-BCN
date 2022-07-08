import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { UISliceState } from "../../types/uiInterfaces";

const initialState: UISliceState = {
  loading: false,
  finishedLoading: true,
  promptMessage: "",
  headerTitle: "",
  pages: 0,
  currentPage: 1,
  pagination: 5,
  apiResponse: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (ui: UISliceState, action: PayloadAction<void>) => ({
      ...ui,
      loading: true,
      finishedLoading: false,
    }),
    finishedLoading: (ui: UISliceState, action: PayloadAction<void>) => ({
      ...ui,
      loading: false,
      finishedLoading: true,
    }),
    promptMessage: (ui: UISliceState, action: PayloadAction<string>) => ({
      ...ui,
      promptMessage: action.payload,
    }),
    headerTitle: (ui: UISliceState, action: PayloadAction<string>) => ({
      ...ui,
      headerTitle: action.payload,
    }),
    apiResponse: (ui: UISliceState, action: PayloadAction<any>) => ({
      ...ui,
      feedback: true,
      apiResponse: action.payload,
    }),
    cleanApiResponse: (ui: UISliceState, action: PayloadAction<void>) => ({
      ...ui,
      feedback: false,
      apiResponse: "",
    }),
    setPages: (users, action: PayloadAction<number>) => ({
      ...users,
      pages: action.payload,
    }),
    setCurrentPage: (users) => ({
      ...users,
      currentPage: users.currentPage + 1,
    }),
    resetCurrentPage: (users) => ({
      ...users,
      currentPage: 1,
    }),
    setPagination: (users) => ({
      ...users,
      pagination: users.pagination + 5,
    }),
    resetPagination: (users) => ({
      ...users,
      pagination: 5,
    }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  headerTitle: headerTitleActionCreator,
  promptMessage: promptMessageActionCreator,
  apiResponse: apiResponseActionCreator,
  cleanApiResponse: cleanApiResponseActionCreator,
  setPages: setPagesActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  setPagination: setPaginationActionCreator,
  resetCurrentPage: resetCurrentPageActionCreator,
  resetPagination: resetPaginationActionCreator,
} = uiSlice.actions;

export const uiLoadSpinnerSelector = (state: RootState) => state.ui.loading;

export default uiSlice.reducer;
