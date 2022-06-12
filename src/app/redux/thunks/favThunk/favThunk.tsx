import axios from "axios";
import {
  correctAction,
  stopLoadingAction,
} from "../../../../components/Modals/Modals";
import { loadPenguinActionCreator } from "../../features/DetailSlice/DetailSlice";
import {
  loadFavsActionCreator,
  createFavActionCreator,
  deletePenguinActionCreator,
} from "../../features/favsSlice/favsSlice";

import { AppDispatch } from "../../store/store";

export const loadFavsThunk = () => async (dispatch: AppDispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { favs },
    } = await axios.get(`${process.env.REACT_APP_API_URL}penguins/favs`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(loadFavsActionCreator(favs));

    stopLoadingAction();
  }
};

export const createFavThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    const {
      data: { newFav },
    } = await axios.post(
      `${process.env.REACT_APP_API_URL}penguins/create`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "mutipart/form-data",
        },
      }
    );

    dispatch(createFavActionCreator(newFav));
    stopLoadingAction();
  };

export const getPenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    if (token) {
      const { data: penguin } = await axios.get(
        `${process.env.REACT_APP_API_URL}penguins/${id}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(loadPenguinActionCreator(penguin));
    }
  };
export const deletePenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    const { status } = await axios.delete(
      `${process.env.REACT_APP_API_URL}penguins/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (status === 200) {
      dispatch(deletePenguinActionCreator(id));
      correctAction("Penguin deleted");
    }
  };
