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
    loadPenguins: (penguins, action): PenguinsState => ({
      ...penguins,
      AllPenguins: action.payload,
    }),
  },
});

export const { loadPenguins: loadPenguinsActionCreator } = penguinSlice.actions;

export const penguinsSelector = (state: RootState) =>
  state.penguins.AllPenguins;

export default penguinSlice.reducer;
