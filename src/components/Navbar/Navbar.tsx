import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";
import { useNavigate } from "react-router-dom";
import { loadFavsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { infoAction } from "../Modals/Modals";

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
    navigate("/");
  };

  const loadFavs = () => {
    infoAction("Loading Favs...");
    dispatch(loadFavsThunk());
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
    infoAction("This feature is not available yet");
  };

  return (
    <div className="menu-container">
      <div className={HiderClass}>
        <button onClick={loadFavs} className="icon-back" />
      </div>
      <button onClick={loadHome} className="bt-home" />
      <button onClick={loadBack} className="bt-back" />
      <button onClick={loadFavs} className="bt-favs" />
      <button onClick={logOutUser} className="bt-logout" />
      <button onClick={loadMenu} className="bt-menu" />
    </div>
  );
};

export default Navbar;
