import axios from "axios";
import { AppDispatch } from "../../store/store";
import { stopLoadingAction } from "../../../../components/Modals/Modals";
import { loadPenguinsActionCreator } from "../../features/penguinSlice/penguinSlice";

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { penguins },
    } = await axios.get(`${process.env.REACT_APP_API_URL}penguins`);

    dispatch(loadPenguinsActionCreator(penguins));

    stopLoadingAction();
  }
};
