import { createSlice } from "@reduxjs/toolkit";
import { IDetail } from "../../types/penguin/penguinInterfaces";

const initialState: IDetail = {
  penguin: {
    id: "",
    name: "",
    category: "",
    likes: 1,
    image: "",
    imageBackup: "",
    description: "",
    favs: [],
    likers: [],
    originalname: "",
  },
};

const penguinSlice = createSlice({
  name: "penguin",
  initialState,
  reducers: {
    loadPenguin: (penguin, action) => ({
      penguin: { ...action.payload },
    }),
  },
});

export default penguinSlice.reducer;

export const { loadPenguin: loadPenguinActionCreator } = penguinSlice.actions;
