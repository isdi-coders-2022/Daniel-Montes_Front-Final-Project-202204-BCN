import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

interface UISliceState {
  loading: boolean;
  finishedLoading: boolean;
  headerTitle: string;
  apiResponse: string;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    finishedLoading: true,
    headerTitle: "",
    apiResponse: "",
  },
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
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  headerTitle: headerTitleActionCreator,
  apiResponse: apiResponseActionCreator,
  cleanApiResponse: cleanApiResponseActionCreator,
} = uiSlice.actions;

export const uiLoadSpinnerSelector = (state: RootState) => state.ui.loading;

export default uiSlice.reducer;
