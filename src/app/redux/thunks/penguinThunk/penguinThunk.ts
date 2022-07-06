import axios from "axios";
import { AppDispatch } from "../../store/store";
import {
  correctAction,
  setLoadingOffWithMessage,
  setLoadingOn,
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
    setLoadingOn("GET penguins...");
    const token = localStorage.getItem("token");

    if (token) {
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}penguins`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setLoadingOffWithMessage("GET penguins finished successfully!", false);
      dispatch(loadPenguinsActionCreator(penguins));

      dispatch(finishedLoadingActionCreator);
    }
  } catch (error) {
    dispatch(finishedLoadingActionCreator);
    setLoadingOffWithMessage(`GET Penguins: ERROR. (Error:  ${error})`, true);
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

      dispatch(finishedLoadingActionCreator);

      setLoadingOffWithMessage("GET favs: Finished successfully", false);
    }
  } catch (error) {
    dispatch(finishedLoadingActionCreator);

    setLoadingOffWithMessage(`GET favs: ERROR--> ${error}`, true);
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
        dispatch(finishedLoadingActionCreator());
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
      }
    } catch (error) {
      setLoadingOffWithMessage(`DELETE Penguin: ERROR--> ${error}`, true);
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
        dispatch(loadPenguinsThunk());
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
      originalname: "",
    };

    dispatch(resetPenguinActionCreator(blankFormData));
    correctAction("RESET Penguin: Finished successfully");
    dispatch(finishedLoadingActionCreator());
  } catch (error) {
    wrongAction(`RESET Penguin: ERROR: ${this} Exiting with error:  ${error}`);
    dispatch(finishedLoadingActionCreator());
  }
};
