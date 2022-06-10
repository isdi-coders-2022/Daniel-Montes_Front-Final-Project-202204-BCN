import axios from "axios";
import { AppDispatch } from "../../store/store";
import { stopLoadingAction } from "../../../../components/Modals/Modals";
import { loadFavsActionCreator } from "../../features/favsSlice/favsSlice";

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { favs },
    } = await axios.get(`${process.env.REACT_APP_API_URL}favs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(loadFavsActionCreator(favs));

    stopLoadingAction();
  }
};
