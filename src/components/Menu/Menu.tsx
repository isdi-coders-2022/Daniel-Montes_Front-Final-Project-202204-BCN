import * as React from "react";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { correctAction, infoAction, stopLoadingAction } from "../Modals/Modals";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    infoAction("Logging out...");
    dispatch(logOutActionCreator());
    localStorage.removeItem("token");
    correctAction("Logged out!");
    navigate("/");
    stopLoadingAction();
  };

  const loadFavs = () => {
    navigate("/penguins/favs");
  };

  const loadHome = () => {
    infoAction("Loading Home...");

    dispatch(loadPenguinsThunk());

    navigate("/penguins");
    correctAction("Loading Home...");
  };

  const toggleSound = () => {
    infoAction("Sorry nois this feature is not yet implemented");
  };

  const addFav = () => {
    navigate("/create");
  };

  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="menu-header">
        <ul className="menu-icons-lower">
          <li>
            <button
              onClick={logOutUser}
              className="bt-logout"
              title="bt-logout"
            >
              <span className="menu-icon-label">Logout</span>
            </button>
          </li>
          <li>
            <button onClick={toggleSound} className="bt-sound" title="bt-sound">
              <span className="menu-icon-label sound-on">On/</span>
              <span className="menu-icon-label sound-off">Off</span>
            </button>
          </li>
        </ul>
        <hr />
        <ul className="menu-icons-vertical">
          <li>
            <button onClick={loadHome} className="bt-home" title="bt-home">
              {" "}
              <span className="menu-icon-label-vertical">Home</span>
            </button>
          </li>
          <li>
            <button onClick={addFav} className="bt-addfav" title="bt-fav">
              <span className="menu-icon-label-vertical">New...</span>
            </button>
          </li>
          <li>
            <button onClick={loadFavs} className="bt-favs-menu" title="bt-favs">
              <span className="menu-icon-label-vertical">Favourites</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
