import axios from "axios";
import {
  correctAction,
  stopLoadingAction,
} from "../../../../components/Modals/Modals";
import {
  createFavActionCreator,
  deleteFavActionCreator,
} from "../../features/favsSlice/favsSlice";
import { AppDispatch } from "../../store/store";

export const deleteFavThunk = (id: string) => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  const { status } = await axios.delete(
    `${process.env.REACT_APP_API_URL}favs/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (status === 200) {
    dispatch(deleteFavActionCreator(id));
    correctAction("Deleted!");
  }
  stopLoadingAction();
};

export const createFavThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    const {
      data: { newFav },
    } = await axios.post(`${process.env.REACT_APP_API_URL}create`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "mutipart/form-data",
      },
    });
    dispatch(createFavActionCreator(newFav));
    stopLoadingAction();
  };