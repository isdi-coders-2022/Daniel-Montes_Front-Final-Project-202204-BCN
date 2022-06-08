import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { useNavigate } from "react-router-dom";
import { loadFavsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
<<<<<<< refs/remotes/origin/feature/add-checkout-security
import { infoAction, stopLoadingAction } from "../Modals/Modals";
=======
import { correctAction, infoAction, stopLoadingAction } from "../Modals/Modals";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";
>>>>>>> local

let hideMenuStatus = true;

const Navbar = () => {
  const location = document.location.pathname;
  const dispatch = useAppDispatch();

  const hideBackButton = !location.includes("penguins")
    ? "display-block"
    : "display-none";

  let hideMenuClass = hideMenuStatus ? "display-none" : "display-block";
  debugger;
  const navigate = useNavigate();

  const logOutUser = () => {
    infoAction("Login out...");
    localStorage.removeItem("token");
    correctAction("Logged out!");
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
    hideMenuStatus = !hideMenuStatus;
    const result = !hideMenuStatus ? "display-none" : "display-block";
    hideMenuClass = result;
  };

  return (
    <div className="menu-container">
      <div className={hideBackButton}>
        <button onClick={loadBack} className="bt-back" />
      </div>
      <div className={hideMenuClass}>
        <button title="bt-home" onClick={loadHome} className="bt-home" />

        <button onClick={loadFavs} className="bt-favs-menu" />
        <button onClick={logOutUser} className="bt-logout" />
      </div>
      <button onClick={loadMenu} className="bt-menu" />
    </div>
  );
};

export default Navbar;
