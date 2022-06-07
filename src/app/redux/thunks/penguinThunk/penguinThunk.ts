import axios from "axios";
import { loadPenguinsActionCreator } from "../../features/penguinSlice/penguinSlice";
import { AppDispatch } from "../../store/store";
import { infoAction, wrongAction } from "../../../../components/Modals/Modals";
import { finishedLoadingActionCreator } from "../../features/uiSlice/uiSlice";
import { loadFavsActionCreator } from "../../features/favsSlice/favsSlice";

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      infoAction("Loading Penguins...");
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}penguins`);

      dispatch(loadPenguinsActionCreator(penguins));
      dispatch(finishedLoadingActionCreator());
    }
  } catch {
    wrongAction("Penguins loader failed!");
  }
};

export const loadFavsThunk = () => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      infoAction("Loading Favs...");
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}favs`);

      dispatch(loadFavsActionCreator(penguins));
      dispatch(finishedLoadingActionCreator());
    }
  } catch {
    wrongAction("Penguins Favs loader failed!");
  }
};
