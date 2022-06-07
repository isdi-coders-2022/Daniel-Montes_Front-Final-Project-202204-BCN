import axios from "axios";
import { loadPenguinsActionCreator } from "../../features/penguinSlice/penguinSlice";

import { AppDispatch } from "../../store/store";
import {
  correctAction,
  // infoAction,
  wrongAction,
} from "../../../../components/Modals/Modals";
import { finishedLoadingActionCreator } from "../../features/uiSlice/uiSlice";

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}penguins`);

      dispatch(loadPenguinsActionCreator(penguins));
    }
  } catch {
    wrongAction("Penguins loader failed!");
  } finally {
    dispatch(finishedLoadingActionCreator());
    correctAction("Penguins loaded!");
  }
};
