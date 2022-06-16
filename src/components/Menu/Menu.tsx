import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import {
  loadFavsThunk,
  loadPenguinsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { infoAction, stopLoadingAction } from "../Modals/Modals";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";
import { useState } from "react";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [, setMenu] = useState(false);

  const loadFavs = () => {
    setMenu((prevState) => !prevState);
    dispatch(loadFavsThunk());
  };

  const logOutUser = () => {
    setMenu((prevState) => !prevState);

    infoAction("Logging out...");
    dispatch(logOutActionCreator());
    localStorage.removeItem("token");
    stopLoadingAction();
    navigate("/");
  };

  const loadHome = () => {
    setMenu((prevState) => !prevState);
    dispatch(loadPenguinsThunk());

    stopLoadingAction();
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
        <div className="menu-header-horizontal">
          <ul className="menu-icons-horizontal">
            <li>
              <button
                onClick={logOutUser}
                className="bt-logout"
                title="bt-logout"
              />
            </li>
            <li>
              <span className="menu-icon-label">Logout</span>
            </li>

            <li>
              <button
                onClick={toggleSound}
                className="bt-sound"
                title="bt-sound"
              />
            </li>
            <li>
              <span className="menu-icon-label sound-on">On/</span>
              <span className="menu-icon-label sound-off">Off</span>
            </li>
          </ul>
        </div>
        <hr />

        <div className="menu-header-vertical">
          <ul className="menu-icons-vertical">
            <li>
              <button onClick={loadHome} className="bt-home" title="bt-home" />
            </li>
            <li>
              <button onClick={loadFavs} className="bt-favs" title="bt-favs" />
            </li>
            <li>
              <button onClick={addFav} className="bt-addfav" title="bt-fav" />
            </li>
          </ul>
          <ul>
            <li>
              <h3 className="menu-icon-label-vertical">New...</h3>
            </li>
            <li>
              <h3 className="menu-icon-label-vertical">Home</h3>
            </li>
            <li>
              <h3 className="menu-icon-label-vertical">Favourites</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
