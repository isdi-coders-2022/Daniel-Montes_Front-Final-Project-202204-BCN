import { NavLink } from "react-router-dom";
import HomePageStyles from "../../pages/HomePage/HomePageStyles";
import { stopLoadingAction } from "../Modals/Modals";

const Home = (): JSX.Element => {
  stopLoadingAction();

  return (
    <HomePageStyles className="info">
      <h1> AdoptAPenguin.com </h1>
      <div className="bt-container">
        <NavLink to="/login" className="link">
          <button className="bt-login">Login</button>
        </NavLink>
        <NavLink to="/users/register" className="link">
          <button className="bt-register">Register</button>
        </NavLink>
      </div>
    </HomePageStyles>
  );
};

export default Home;
