import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewFav, IPenguin } from "../../types/penguin/penguinInterfaces";

const initialState: IPenguin[] = [];

const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    loadFavs: (favs, action): IPenguin[] => [...action.payload],
    createFav: (favs, action: PayloadAction<INewFav>): IPenguin[] => [
      ...favs,
      action.payload,
    ],
    deleteFav: (favs, action): IPenguin[] =>
      favs.filter((fav) => fav.id !== action.payload),
  },
});

export const {
  createFav: createFavActionCreator,
  loadFavs: loadFavsActionCreator,
  deleteFav: deleteFavActionCreator,
} = favsSlice.actions;

export default favsSlice.reducer;
