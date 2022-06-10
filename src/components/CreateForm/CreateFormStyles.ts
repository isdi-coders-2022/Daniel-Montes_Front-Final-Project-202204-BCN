import styled from "styled-components";
import iconHamburguer from "../../images/menu_hamburguer.png";
import iconBack from "../../images/button-back.png";
import iconFavs from "../../images/icon-folder-starred.png";
import iconMenuFavs from "../../images/favorite_star_iconPlus.png";
import iconLike from "../../images/heartLike.png";
import iconAddFav from "../../images/icon-folder-edit.png";
import iconHome from "../../images/icon-home.png";
import iconLogout from "../../images/icon-menu-logout.png";

const CreateFormStyles = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  background-size: 200%;
  background-position-x: 80px;
  background-position-y: 230px;
  background-repeat: no-repeat;
  height: 650px;
  text-align: justify;

  form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 70%;
    margin: auto;
    width: 85%;
  }

  .photo {
    width: 100%;
    height: 300px;
  }

  .bt-save {
    color: white;
    background-color: black;
    padding: 14px 20px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    width: 80%;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    font-size: 20px;
    border-radius: 15px;
    align-items: center;
    margin: auto;
  }

  ul,
  li {
    list-style-type: none;
    text-align: left;
    padding-top: 43px;
  }
  h1 {
    font-size: 25px;
    margin-left: 10px;
  }
  h2 {
    font-size: 20px;
    margin-left: 12px;
    margin-top: 43px;
  }
  h1,
  h2 {
    text-align: left;
    color: black;
  }

  a {
    text-decoration: none;
  }

  label {
    display: flex;
    flex-direction: column;
    width: 80%;
    font-size: 20px;
    margin: auto;
    visibility: hidden;
    height: 5px;
  }
  input#image {
    background-image: url(bg.jpg);
    background-repeat: no-repeat;
    text-indent: 20px;
  }

  input#image:focus {
    background-image: none;
  }
  input {
    border: 2px solid black;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-sizing: border-box;
    color: black;
    font-size: 18px;
    height: 50px;
  }

  input :placeholder {
    font-weight: bolder;
    padding-left: 20px;
    text-align: center;
  }

  .penguin-image {
    width: 90%;
    height: 160px;
    margin: auto;

    border: 2px solid black;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-sizing: border-box;
  }
  nav {
    margin-right: 9px;
  }
  .container {
    width: 100%;
    display: flow-root;
    text-align: right;
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
  .header {
    text-align: right;
  }
  .menu-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  button {
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    border: 0;
  }
  .bt-save {
    width: 100%;
    height: 92px;
    background-repeat: no-repeat;
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
    width: 65px;
    height: 65px;
    background: url(${iconMenuFavs});
    position: relative;
    top: 34px;
    left: -13px;
    margin-top: 20px;
    padding: 0 0 0 0;
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
    left: -28px;
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
`;

export default CreateFormStyles;
