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
  searchPenguinsActionCreator,
  resetPenguinsActionCreator,
} from "../../features/penguinSlice/penguinSlice";

import { IPenguin } from "../../types/penguin/penguinInterfaces";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice/uiSlice";

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

export const loadPenguinsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator());
  setLoadingOn(
    `GET Penguins: Be watter penguin, waking up service at render.com...`
  );
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
    dispatch(finishedLoadingActionCreator());
    setLoadingOffWithMessage("GET Penguins: Finished successfully.", false);
  }
};

export const searchPenguinsThunk =
  (search: string) => async (dispatch: AppDispatch) => {
    dispatch(loadingActionCreator());

    const token = localStorage.getItem("token");

    if (token) {
      const {
        data: { penguins },
      } = await axios.get(
        `${process.env.REACT_APP_API_URL}penguins/search/${{ search }}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      dispatch(searchPenguinsActionCreator(penguins));
      dispatch(finishedLoadingActionCreator());
    }
  };

export const loadFavsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator());
  setLoadingOn(`GET Favourites: Loading data...`);
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
    setLoadingOffWithMessage("GET Favourites: Finished successfully.", false);
    dispatch(loadPenguinsActionCreator(penguins));
    dispatch(finishedLoadingActionCreator());
  }
};

export const loadLikesThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator());
  setLoadingOn(`GET Likes: Loading data...`);
  const token = localStorage.getItem("token");

  if (token) {
    const {
      data: { penguins },
    } = await axios.get(`${process.env.REACT_APP_API_URL}penguins/likes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (penguins.length === 0) {
      setLoadingOffWithMessage("GET Likes: No likes added yet", false);
    }
    setLoadingOffWithMessage("GET Likes: Finished successfully.", false);
    dispatch(loadPenguinsActionCreator(penguins));
    dispatch(finishedLoadingActionCreator());
  }
};

export const createFavThunk =
  (formPenguin: any) => async (dispatch: AppDispatch) => {
    setLoadingOn(`CREATE Fav: Creating fav...`);

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

      setLoadingOffWithMessage(
        `CREATE Fav: ${penguin.name} created successfully.`,
        false
      );
    } else {
      setLoadingOffWithMessage(
        "CREATE fav: Sorry, no token no cookies...",
        true
      );
    }
  };

export const getPenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
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
  };

export const deletePenguinThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    setLoadingOn("DELETE FAV: Deleting...");

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
      setLoadingOffWithMessage("DELETE Penguin: Finished successfully!", false);
    }
  };

export const editPenguinThunk =
  (formPenguin: any, type: string) => async (dispatch: AppDispatch) => {
    setLoadingOn("EDIT Penguin...");

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
      const isLikesPage = document.location.href.includes("likes");

      const isFavsPage = document.location.href.includes("favs");
      const loadType = isFavsPage ? "favs" : isLikesPage ? "likes" : "";

      const handleLoads = (loadType: string) => {
        switch (loadType) {
          case "favs":
            dispatch(loadFavsThunk());
            break;
          case "likes":
            dispatch(loadLikesThunk());
            break;
          default:
            dispatch(loadPenguinsThunk());
            dispatch(getPenguinThunk(formPenguin.id));
        }
      };
      dispatch(editPenguinActionCreator(penguin));

      handleLoads(loadType);
      dispatch(finishedLoadingActionCreator());

      setLoadingOffWithMessage(`${type}`, false);
    }
  };

export const resetPenguinThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator());

  dispatch(resetPenguinActionCreator(blankFormData));
  dispatch(finishedLoadingActionCreator());

  setLoadingOffWithMessage("RESET Penguin: Finished successfully.", false);
};

export const resetPenguinsThunk = () => async (dispatch: AppDispatch) => {
  dispatch(loadingActionCreator());

  dispatch(resetPenguinsActionCreator(blankFormData));
  dispatch(finishedLoadingActionCreator());

  setLoadingOffWithMessage("RESET Penguins: Finished successfully.", false);
};
