import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPenguin } from "../../../redux/types/penguin/penguinInterfaces";

interface sliceIniState {
  allPenguins: IPenguin[];
  penguin: IPenguin;
}

const initialState: sliceIniState = {
  allPenguins: [],
  penguin: {
    id: "",
    name: "",
    category: "",
    image: "",
    imageBackup: "",
    likes: 0,
    likers: [],
    favs: [],
    description: "",
  },
};

const penguinSlice = createSlice({
  name: "penguins",
  initialState,
  reducers: {
    loadPenguin: (
      penguins,
      action: PayloadAction<IPenguin>
    ): sliceIniState => ({
      ...penguins,
      allPenguins: [...penguins.allPenguins, action.payload],
      penguin: action.payload,
    }),

    loadPenguins: (
      penguins,
      action: PayloadAction<IPenguin[]>
    ): sliceIniState => ({
      ...penguins,
      allPenguins: [...action.payload],
    }),

    deletePenguin: (
      penguins,
      action: PayloadAction<string>
    ): sliceIniState => ({
      ...penguins,
      allPenguins: penguins.allPenguins.filter(
        (penguin) => penguin.id !== action.payload
      ),
    }),

    createPenguin: (
      penguins,
      action: PayloadAction<IPenguin>
    ): sliceIniState => ({
      ...penguins,
      allPenguins: [...penguins.allPenguins, action.payload],
    }),

    editPenguin: (
      penguins,
      action: PayloadAction<IPenguin>
    ): sliceIniState => ({
      ...penguins,
      allPenguins: penguins.allPenguins.map((penguin) =>
        penguin.id === action.payload.id
          ? { ...action.payload }
          : { ...penguin }
      ),
      penguin: action.payload,
    }),

    resetPenguin: (
      penguins,
      action: PayloadAction<IPenguin>
    ): sliceIniState => ({
      ...penguins,
      penguin: action.payload,
    }),
  },
});

export const {
  loadPenguins: loadPenguinsActionCreator,
  loadPenguin: loadPenguinActionCreator,
  deletePenguin: deletePenguinActionCreator,
  createPenguin: createPenguinActionCreator,
  editPenguin: editPenguinActionCreator,
  resetPenguin: resetPenguinActionCreator,
} = penguinSlice.actions;

export default penguinSlice.reducer;
