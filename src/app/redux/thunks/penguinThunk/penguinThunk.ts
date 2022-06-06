import axios from "axios";
import { loadPenguinsActionCreator } from "../../features/penguinSlice/penguinSlice";

import { AppDispatch } from "../../store/store";
import { wrongAction } from "../../../../components/Modals/Modals";

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
    wrongAction("Something went wrong connecting with the server");
  }
};
