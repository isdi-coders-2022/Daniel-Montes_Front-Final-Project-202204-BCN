import axios from "axios";
import { AppDispatch } from "../../store/store";
import {
  correctAction,
  infoAction,
  stopLoadingAction,
  wrongAction,
} from "../../../../components/Modals/Modals";
import {
  createPenguinActionCreator,
  deletePenguinActionCreator,
  editPenguinActionCreator,
  loadPenguinsActionCreator,
} from "../../features/penguinSlice/penguinSlice";
import { loadPenguinActionCreator } from "../../features/DetailSlice/DetailSlice";
import chalk from "chalk";
import { INewFav } from "../../types/penguin/penguinInterfaces";

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  try {
    infoAction("Loading full list...");
    const token = localStorage.getItem("token");

    if (token) {
      const {
        data: { penguins },
      } = await axios.get(`${process.env.REACT_APP_API_URL}penguins`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(loadPenguinsActionCreator(penguins));

      stopLoadingAction();
    }
  } catch (error) {
    wrongAction(chalk.red(`ERROR: ${this} Exiting with error:  ${error}`));

    stopLoadingAction();
  }
};

export const loadFavsThunk = () => async (dispatch: AppDispatch) => {
  try {
    infoAction("Loading favs...");
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
        infoAction("No favorites found");
        return;
      }
      dispatch(loadPenguinsActionCreator(penguins));
    }
  } catch (error) {
    stopLoadingAction();
    wrongAction(`ERROR: ${this} Exiting with error:  ${error}`);
  }
};

export const createFavThunk =
  (formPenguin: INewFav) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    infoAction("Creating fav...");
    try {
      if (token) {
        const { data: penguin } = await axios.post(
          `${process.env.REACT_APP_API_URL}penguins`,
          formPenguin,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(createPenguinActionCreator(penguin));
      }
    } catch (error) {
      wrongAction("Sorry, error saving fav...");
    }
  };

export const getPenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      infoAction("Getting info...");
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
    } catch (error) {
      wrongAction(`ERROR: ${this} Exiting with error:  ${error}`);

      stopLoadingAction();
    }
  };

export const deletePenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      infoAction("Deleting...");
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
    } catch (error) {
      wrongAction(`ERROR: ${this} Exiting with error:  ${error}`);

      stopLoadingAction();
    }
  };

export const editPenguinThunk =
  (idPenguin: string, formPenguin: INewFav) =>
  async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");

    try {
      infoAction("Editing...");
      if (token) {
        const { data: responsePenguin } = await axios.put(
          `${process.env.REACT_APP_API_URL}penguins/${idPenguin}`,
          formPenguin,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(editPenguinActionCreator(responsePenguin));
      }
    } catch (error) {
      wrongAction(chalk.red(`ERROR: EDIT Penguin ${this} -> Error:  ${error}`));

      stopLoadingAction();
    }
  };
