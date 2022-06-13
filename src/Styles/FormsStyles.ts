import styled from "styled-components";
import iconHamburguer from "../images/menu_hamburguer.png";
import iconBack from "../images/icon-back.png";
import iconFavs from "../images/icon-stars.png";
import iconMenuFavs from "../images/star_add_icon.png";
import iconLike from "../images/heartLike.png";
import iconAddFav from "../images/icon-add_plus.png";
import iconHome from "../images/icon-home.png";
import iconDelete from "../images/icon-logout1.png";
import iconSoundOff from "../images/icon-sound-off.png";
import iconSoundOn from "../images/icon-sound-on.png";
import image from "../images/background2Heart.png";
import imagePhotoBackgoud from "../images/contact-photo.png";

const FormsStyles = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  background-image: url(${image});
  background-size: 200%;
  background-position-x: 97px;
  background-position-y: 30px;
  background-repeat: no-repeat;
  height: 690px;
  text-align: center;

  .bt-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 100%;
  }
  .input-likes {
    display: none;
  }
  .bt-login,
  .bt-register {
    color: white;
    background-color: black;
    padding: 14px 20px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    font-size: 20px;
    border-radius: 15px;
    align-items: center;
    margin: auto;
  }

  .header {
    position: fixed;
    right: 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 95%;
  }

  form {
    display: flex;
    flex-direction: column;

    row-gap: 20px;
    width: 100%;
    margin-top: 210px;
  }

  .form-create {
    margin-top: 100px;
  }

  hr {
    width: 40%;
    margin: 35px;
    margin-top: 50%;
  }

  li {
    height: 48px;
    list-style-type: none;
    text-align: left;
    padding-top: 43px;
    width: 200px;
  }

  h1 {
    top: 25px;
    position: relative;
    width: 100%;
    font-size: 18px;
  }

  h2 {
    font-size: 20px;
    margin-left: 12px;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-size: 14px;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 60px;
    padding-bottom: 10px;
    font-size: 20px;
    margin: auto;
    display: none;
  }

  input {
    border: 2px solid black;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-sizing: border-box;
    color: black;
    font-size: 18px;
    height: 60px;
    width: 80%;
    margin: auto;
    background: rgb(207 201 201);
  }

  .submitContainer {
    display: flex;
    width: 100%;
  }

  input :placeholder {
    font-weight: bolder;
    padding-left: 20px;
    text-align: center;
  }

  .penguin-image {
    border: 1px solid;
    border-radius: 5px;
    height: 150px;
    background-image: url(${imagePhotoBackgoud});
    background-color: rgb(207 201 201);
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
  }

  nav {
    margin-right: 9px;
  }

  .container {
    width: 100%;
    display: flow-root;
  }

  span {
    font-size: 20px;
    margin-left: 50px;
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
    margin-left: 5px;
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
    text-align: justify;
  }

  .menu-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: -10px;
  }

  .menu-header {
    width: 100%;
    margin-top: 30%;
  }

  button {
    color: white;
    padding: 14px 20px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    width: 80%;
    display: flex;
    justify-content: center;
    font-size: 20px;
    border-radius: 15px;
    align-items: center;
  }

  .bt-delete {
    background: url(${iconDelete});
    height: 65px;
    width: 65px;
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
    border-radius: 10px;
    margin-right: 20px;
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
  .menu-icons-lower {
    display: flex;
    flex-direction: row;
    margin: auto;
    bottom: 20px;
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

  .bt-addfav {
    width: 65px;
    height: 65px;
    background: url(${iconAddFav});
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .penguin-image-container {
    box-shadow: 0 3px 6px #666;
    padding: 10px 10px 150px 10px;
    margin-bottom: 10px;
    border-radius: 5px 5px 5px 5px;
    margin: auto;
    text-align: center;
    width: 100%;
  }

  .penguins-container {
    border-radius: 8px;
    padding: 0 10px 15px;
    margin-top: 70px;
    text-align: center;
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

  .bt-save {
    margin: auto;
    background-color: black;
  }

  .bt-register {
    color: white;
    background-color: black;
    padding: 14px 20px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    font-size: 20px;
    border-radius: 15px;
    align-items: center;
    margin: auto;
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
  .penguin-container {
    display: flex;
    margin-top: 80px;
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

    max-height: 55vh;
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

export default FormsStyles;
