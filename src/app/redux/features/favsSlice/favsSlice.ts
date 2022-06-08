import { createSlice } from "@reduxjs/toolkit";
import { IFavsPenguins } from "../../types/penguin/penguinInterfaces";
import { RootState } from "../../store/store";

interface FavsState {
  favs: IFavsPenguins[];
}

const initialState: FavsState = {
  favs: [],
};

const favsSlice = createSlice({
  name: "favs",
  initialState,
  reducers: {
    loadFavs: (penguins, action): FavsState => ({
      ...action.payload,
      favs: action.payload,
    }),
    createFav: (penguins, action): FavsState => ({
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
