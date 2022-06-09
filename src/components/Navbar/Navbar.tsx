import { ReactDimmer } from "react-dimmer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  createFavThunk,
  loadFavsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { infoAction, stopLoadingAction } from "../Modals/Modals";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { NavbarStyles } from "./NavbarStyles";

const Navbar = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const location = document.location.pathname;

  const HiderClass = !location.includes("penguins")
    ? "display-block"
    : "modal display-none";

  const navigate = useNavigate();

  const loadBack = () => {
    infoAction("Back loading...");
    navigate("/penguins");
  };
  const logOutUser = () => {
    infoAction("Login out...");
    dispatch(logOutActionCreator());
    localStorage.removeItem("token");
    stopLoadingAction();
    navigate("/");
  };

  const loadFavs = () => {
    infoAction("Loading Favs...");
    dispatch(loadFavsThunk());
    navigate("/favs");
  };
  const loadHome = () => {
    infoAction("Loading Home...");
    navigate("/penguins");
  };

  const addFav = () => {
    infoAction("Adding to Favs...");
    dispatch(createFavThunk("ID"));
    localStorage.removeItem("token");

    stopLoadingAction();
    navigate("/favs");
  };

  return (
    <NavbarStyles>
      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
      <div className="menu-container">
        <button onClick={loadBack} className={`bt-back ${HiderClass}`} />
        <button onClick={loadHome} className="bt-home" title="bt-home" />
        <button onClick={loadFavs} className="bt-favs-menu" />
        <button onClick={logOutUser} className="bt-logout" />
        <button onClick={addFav} className="bt-addfav" />
        <button onClick={handleMenu} className="menu-btn bt-menu" />
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
