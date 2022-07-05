import axios from "axios";
import { AppDispatch } from "../../store/store";
import {
  correctAction,
  wrongAction,
} from "../../../../components/Modals/Modals";
import {
  createPenguinActionCreator,
  deletePenguinActionCreator,
  editPenguinActionCreator,
  loadPenguinsActionCreator,
  resetPenguinActionCreator,
  loadPenguinActionCreator,
} from "../../features/penguinSlice/penguinSlice";

import { IPenguin } from "../../types/penguin/penguinInterfaces";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice/uiSlice";

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingActionCreator());
    const token = localStorage.getItem("token");

    if (token) {
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}penguins`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      try {
        dispatch(loadPenguinsActionCreator(penguins));
        correctAction("GET Penguins: Finished successfully");
        dispatch(finishedLoadingActionCreator);
      } catch (error) {
        dispatch(finishedLoadingActionCreator);
        wrongAction(
          `GET Penguins: ERROR loading full list. (Error:  ${error})`
        );
      }
    }
  } catch (error) {
    dispatch(finishedLoadingActionCreator);
    wrongAction(`GET Penguins: ERROR loading full list. (Error:  ${error})`);
  }
};

export const loadFavsThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingActionCreator());
    const token = localStorage.getItem("token");

    if (token) {
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}penguins/favs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (penguins.length === 0) {
        correctAction("GET favs: No favorites found for this user.");
      }
      dispatch(loadPenguinsActionCreator(penguins));

      correctAction("GET favs: Finished successfully");
      dispatch(finishedLoadingActionCreator);
    }
  } catch (error) {
    dispatch(finishedLoadingActionCreator);
    wrongAction(`ERROR: ${this} Exiting with error:  ${error}`);
  }
};

export const createFavThunk =
  (formPenguin: FormData) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const { data: penguin } = await axios.post(
          `${process.env.REACT_APP_API_URL}penguins/create`,
          formPenguin,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(createPenguinActionCreator(penguin));
        correctAction("CREATE Fav: Finished successfully");
      } else {
        wrongAction("CREATE Fav: Sorry, no token no cookies...");
      }
    } catch (error) {
      wrongAction(`CREATE fav: Exiting with error:  ${error}`);
    }
  };

export const getPenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
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
        correctAction("GET Penguin: Finished successfully");
        dispatch(finishedLoadingActionCreator());
      }
    } catch (error) {
      wrongAction(`ERROR: ${this} Exiting with error:  ${error}`);
    }
  };

export const deletePenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
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
        correctAction("DELETE Penguin: Finished successfully");
        dispatch(finishedLoadingActionCreator());
      }
    } catch (error) {
      wrongAction(`DELETE Penguin: Exiting with error:  ${error}`);
      dispatch(finishedLoadingActionCreator());
    }
  };

export const editPenguinThunk =
  (formPenguin: IPenguin, type: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const token = localStorage.getItem("token");

      if (token) {
        const { data: penguin } = await axios.put(
          `${process.env.REACT_APP_API_URL}penguins/${formPenguin.id}?task=${type}`,
          formPenguin,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(editPenguinActionCreator(penguin));

        correctAction("EDIT Penguin: Finished successfully");
        dispatch(finishedLoadingActionCreator());
      }
    } catch (Error) {
      wrongAction(`EDIT Penguin: Exiting with error: ${Error}`);
      dispatch(finishedLoadingActionCreator());
    }
  };

export const resetPenguinThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingActionCreator());

    const blankFormData: IPenguin = {
      id: "",
      name: "",
      category: "",
      likes: 0,
      likers: [],
      favs: [],
      description: "",
      image: "",
      imageBackup: "",
    };

    dispatch(resetPenguinActionCreator(blankFormData));
    correctAction("RESET Penguin: Finished successfully");
    dispatch(finishedLoadingActionCreator());
  } catch (error) {
    wrongAction(`RESET Penguin: ERROR: ${this} Exiting with error:  ${error}`);
    dispatch(finishedLoadingActionCreator());
  }
};
