import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IPenguin,
  INewPenguin,
} from "../../../redux/types/penguin/penguinInterfaces";

const initialState: IPenguin[] = [];

const penguinSlice = createSlice({
  name: "penguins",
  initialState,
  reducers: {
    loadPenguins: (penguins, action): IPenguin[] => [...action.payload],

    deletePenguin: (penguins, action): IPenguin[] =>
      penguins.filter((penguin) => penguin.id !== action.payload),

    createPenguin: (
      penguins,
      action: PayloadAction<INewPenguin>
    ): IPenguin[] => [...penguins, action.payload],
  },
});

export const {
  loadPenguins: loadPenguinsActionCreator,
  deletePenguin: deletePenguinActionCreator,
  createPenguin: createPenguinActionCreator,
} = penguinSlice.actions;

export default penguinSlice.reducer;
