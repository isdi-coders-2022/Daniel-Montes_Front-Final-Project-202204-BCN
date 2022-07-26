import { useState } from "react";
import { ReactDimmer } from "react-dimmer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks/hooks";
import { Modal } from "../Modals/ModalPrompt";
import {
  loadFavsThunk,
  loadLikesThunk,
  loadPenguinsThunk,
  resetPenguinThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import "../../Styles/NavbarStyles.css";
import { toPascalCase } from "../../utils/utils";
import {
  modalMessageActionCreator,
  modalTypeActionCreator,
} from "../../app/redux/features/uiSlice/uiSlice";
import noPhoto from "../../images/userPhoto.png";
interface Props {
  headerTitle: string;
}

const Navbar = ({ headerTitle }: Props): JSX.Element => {
  const [isMenuOpen, setMenu] = useState(false);
  const [isModalOpen, setModal] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state);
  const { modalMessage } = useAppSelector((state) => state.ui);
  const { modalType } = useAppSelector((state) => state.ui);
  const { penguin } = useAppSelector((state) => state.penguins);

  const userImage = user.image || noPhoto;

  const handleClick = () => {
    if (headerTitle === "Home") {
      handleSearch();
    } else {
      handleBack();
    }
  };

  const handleLogout = () => {
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

    setMenu(false);
    setModal((prevState) => !prevState);
  };

  const loadFavs = () => {
    setMenu((prevState) => !prevState);
    loadFavsThunk();
    navigate("/penguins/favs");
  };

  const loadLikes = () => {
    setMenu((prevState) => !prevState);
    loadLikesThunk();
    navigate("/penguins/likes");
  };

  const loadHome = () => {
    setMenu((prevState) => !prevState);
    loadPenguinsThunk();
    navigate("/penguins");
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
    switch (headerTitle) {
      case "Favourites":
        navigate("/penguins");
        break;
      case "Detail":
        navigate("/penguins/favs");
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

    navigate(`/users/edit/${user.id}`);
  };

  const HidderBack =
    document.location.href.includes("/login") ||
    document.location.href.includes("/homepage") ||
    document.location.href.includes("/register") ||
    document.location.href.substring(
      document.location.href.length,
      document.location.href.length - 3
    ) === "ins"
      ? " bt-search"
      : " bt-back";

  const HidderMenu =
    document.location.href.includes("/homepage") ||
    document.location.href.includes("/login") ||
    document.location.href.includes("/register")
      ? " display-none"
      : "";

  const isLikesPage = document.location.href.includes("/likes");
  const isFavsPage = document.location.href.includes("/favs");

  const iconHeaderTitle = isLikesPage
    ? " header-likes"
    : isFavsPage
    ? " header-favs"
    : "";

  return (
    <div className="app">
      <div className="header">
        <button
          title="btn-back"
          className={`${HidderBack}`}
          onClick={handleClick}
        />

        <h1 className={`header-title${iconHeaderTitle}`}>
          {headerTitle || "AdoptAPenguin.com"}
        </h1>

        <button className={`menu-btn${HidderMenu}`} onClick={handleMenu} />
      </div>
      <div className="nav">
        <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
          <div className="menu-header">
            <div className="menu-header-horizontal">
              <hr className="hr-menu-horizontal" />
              <div className="menu-icons-horizontal">
                <button
                  onClick={handleLogout}
                  className="bt-logout"
                  title="btn-logout"
                />
                <button
                  onClick={loadHome}
                  className="bt-home"
                  title="bt-home"
                />
              </div>
            </div>

            <div className="user-data-container">
              <img src={userImage} className="user-photo" alt="user" />
              <h3 className="user-username">
                {toPascalCase(`${user.username}`)}
              </h3>
              <button
                className={`animated menu-animatedEdit`}
                onClick={handleEdit}
              />
            </div>
            <div className="menu-header-vertical">
              <div className="menu-icons-vertical">
                <hr className="hr-photo" />
                <button
                  onClick={loadLikes}
                  className="bt-likes"
                  title="bt-likes"
                >
                  <h3 className="menu-icon-label-vertical">Likes</h3>
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
