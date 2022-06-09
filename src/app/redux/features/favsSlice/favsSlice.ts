import { createSlice } from "@reduxjs/toolkit";
import { IPenguins } from "../../types/penguin/penguinInterfaces";
import { RootState } from "../../store/store";

interface FavsSliceState {
  favs: IPenguins[];
}

const initialState: FavsSliceState = {
  favs: [],
};

const penguinSlice = createSlice({
  name: "penguins",
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
} = penguinSlice.actions;

export const penguinsSelector = (state: RootState) =>
  state.penguins.AllPenguins;

export default penguinSlice.reducer;
