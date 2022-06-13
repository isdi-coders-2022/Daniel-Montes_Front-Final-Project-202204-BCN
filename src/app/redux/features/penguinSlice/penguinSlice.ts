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

    editPenguin: (penguins, action: PayloadAction<INewPenguin>) =>
      penguins.map((penguin) =>
        penguin.id === action.payload.id ? action.payload : penguin
      ),
  },
});

export const {
  loadPenguins: loadPenguinsActionCreator,
  deletePenguin: deletePenguinActionCreator,
  createPenguin: createPenguinActionCreator,
  editPenguin: editPenguinActionCreator,
} = penguinSlice.actions;

export default penguinSlice.reducer;
