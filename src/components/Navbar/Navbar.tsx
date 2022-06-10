import { ReactDimmer } from "react-dimmer";
import { useState } from "react";
import { NavbarStyles } from "./NavbarStyles";
import { Menu } from "../Menu/Menu";

const Navbar = (): JSX.Element => {
  const [isMenuOpen, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <NavbarStyles className="app">
      <div className="header">
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
