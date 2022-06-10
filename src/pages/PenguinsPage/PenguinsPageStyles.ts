import styled from "styled-components";
import iconHamburguer from "../../images/menu_hamburguer.png";
import iconBack from "../../images/button-back.png";
import iconFavs from "../../images/icon-folder-starred.png";
import iconMenuFavs from "../../images/star_add_icon.png";
import iconLike from "../../images/heartLike.png";
import iconAddFav from "../../images/icon-folder-edit.png";
import iconHome from "../../images/icon-home.png";
import iconLogout from "../../images/icon-menu-logout.png";

const PenguinsPageStyles = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  background-size: 200%;
  background-position-x: 80px;
  background-position-y: 230px;
  background-repeat: no-repeat;
  height: 650px;
  text-align: justify;

  .header {
    position: fixed;
    padding-top: 15px;
    right: 20px;
  }
  form {
    row-gap: 20px;
    width: 70%;
    margin: auto;
  }

  ul,
  li {
    list-style-type: none;
    text-align: left;
    padding-top: 43px;
  }
  h1 {
    font-size: 2px;
    margin-left: 10px;
  }
  h2 {
    font-size: 20px;
    margin-left: 12px;
  }
  h1,
  h2 {
    text-align: left;
    color: black;
  }

  a {
    text-decoration: none;
    color: white;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 60px;
    padding-bottom: 10px;
    font-size: 20px;
    margin: auto;
  }
  input {
    border: 2px solid black;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-sizing: border-box;
    color: black;
    font-size: 18px;
    height: 100%;
  }

  input :placeholder {
    font-weight: bolder;
    padding-left: 20px;
    text-align: center;
  }

  .penguin-image {
    border: 1px solid;
    border-radius: 5px;
    width: 340px;
  }
  nav {
    margin-right: 9px;
  }
  .container {
    width: 100%;
    display: flow-root;

    margin-right: 20px;
  }

  .category {
    position: relative;
    top: -140px;
    left: 15px;
    background-color: #ffe02c;
    border-radius: 4px;
    flex: 1;
    margin-bottom: 25px;
    padding-left: 5px;
    box-shadow: 0 3px 6px #666;
  }

  .likes {
    text-align: right;
    flex: 3;
    position: relative;
    top: -140px;
    left: -36px;
  }
  .penguin-description {
    position: relative;
    top: -140px;
    left: 18px;
    width: 89%;
  }
  .menu-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: -10px;
  }

  button {
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    border: 0;
  }

  .bt-logout {
    background: url(${iconLogout});
    height: 65px;
    width: 65px;
  }

  .bt-menu {
    background: url(${iconHamburguer});
    border-radius: 10px;
  }

  .bt-favs-menu {
    background: url(${iconFavs});
    width: 65px;
    height: 65px;
  }

  .bt-back {
    background: url(${iconBack});
    width: 65px;
    height: 65px;
  }

  .bt-home {
    background: url(${iconHome});
    height: 65px;
    width: 65px;
  }

  .bt-favs {
    width: 45px;
    height: 45px;
    background: url(${iconMenuFavs});
    position: relative;
    margin-top: 7px;
  }

  .bt-addfav {
    width: 65px;
    height: 65px;
    background: url(${iconAddFav});
  }
  .penguin-image-container {
    box-shadow: 0 3px 6px #666;
    padding: 10px 10px 150px 10px;
    margin-bottom: 10px;
    border-radius: 5px 5px 5px 5px;
    margin: auto;
    text-align: center;
  }
  .penguin-container {
    border-radius: 8px;
    padding: 0 10px 15px;
    height: 440px;
  }

  .penguin-datalist,
  .penguin-title {
    display: flex;
    height: 40px;
  }

  .penguin-name,
  .bt-likes {
    flex: 3;
  }

  .bt-likes {
    width: 32px;
    height: 32px;
    background: url(${iconLike});
    background-repeat: no-repeat;
    padding: 0 0 0 0;
    position: relative;
    top: -140px;
    left: -10px;
  }

  .bt-register {
    width: 80px;
    color: white;
    background-color: black;
    padding: 14px 20px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.9;
    font-size: 20px;
    border-radius: 15px;
  }

  .link {
    margin: auto;
  }

  .submitContainer {
    display: flex;
    width: 100%;
  }

  .display-none {
    visibility: hidden;
  }

  .projectLayout {
    max-width: 90%;
    justify-content: center;
    align-items: center;
    -moz-column-count: 4;
    -webkit-column-gap: 1.5em;
    -moz-column-gap: 1.5em;
    column-gap: 1.5em;
    margin: 1em;
    padding: 1;
    -moz-column-gap: 1em;
    -webkit-column-gap: 1em;
    column-gap: 1em;
    font-size: 0.85em;
    transform: translate(40px, 50px);
  }
  .item {
    display: inline-block;
    background: #fff;
    padding: 0.5em;
    margin: 0 0 1.5em;
    max-width: 17rem;
    max-height: 50vh;
    -webkit-transition: 0.5s;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-shadow: 2px 2px 10px rgb(140, 134, 134);
    border-radius: 2px 2px 2px 2px;
    flex-wrap: wrap;
  }
  .item img {
    max-width: 100%;
    max-height: 20vh;
  }
  .item:nth-of-type(4n + 1) {
    transform: rotate(5deg);
    transition: all 0.35s;
  }
  .item:nth-of-type(4n + 2) {
    transform: rotate(-5deg);
    transition: all 0.35s;
  }
  .item:nth-of-type(4n + 3) {
    transform: rotate(3deg);
    transition: all 0.35s;
  }
  .item:nth-of-type(4n + 4) {
    transform: rotate(-3deg);
    transition: all 0.35s;
  }
  .item:nth-of-type(4n + 5) {
    transform: rotate(3deg);
    transition: all 0.35s;
  }
  .item:hover {
    transform: rotate(15deg);
  }
`;

export default PenguinsPageStyles;
