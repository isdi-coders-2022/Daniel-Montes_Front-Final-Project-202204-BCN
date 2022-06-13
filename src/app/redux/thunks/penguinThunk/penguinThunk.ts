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
  loadPenguinsActionCreator,
} from "../../features/penguinSlice/penguinSlice";
import { loadPenguinActionCreator } from "../../features/DetailSlice/DetailSlice";
import chalk from "chalk";

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  try {
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

export const loadFavsThunk =
  (username: string) => async (dispatch: AppDispatch) => {
    try {
      infoAction("Loading Penguins...");
      const token = localStorage.getItem("token");

      if (token) {
        const {
          data: { penguins },
        } = await axios.get(`${process.env.REACT_APP_API_URL}penguins/favs`, {
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

export const createFavThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const {
        data: { newFav },
      } = await axios.post(
        `${process.env.REACT_APP_API_URL}penguins`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "mutipart/form-data",
          },
        }
      );

      dispatch(createPenguinActionCreator(newFav));
      stopLoadingAction();
    } catch (error) {
      wrongAction(chalk.red(`ERROR: ${this} Exiting with error:  ${error}`));

      stopLoadingAction();
    }
  };

export const getPenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
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
      wrongAction(chalk.red(`ERROR: ${this} Exiting with error:  ${error}`));

      stopLoadingAction();
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
        correctAction("Penguin deleted");
      }
    } catch (error) {
      wrongAction(chalk.red(`ERROR: ${this} Exiting with error:  ${error}`));

      stopLoadingAction();
    }
  };
