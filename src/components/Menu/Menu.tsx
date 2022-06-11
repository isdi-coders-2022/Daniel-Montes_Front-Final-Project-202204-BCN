import * as React from "react";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { Link, useNavigate } from "react-router-dom";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { infoAction, stopLoadingAction } from "../Modals/Modals";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    infoAction("Login out...");

    dispatch(logOutActionCreator());
    localStorage.removeItem("token");

    stopLoadingAction();
    navigate("/");
  };

  const loadFavs = () => {
    infoAction("Loading Favs...");

    dispatch(loadPenguinsThunk());

    navigate("/favs");
  };

  const loadHome = () => {
    infoAction("Loading Home...");

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
            <Link to="/homepage">
              <button onClick={loadHome} className="bt-home" title="bt-home" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/create">
              <button onClick={addFav} className="bt-addfav" />
              <span>New...</span>
            </Link>
          </li>
          <li>
            <Link to="/favs">
              <button onClick={loadFavs} className="bt-favs-menu" />
              <span>Favourites</span>
            </Link>
          </li>

          <li>
            <hr />
            <Link to="/logout">
              <button onClick={logOutUser} className="bt-logout" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
