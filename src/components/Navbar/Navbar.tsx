import "../../Styles/NavbarStyles.css";
import { useState } from "react";
import { Menu } from "../Menu/Menu";
import { ReactDimmer } from "react-dimmer";
import { correctAction, infoAction, stopLoadingAction } from "../Modals/Modals";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setMenu] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutUser = () => {
    infoAction("Logging out...");
    dispatch(logOutActionCreator());
    localStorage.removeItem("token");
    correctAction("Logged out!");
    navigate("/");
  };

  const loadFavs = () => {
    setMenu((prevState) => !prevState);

    navigate("/penguins/favs");
  };

  const loadHome = () => {
    infoAction("Loading Home...");
    setMenu((prevState) => !prevState);
    dispatch(loadPenguinsThunk());

    navigate("/penguins");
    stopLoadingAction();
  };

  const toggleSound = () => {
    setMenu((prevState) => !prevState);
    infoAction("Sorry nois this feature is not yet implemented");
  };

  const addFav = () => {
    setMenu((prevState) => !prevState);
    navigate("/create");
  };
  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const handleBack = () => {
    dispatch(loadPenguinsThunk());

    stopLoadingAction();
    navigate("/penguins");
  };

  const HidderBack =
    !document.location.href.includes("/detail/") &&
    !document.location.href.includes("/favs") &&
    !document.location.href.includes("/edit")
      ? " display-none"
      : "";

  const HidderMenu =
    document.location.href.includes("/homepage") ||
    document.location.href.includes("/login") ||
    document.location.href.includes("/register")
      ? " display-none"
      : "";

  return (
    <>
      <div className="app">
        <div className="header">
          <button className={`bt-back${HidderBack}`} onClick={handleBack} />
          <h1>AdoptAPenguin.com</h1>
          <button className={`menu-btn${HidderMenu}`} onClick={handleMenu} />
          <div className="nav"></div>
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} />
      <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="menu-header">
          <div className="menu-header-horizontal">
            <ul className="menu-icons-horizontal">
              <li>
                <ul>
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
                </ul>
              </li>
              <li>
                <ul>
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
              </li>
            </ul>
          </div>
          <hr />

          <div className="menu-header-vertical">
            <ul className="menu-icons-vertical">
              <li>
                <button
                  onClick={loadHome}
                  className="bt-home"
                  title="bt-home"
                />
                <h3 className="menu-icon-label-vertical">Home</h3>
              </li>
              <li>
                <button
                  onClick={loadFavs}
                  className="bt-favs"
                  title="bt-favs"
                />
                <h3 className="menu-icon-label-vertical">Favourites</h3>
              </li>
              <li>
                <button onClick={addFav} className="bt-addfav" title="bt-fav" />
                <h3 className="menu-icon-label-vertical">New...</h3>
              </li>
            </ul>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={100}
        blur={1.5}
      />
    </>
  );
};

export default Navbar;
