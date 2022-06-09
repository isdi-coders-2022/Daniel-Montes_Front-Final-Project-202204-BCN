import { createSlice } from "@reduxjs/toolkit";
import { IPenguins } from "../../types/penguin/penguinInterfaces";
import { RootState } from "../../store/store";

interface FavsSliceState {
  favs: IPenguins[];
}

const initialState: FavsSliceState = {
  favs: [],
};

const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    loadFavs: (penguins, action): FavsSliceState => ({
      ...action.payload,
      favs: action.payload,
    }),
    createFav: (penguins, action): FavsSliceState => ({
      ...penguins,
      favs: action.payload,
    }),
  },
});

export const {
  createFav: createFavActionCreator,
  loadFavs: loadFavsActionCreator,
} = favsSlice.actions;

export const favsSelector = (state: RootState) => state.favs.favs;

export default favsSlice.reducer;
