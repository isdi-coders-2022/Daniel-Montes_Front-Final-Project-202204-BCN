import styled from "styled-components";
import iconHamburguer from "../../images/menu_hamburguer.png";
import iconBack from "../../images/button-back.png";
import iconFavs from "../../images/favorite_star_iconPlus2.png";
import iconLogout from "../../images/logoutt.png";
import iconLike from "../../images/heartLike.png";
import iconHome from "../../images/home.png";

const PenguinsPageStyles = styled.div`
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
    align-items: flex-start;
    justify-content: center;
    row-gap: 20px;
    width: 70%;
    margin: auto;
    padding-top: 105px;
  }

  ul,
  li {
    list-style-type: none;
    text-align: left;
  }
  h1 {
    font-size: 25px;
    margin-left: 15px;
  }
  h2 {
    font-size: 20px;
    flex: 3;
    margin-left: 10px;
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
    max-width: 345px;
    max-height: 290px;
  }

  .container {
    width: 100%;
    display: flow-root;
  }

  .category {
    background-color: #f4ba26;
    border-radius: 4px;
    flex: 1;
    margin-bottom: 25px;
    padding-left: 5px;
    box-shadow: 0 3px 6px #666;
  }

  .likes {
    text-align: right;
    flex: 3;
    margin-right: 20px;
  }
  .penguin-description {
    position: relative;
    top: -140px;
    left: 30px;
    width: 84%;
  }
  .menu-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  button {
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    border: 0;
  }

  .bt-logout {
    background: url(${iconLogout});
  }

  .bt-menu {
    background: url(${iconHamburguer});
    border-radius: 10px;
  }

  .bt-favs-menu {
    background: url(${iconFavs});
  }
  .bt-back {
    background: url(${iconBack});
  }

  .bt-home {
    background: url(${iconHome});
    height: 25px;
  }

  .bt-favs {
    background: url(${iconFavs});
    padding: 0 0 0 0;
    width: 65px;
    height: 65px;
    position: relative;
    background-repeat: no-repeat;
    top: 32px;
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
    height: 450px;
  }

  .penguin-title {
    display: flex;
  }

  .penguin-datalist {
    display: flex;
    width: 92%;
    position: relative;
    top: -142px;
    left: 14px;
  }

  .penguin-name,
  .bt-likes {
  }

  .bt-likes {
    width: 32px;
    height: 32px;
    background: url(${iconLike});
    background-repeat: no-repeat;
    padding: 0 0 0 0;
    flex: none;
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

export default PenguinsPageStyles;
