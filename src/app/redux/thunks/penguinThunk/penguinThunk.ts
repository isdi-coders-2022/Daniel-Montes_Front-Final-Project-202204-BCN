import axios from "axios";
import { loadPenguinsActionCreator } from "../../features/penguinSlice/penguinSlice";
import { AppDispatch } from "../../store/store";
import {
  infoAction,
  stopLoadingAction,
  wrongAction,
} from "../../../../components/Modals/Modals";
import { loadFavsActionCreator } from "../../features/favsSlice/favsSlice";

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  try {
    infoAction("Loading Penguins...");
    const token = localStorage.getItem("token");

    if (token) {
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}penguins`);
      dispatch(loadPenguinsActionCreator(penguins));
      stopLoadingAction();
    }
  } catch {
    wrongAction("Penguins loader failed!");
  }
};

export const loadFavsThunk = () => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}favs`);

      dispatch(loadFavsActionCreator(penguins));
      stopLoadingAction();
    }
  } catch {
    stopLoadingAction();
    wrongAction("Penguins Favs loader failed!");
  }
};
