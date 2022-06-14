import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPenguin } from "../../../redux/types/penguin/penguinInterfaces";

interface penguinIniState {
  allPenguins: IPenguin[];
  penguinsToLoad: IPenguin[];
}

const initialState: penguinIniState = {
  allPenguins: [],
  penguinsToLoad: [],
};

const penguinSlice = createSlice({
  name: "penguins",
  initialState,
  reducers: {
    loadPenguins: (
      penguins,
      action: PayloadAction<IPenguin[]>
    ): penguinIniState => ({
      ...penguins,
      allPenguins: [...action.payload],
    }),

    deletePenguin: (
      penguins,
      action: PayloadAction<string>
    ): penguinIniState => ({
      ...penguins,
      allPenguins: penguins.allPenguins.filter(
        (penguin) => penguin.id !== action.payload
      ),
      penguinsToLoad: penguins.penguinsToLoad.filter(
        (penguin) => penguin.id !== action.payload
      ),
    }),
    createPenguin: (
      penguins,
      action: PayloadAction<IPenguin>
    ): penguinIniState => ({
      ...penguins,
      allPenguins: [...penguins.allPenguins, action.payload],
    }),

    editPenguin: (
      penguins,
      action: PayloadAction<IPenguin>
    ): penguinIniState => ({
      ...penguins,
      allPenguins: penguins.allPenguins.map((penguin) =>
        penguin.id === action.payload.id
          ? { ...action.payload }
          : { ...penguin }
      ),
    }),
  },
});

export const {
  loadPenguins: loadPenguinsActionCreator,
  deletePenguin: deletePenguinActionCreator,
  createPenguin: createPenguinActionCreator,
  editPenguin: editPenguinActionCreator,
} = penguinSlice.actions;

export default penguinSlice.reducer;
