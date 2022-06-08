import { useAppDispatch } from "../../app/redux/hooks/hooks";

import { useNavigate } from "react-router-dom";
import { loadFavsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { infoAction, stopLoadingAction } from "../Modals/Modals";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";

const Navbar = () => {
  const location = document.location.pathname;
  const dispatch = useAppDispatch();
  const HiderClass = !location.includes("penguins")
    ? "display-block"
    : "modal display-none";

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
    dispatch(loadFavsThunk());
    navigate("/favs");
  };

  const loadBack = () => {
    infoAction("Back loading...");
    navigate("/penguins");
  };

  const loadHome = () => {
    infoAction("Loading Home...");
    navigate("/penguins");
  };
  const loadMenu = () => {
    infoAction("this feature is not ready yet");
  };

  return (
    <div className="menu-container">
      <div className={HiderClass}>
        <button onClick={loadBack} className="bt-back" />
      </div>
      {/* <div className={showMenu}> */}
      <button title="bt-home" onClick={loadHome} className="bt-home" />

      <button onClick={loadFavs} className="bt-favs-menu" />
      <button onClick={logOutUser} className="bt-logout" />
      <button onClick={loadMenu} className="bt-menu" />
    </div>
    // </div>
  );
};

export default Navbar;
