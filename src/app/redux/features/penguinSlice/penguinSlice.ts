import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPenguin } from "../../../redux/types/penguin/penguinInterfaces";

interface SliceIniState {
  allPenguins: IPenguin[];
  penguin: IPenguin;
}

const initialState: SliceIniState = {
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
    ): SliceIniState => ({
      ...penguins,
      penguin: action.payload,
    }),

    loadPenguins: (
      penguins,
      action: PayloadAction<IPenguin[]>
    ): SliceIniState => ({
      ...penguins,
      allPenguins: [...action.payload],
    }),

    deletePenguin: (
      penguins,
      action: PayloadAction<string>
    ): SliceIniState => ({
      ...penguins,
      allPenguins: penguins.allPenguins.filter(
        (penguin) => penguin.id !== action.payload
      ),
      penguin: initialState.penguin,
    }),

    createPenguin: (
      penguins,
      action: PayloadAction<IPenguin>
    ): SliceIniState => ({
      ...penguins,
      penguin: action.payload,
    }),

    editPenguin: (
      penguins,
      action: PayloadAction<IPenguin>
    ): SliceIniState => ({
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
    ): SliceIniState => ({
      ...penguins,
      penguin: action.payload,
    }),
    resetPenguins: (
      penguins,
      action: PayloadAction<IPenguin>
    ): SliceIniState => ({
      ...penguins,
      allPenguins: [action.payload],
    }),
    searchPenguins: (
      penguins,
      action: PayloadAction<IPenguin[]>
    ): SliceIniState => ({
      ...penguins,
      allPenguins: [...action.payload],
    }),
  },
});

export const {
  loadPenguins: loadPenguinsActionCreator,
  loadPenguin: loadPenguinActionCreator,
  searchPenguins: searchPenguinsActionCreator,
  deletePenguin: deletePenguinActionCreator,
  createPenguin: createPenguinActionCreator,
  editPenguin: editPenguinActionCreator,
  resetPenguin: resetPenguinActionCreator,
  resetPenguins: resetPenguinsActionCreator,
} = penguinSlice.actions;

export default penguinSlice.reducer;
