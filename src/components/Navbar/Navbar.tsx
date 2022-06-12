import { ReactDimmer } from "react-dimmer";
import { useState } from "react";
import { NavbarStyles } from "./NavbarStyles";
import { Menu } from "../Menu/Menu";
import { IParameter } from "../../app/redux/types/userInterfaces/userInterfaces";
import { correctAction } from "../Modals/Modals";
import { loadPenguinsThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/redux/hooks/hooks";

const Navbar = ({ title }: IParameter): JSX.Element => {
  const [isMenuOpen, setMenu] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const handleBack = () => {
    correctAction("Loading Home...");

    dispatch(loadPenguinsThunk());

    navigate("/penguins");
  };

  const HidderBack = document.location.href.includes("/penguins")
    ? " display-none"
    : "";

  return (
    <NavbarStyles className="app">
      <div className="header">
        <button className={`bt-back${HidderBack}`} onClick={handleBack} />
        <button className="menu-btn bt-menu" onClick={handleMenu} />
      </div>

      <Menu isMenuOpen={isMenuOpen} />

      <div className="menu-container">
        <ReactDimmer
          isOpen={isMenuOpen}
          exitDimmer={setMenu}
          zIndex={100}
          blur={1.5}
        />
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
