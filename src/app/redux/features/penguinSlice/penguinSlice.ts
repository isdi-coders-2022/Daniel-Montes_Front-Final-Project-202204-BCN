import { createSlice } from "@reduxjs/toolkit";
import { IPenguin } from "../../types/penguin/penguinInterfaces";

interface penguinsState {
  AllPenguins: IPenguin[];
}

const initialState: penguinsState = {
  AllPenguins: [],
};

const penguinSlice = createSlice({
  name: "penguins",
  initialState,
  reducers: {
    loadPenguins: (penguins, action): penguinsState => ({
      ...penguins,
      AllPenguins: action.payload,
    }),
  },
});

export const { loadPenguins: loadPenguinsActionCreator } = penguinSlice.actions;

export default penguinSlice.reducer;
