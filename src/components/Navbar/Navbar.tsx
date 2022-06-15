import "../../Styles/NavbarStyles.css";
import { useState } from "react";
import { Menu } from "../Menu/Menu";
import { ReactDimmer } from "react-dimmer";
import { stopLoadingAction } from "../Modals/Modals";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/redux/hooks/hooks";

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setMenu] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    !document.location.href.includes("/favs")
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
