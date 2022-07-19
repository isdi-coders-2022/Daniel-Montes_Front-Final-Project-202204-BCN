import { useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { Modal } from "../Modals/ModalPrompt";
import {
  getPenguinThunk,
  loadFavsThunk,
  loadPenguinsThunk,
  resetPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import "../../Styles/NavbarStyles.css";
import { toPascalCase } from "../../utils/utils";
import {
  modalMessageActionCreator,
  modalTypeActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";

interface Props {
  headerTitle: string;
}

const Navbar = ({ headerTitle }: Props): JSX.Element => {
  const [isMenuOpen, setMenu] = useState(false);
  const [isModalOpen, setModal] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id, image, username } = useAppSelector((state) => state.user);
  const { modalMessage } = useAppSelector((state) => state.ui);
  const { modalType } = useAppSelector((state) => state.ui);
  const { penguin } = useAppSelector((state) => state.penguins);
  const { headerLastTitle } = useAppSelector((state) => state.ui);

  const handleClick = () => {
    const message = "Log out?";
    const newModalType = "logOutUser";

    dispatch(modalTypeActionCreator(newModalType));
    dispatch(modalMessageActionCreator(message));

    setMenu((prevState) => !prevState);
    setModal((prevState) => !prevState);
  };

  const handleSearch = () => {
    const message = "Search: ";
    const newModalType = "Search";

    dispatch(modalTypeActionCreator(newModalType));
    dispatch(modalMessageActionCreator(message));

    setModal((prevState) => !prevState);
  };

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
    const newModalType = "Sound";

    dispatch(modalTypeActionCreator(newModalType));
    dispatch(modalMessageActionCreator(message));

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
    switch (headerLastTitle) {
      case "Home":
        navigate("/penguins");
        break;
      case "Favourites":
        navigate("/penguins/favs");
        break;
      case "HomePage":
        navigate("/penguins");
        break;
      case "Edit...":
        navigate("/penguins/favs");

        break;
      default:
        navigate("/penguins");
    }
  };

  const handleEdit = () => {
    setMenu((prevState) => !prevState);

    dispatch(getPenguinThunk(id));
    navigate(`/penguins/edit/${id}`);
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

  const HidderSearch =
    document.location.href.substring(
      document.location.href.length - 3,
      document.location.href.length
    ) !== "ins"
      ? " display-none"
      : "";

  return (
    <div className="app">
      <div className="header">
        <button className={`bt-back${HidderBack}`} onClick={handleBack} />
        <h1 className="header-title">{headerTitle || "AdoptAPenguin.com"}</h1>
        <button className={`bt-search${HidderSearch}`} onClick={handleSearch} />
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
          type={modalType}
          idPenguin={penguin.id}
          message={modalMessage}
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
