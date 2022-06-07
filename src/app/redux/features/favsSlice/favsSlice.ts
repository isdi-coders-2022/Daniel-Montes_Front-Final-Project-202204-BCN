import { createSlice } from "@reduxjs/toolkit";
import { IPenguin } from "../../types/penguin/penguinInterfaces";
import { RootState } from "../../store/store";

interface PenguinsState {
  AllPenguins: IPenguin[];
}

const initialState: PenguinsState = {
  AllPenguins: [],
};

const penguinSlice = createSlice({
  name: "penguins",
  initialState,
  reducers: {
    loadFavs: (penguins, action): PenguinsState => ({
      ...action.payload,
      AllPenguins: action.payload,
    }),
    createFav: (penguins, action): PenguinsState => ({
      ...penguins,
      AllPenguins: action.payload,
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
