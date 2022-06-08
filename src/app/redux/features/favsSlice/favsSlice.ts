import { createSlice } from "@reduxjs/toolkit";
import { IPenguin } from "../../types/penguin/penguinInterfaces";
import { RootState } from "../../store/store";

<<<<<<< refs/remotes/origin/feature/add-checkout-security
interface PenguinsState {
  AllPenguins: IPenguin[];
}

const initialState: PenguinsState = {
  AllPenguins: [],
=======
interface FavsSliceState {
  favs: IFavsPenguins[];
}

const initialState: FavsSliceState = {
  favs: [],
>>>>>>> local
};

const penguinSlice = createSlice({
  name: "penguins",
  initialState,
  reducers: {
<<<<<<< refs/remotes/origin/feature/add-checkout-security
    loadFavs: (penguins, action): PenguinsState => ({
=======
    loadFavs: (penguins, action): FavsSliceState => ({
>>>>>>> local
      ...action.payload,
      AllPenguins: action.payload,
    }),
<<<<<<< refs/remotes/origin/feature/add-checkout-security
    createFav: (penguins, action): PenguinsState => ({
=======
    createFav: (penguins, action): FavsSliceState => ({
>>>>>>> local
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
