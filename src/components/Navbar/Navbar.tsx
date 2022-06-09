import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { loadFavsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";

import { correctAction, infoAction, stopLoadingAction } from "../Modals/Modals";


const Navbar = () => {
  const location = document.location.pathname;
  const dispatch = useAppDispatch();

  const hideBackButton = !location.includes("penguins")
    ? "display-block"
    : "display-none";

  const navigate = useNavigate();

  const logOutUser = () => {

    localStorage.removeItem("token");
    correctAction("Logged out!");
    navigate("/");

    stopLoadingAction();
  };

  const loadFavs = () => {
    infoAction("Loading Favs...");
    dispatch(loadFavsThunk());
    navigate("/favs");

    stopLoadingAction();
  };

  const loadBack = () => {
    infoAction("Back loading...");
    navigate("/penguins");

    stopLoadingAction();
  };

  const loadHome = () => {
    infoAction("Loading Home...");
    navigate("/penguins");

    stopLoadingAction();
  };

  const loadMenu = () => {
    infoAction("Feature not implemented yet...");

    stopLoadingAction();
  };

  return (
    <div className="menu-container">
      <div className={hideBackButton}>
        <button onClick={loadBack} className="bt-back" />
      </div>
      <button onClick={loadHome} className="bt-home" title="bt-home" />
      <button onClick={loadFavs} className="bt-favs-menu" />
      <button onClick={logOutUser} className="bt-logout" />
      <button onClick={loadMenu} className="bt-menu" />
    </div>
  );
};

export default Navbar;
