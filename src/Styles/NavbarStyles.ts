import styled from "styled-components";
import iconHamburguer from "../images/menu_hamburguer.png";
import iconBack from "../images/icon-back.png";
import iconFavs from "../images/icon-stars.png";
import iconHome from "../images/icon-home.png";
import iconLogout from "../images/icon-logout-white.png";
import iconSoundOff from "../images/icon-sound-off.png";
import iconSoundOn from "../images/icon-sound-on.png";
import iconMenuFavs from "../images/star_add_icon.png";
import iconAddFav from "../images/icon-add_plus.png";

const NavbarStyles = styled.div`
  * {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    background: rgb(233, 233, 233);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    font-family: Roboto;
  }

  button {
    color: white;

    border: none;
    font-weight: bold;
    cursor: pointer;
  }

   .header-container {
    width: 100%;
  }

  .bt-logout {
    background: url(${iconLogout});
    height: 65px;
    width: 65px;
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .bt-addfav {
    width: 65px;
    height: 65px;
    background: url(${iconAddFav});
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .bt-sound {
    background: url(${iconSoundOn});
    height: 65px;
    width: 65px;
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .bt-sound-off {
    background: url(${iconSoundOff});
    height: 65px;
    width: 65px;
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .bt-menu {
    background: url(${iconHamburguer});
    background-repeat: no-repeat;
    margin-right: 20px;
    border: 0;
    width: 36px;
    height: 36px;
  }

  .bt-favs-menu {
    background: url(${iconFavs});
    width: 65px;
    height: 65px;
    background-size: 60%;
    background-repeat: no-repeat;
    z-index: 150;
  }

  .bt-back {
    background: url(${iconBack});
    width: 45px;
    height: 45px;
    margin-left: 10px;
  }

  .menu-header {
    width: 100%;
  }

  .menu-icons-lower {
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: space-around;
    margin-top: 20px;

    align-items: baseline;
    flex-wrap: nowrap;

    list-style-type: none;
    /* display: flex; */
    height: 5%;
    width:80%;
  }

  .bt-home {
    background: url(${iconHome});
    height: 65px;
    width: 65px;
    background-size: 60%;
    background-repeat: no-repeat;
  }
  .bt-favs {
    width: 45px;
    height: 45px;
    background: url(${iconMenuFavs});
    position: relative;
    margin-top: 7px;
  }

  .app {
    width: 100vw;
    height: 100vh;
  }

  header {
    width: 100%;
  }

  .app .header {
    height: 5rem;
    width: 100%;
    background-color: #292929;
    padding: 1rem;
    box-sizing: border-box;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu-icons-vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 30px;
  }

  .menu-icon-label {
    font-size: 20px;
margin-left:5px
    margin-top: 30px;
  }

  .menu-icon-label-vertical {
    font-size: 20px;
    margin-left: 50px;
  }

  .header .menu-btn {
    font-size: 1.75rem;
    cursor: pointer;
  }

  .header .nav {
    display: flex;
    gap: 1rem;
  }

  .header{
        display: flex;
    justify-content: flex-end;
  }
  .app .body {
    height: calc(100% - 5rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app .body button {
    padding: 0.5rem;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
  }

  .app-menu {
    color: white;
    height: 100vh;
    width: 20rem;
    background-color: #292929;
    z-index: 200;
    transform: translateX(-100%);
    transition: 0.3s;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .menu-open {
    transform: translateX(0%);
  }

  hr {
    width: 75%;
    margin: 35px;
    margin-top: 10%;
    margin-bottom: 90px;
  }

  li {
    list-style-type: none;
  }
  .sound-off {
    opacity: 50%;
  }

  .display-none {
    visibility: hidden;
  }
`;

export default NavbarStyles;
