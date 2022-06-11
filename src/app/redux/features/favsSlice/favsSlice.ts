import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFav, INewFav } from "../../../redux/types/penguin/penguinInterfaces";

const initialState: IFav[] = [];

const checkSlice = createSlice({
  name: "checks",
  initialState,
  reducers: {
    loadFavs: (checks, action): IFav[] => [...action.payload],

    deleteFav: (checks, action): IFav[] =>
      checks.filter((check) => check.id !== action.payload),

    createFav: (checks, action: PayloadAction<INewFav>): IFav[] => [
      ...checks,
      action.payload,
    ],
  },
});

export const {
  loadFavs: loadFavsActionCreator,
  deleteFav: deleteFavsActionCreator,
  createFav: createFavActionCreator,
} = checkSlice.actions;

export default checkSlice.reducer;
