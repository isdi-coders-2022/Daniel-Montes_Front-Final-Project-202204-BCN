import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavbarComponenent = styled.div`
  color: black;
  display: flex;
  justify-content: space-around;

  h2 {
    font-size: 22px;
    color: white;
  }
  a {
    text-decoration: none;
  }
`;

const Navbar = () => {
  return (
    <StyledNavbarComponenent>
      <NavLink to="/homepage">
        <h2>Home</h2>
      </NavLink>
      <NavLink to="/favspage">
        <h2>Favs</h2>
      </NavLink>
    </StyledNavbarComponenent>
  );
};

export default Navbar;
