import menuIcon from "../../images/menu_hamburguer.png";
import buttonBack from "../../images/button-back.png";

const Navbar = () => {
  const location = document.location.pathname;

  const HiderClass = !location.includes("penguins")
    ? "display-block"
    : "modal display-none";

  return (
    <div className="menu-container">
      <div className={HiderClass}>
        <img src={buttonBack} alt="Menu icon" className="menu-button" />
      </div>
      <img src={menuIcon} alt="Menu icon" className="menu-icon" />
    </div>
  );
};

export default Navbar;
