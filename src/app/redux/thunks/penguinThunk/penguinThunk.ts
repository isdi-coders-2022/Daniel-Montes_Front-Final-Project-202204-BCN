import axios from "axios";
import { AppDispatch } from "../../store/store";
import {
  setLoadingOffWithMessage,
  setLoadingOn,
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
  dispatch(loadingActionCreator());
  setLoadingOn("GET penguins...");
  const token = localStorage.getItem("token");

  try {
    if (token) {
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}penguins`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(loadPenguinsActionCreator(penguins));
      dispatch(finishedLoadingActionCreator());

      setLoadingOffWithMessage("GET penguins: Finished successfully!", false);
    }
  } catch (error) {
    dispatch(finishedLoadingActionCreator());

    setLoadingOffWithMessage(`GET Penguins: ERROR--> (Error:  ${error})`, true);
  }
};

export const loadFavsThunk = () => async (dispatch: AppDispatch) => {
  try {
    setLoadingOn("GET Favs...");
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
        setLoadingOffWithMessage("GET favs: No favs added yet", false);
      }
      dispatch(loadPenguinsActionCreator(penguins));
      dispatch(finishedLoadingActionCreator());

      setLoadingOffWithMessage("GET favs: Finished successfully!", false);
    }
  } catch (error) {
    dispatch(finishedLoadingActionCreator());

    setLoadingOffWithMessage(`GET favs: ERROR--> ${error}`, true);
  }
};

export const createFavThunk =
  (formPenguin: any) => async (dispatch: AppDispatch) => {
    setLoadingOn("CREATE FAV: Creating...");

    const token = localStorage.getItem("token");
    if (token) {
      const { data: penguin } = await axios.post(
        `${process.env.REACT_APP_API_URL}penguins/create`,
        formPenguin,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "mutipart/form-data",
          },
        }
      );

      dispatch(createPenguinActionCreator(penguin));
      dispatch(finishedLoadingActionCreator());

      setLoadingOffWithMessage("CREATE Fav: Finished successfully.", false);
    } else {
      setLoadingOffWithMessage("GET favs: Sorry, no token no cookies...", true);
    }
  };

export const getPenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      if (id !== "") {
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
          dispatch(finishedLoadingActionCreator());
        }
      }
    } catch (error) {
      setLoadingOffWithMessage(`GET Penguin: ERROR--> ${error}`, true);
      dispatch(finishedLoadingActionCreator());
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

        dispatch(finishedLoadingActionCreator());
        setLoadingOffWithMessage(
          "DELETE Penguin: Finished successfully!",
          false
        );
      }
    } catch (error) {
      setLoadingOffWithMessage(`DELETE Penguin: ERROR--> ${error}`, true);
      dispatch(finishedLoadingActionCreator());
    }
  };

export const editPenguinThunk =
  (formPenguin: any, type: string) => async (dispatch: AppDispatch) => {
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

        dispatch(finishedLoadingActionCreator());

        setLoadingOffWithMessage(`EDIT Penguin: Finished successfully.`, false);
      }
    } catch (Error) {
      setLoadingOffWithMessage(
        `EDIT Penguin: Exiting with error: ${Error}`,
        true
      );
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
    dispatch(finishedLoadingActionCreator());

    setLoadingOffWithMessage("RESET Penguin: Finished successfully.", false);
  } catch (error) {
    dispatch(finishedLoadingActionCreator());
    setLoadingOffWithMessage(
      `RESET Penguin: ERROR: ${this} Exiting with error:  ${error}`,
      true
    );
  }
};
