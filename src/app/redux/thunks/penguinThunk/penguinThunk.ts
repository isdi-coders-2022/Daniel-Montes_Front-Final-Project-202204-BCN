import axios from "axios";
import { loadPenguinsActionCreator } from "../../features/penguinSlice/penguinSlice";
import { AppDispatch } from "../../store/store";

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { checks },
    } = await axios.get(`${process.env.REACT_APP_API_URL}penguins`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(loadPenguinsActionCreator(checks));
  }
};
