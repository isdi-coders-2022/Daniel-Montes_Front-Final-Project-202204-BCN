import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IPenguin,
  INewFav,
} from "../../../redux/types/penguin/penguinInterfaces";
import { RootState } from "../../store/store";

const initialState: IPenguin[] = [];

const favSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    loadFavs: (favs, action): IPenguin[] => [...action.payload],

    deletePenguin: (favs, action): IPenguin[] =>
      favs.filter((fav) => fav.id !== action.payload),

    createFav: (favs, action: PayloadAction<INewFav>): IPenguin[] => ({
      ...favs,
    }),
  },
});

export const {
  loadFavs: loadFavsActionCreator,
  deletePenguin: deletePenguinActionCreator,
  createFav: createFavActionCreator,
} = favSlice.actions;

export const favsSelector = (state: RootState) => state.favs;

export default favSlice.reducer;
