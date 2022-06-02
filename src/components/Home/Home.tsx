import { NavLink } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <div className="info">
      <header></header>
      <h2> AdoptaUnPingüino.com </h2>
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
