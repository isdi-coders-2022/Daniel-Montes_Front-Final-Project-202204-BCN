import { useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { Modal } from "../Modals/ModalPrompt";
import { getUserThunk } from "../../app/redux/thunks/userThunk/userThunk";
import {
  loadFavsThunk,
  loadPenguinsThunk,
  resetPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import "../../Styles/NavbarStyles.css";
import { toPascalCase } from "../../utils/utils";
import { promptMessageActionCreator } from "../../app/redux/features/uiSlice/uiSlice";

let doOnce = true;

interface Props {
  headerTitle: string;
}

const Navbar = ({ headerTitle }: Props): JSX.Element => {
  const [isMenuOpen, setMenu] = useState(false);
  const [isModalOpen, setModal] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useAppSelector((state) => state.user);
  const { promptMessage } = useAppSelector((state) => state.ui);

  if (id && doOnce) {
    dispatch(getUserThunk(id));
    doOnce = false;
  }

  const handleClick = () => {
    const message = "Log out?";
    dispatch(promptMessageActionCreator(message));
    setMenu((prevState) => !prevState);
    setModal((prevState) => !prevState);
  };

  const { image, username } = useAppSelector((state) => state.user);
  const { penguin } = useAppSelector((state) => state.penguins);

  const loadFavs = () => {
    setMenu((prevState) => !prevState);
    headerTitle === "Home" ? loadFavsThunk() : navigate("/penguins/favs");
    navigate("/penguins/favs");
  };

  const loadHome = () => {
    setMenu((prevState) => !prevState);
    headerTitle === "Home" ? loadPenguinsThunk() : navigate("/penguins");
  };

  const toggleSound = () => {
    const message = "Toggle Sound?";
    dispatch(promptMessageActionCreator(message));

    setMenu((prevState) => !prevState);
    setModal((prevState) => !prevState);
  };

  const addFav = () => {
    setMenu((prevState) => !prevState);
    dispatch(resetPenguinThunk());

    navigate("/create");
  };

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const handleBack = () => {
    if (headerTitle === "Favourites") {
      navigate("/penguins");
    } else {
      navigate("/penguins/favs");
    }
  };

  const handleEdit = (event: React.FormEvent) => {
    dispatch(getUserThunk(id));
    navigate(`/users/edit/${id}`);
  };

  const HidderBack =
    document.location.href.includes("/login") ||
    document.location.href.includes("/homepage") ||
    document.location.href.includes("/register") ||
    document.location.href.substring(
      document.location.href.length,
      document.location.href.length - 3
    ) === "ins"
      ? " display-none"
      : "";

  const HidderMenu =
    document.location.href.includes("/homepage") ||
    document.location.href.includes("/login") ||
    document.location.href.includes("/register")
      ? " display-none"
      : "";

  return (
    <div className="app">
      <div className="header">
        <button className={`bt-back${HidderBack}`} onClick={handleBack} />
        <h1>{headerTitle || "AdoptAPenguin.com"}</h1>

        <button className={`menu-btn${HidderMenu}`} onClick={handleMenu} />
      </div>
      <div className="nav">
        <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
          <div className="menu-header">
            <div className="menu-header-horizontal">
              <div className="menu-icons-horizontal">
                <button
                  onClick={handleClick}
                  className="bt-logout"
                  title="btn-logout"
                />

                <span className="label-login">Logout</span>

                <button
                  onClick={toggleSound}
                  className="bt-sound"
                  title="bt-sound"
                />

                <span className="menu-icon-label sound-on">On/</span>
                <span className="menu-icon-label sound-off">Off</span>
              </div>
            </div>

            <hr className="hr-menu-horizontal" />
            <div className="user-data-container">
              <img src={image} className="user-photo" alt="user" />
              <h3 className="user-username">{toPascalCase(`${username}`)}</h3>
              <button
                className={`animated animatedEdit`}
                onClick={handleEdit}
              />
            </div>
            <div className="menu-header-vertical">
              <div className="menu-icons-vertical">
                <hr className="hr-photo" />
                <button onClick={loadHome} className="bt-home" title="bt-home">
                  <h3 className="menu-icon-label-vertical">Home</h3>
                </button>

                <button onClick={loadFavs} className="bt-favs" title="bt-favs">
                  <h3 className="menu-icon-label-vertical">Favourites</h3>
                </button>

                <button onClick={addFav} className="bt-addfav" title="bt-fav">
                  <h3 className="menu-icon-label-vertical">New...</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          type="logOutUser"
          idPenguin={penguin.id}
          message={promptMessage}
          closeModal={setModal}
        />
      )}

      <ReactDimmer
        isOpen={isMenuOpen}
        exitDimmer={setMenu}
        zIndex={90}
        blur={1.5}
      />
      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={90}
        blur={1.5}
      />
    </div>
  );
};

export default Navbar;
