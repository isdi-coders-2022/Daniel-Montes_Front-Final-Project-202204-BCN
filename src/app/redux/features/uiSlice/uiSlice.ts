import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UISliceState {
  loading: boolean;
  feedback: boolean;
  apiResponse: string;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    feedback: false,
    apiResponse: "",
  },
  reducers: {
    loading: (ui: UISliceState, action: PayloadAction<void>) => ({
      ...ui,
      loading: true,
    }),
    finishedLoading: (ui: UISliceState, action: PayloadAction<void>) => ({
      ...ui,
      loading: false,
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
  apiResponse: apiResponseActionCreator,
  cleanApiResponse: cleanApiResponseActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
