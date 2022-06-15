import { NavLink } from "react-router-dom";
import { stopLoadingAction } from "../Modals/Modals";

const Home = (): JSX.Element => {
  stopLoadingAction();

  return (
    <div className="info">
      <h1 className="display-none"> AdoptaUnPingüino.com </h1>
      <div className="bt-container">
        <NavLink to="/login" className="link">
          <button className="bt-login">Login</button>
        </NavLink>
        <NavLink to="/register" className="link">
          <button className="bt-register">Register</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
