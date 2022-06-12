import * as React from "react";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { correctAction } from "../Modals/Modals";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";
import { loadFavsThunk } from "../../app/redux/thunks/favThunk/favThunk";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    dispatch(logOutActionCreator());
    localStorage.removeItem("token");

    navigate("/");
    correctAction("Login out...");
  };

  const loadFavs = () => {
    correctAction("Loading Favs...");

    dispatch(loadFavsThunk());

    navigate("/favs");
  };

  const loadHome = () => {
    correctAction("Loading Home...");

    dispatch(loadPenguinsThunk());

    navigate("/penguins");
  };

  const addFav = () => {
    navigate("/create");
  };

  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="menu-header">
        <ul>
          <li>
            <button onClick={loadHome} className="bt-home" title="bt-home">
              {" "}
              <span>Home</span>
            </button>
          </li>
          <li>
            <button onClick={addFav} className="bt-addfav">
              <span>New...</span>
            </button>
          </li>
          <li>
            <button onClick={loadFavs} className="bt-favs-menu">
              <span>Favourites</span>
            </button>
          </li>
        </ul>

        <hr />
        <ul className="menu-icons-lower">
          <li>
            <button onClick={logOutUser} className="bt-logout">
              <span>Logout</span>
            </button>
          </li>
          <li>
            <button onClick={logOutUser} className="bt-sound" />
          </li>
        </ul>
      </div>
    </div>
  );
};
