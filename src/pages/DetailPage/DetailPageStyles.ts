import styled from "styled-components";
import image from "../../images/background2Heart.png";
import iconHamburguer from "../../images/menu_hamburguer.png";
import iconBack from "../../images/icon-back.png";
import iconFavs from "../../images/icon-stars.png";
import iconMenuFavs from "../../images/star_add_icon.png";
import iconLike from "../../images/heartLike.png";
import iconAddFav from "../../images/icon-add_plus.png";
import iconHome from "../../images/icon-home.png";
import iconLogout from "../../images/icon-logout-white.png";
import iconDelete from "../../images/icon-logout1.png";
import iconSoundOff from "../../images/icon-sound-off.png";
import iconEditar from "../../images/icon-editar.png";

const DetailPageStyles = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  background-image: url(${image});
  background-size: 200%;
  background-position-x: 97px;
  background-position-y: 30px;
  background-repeat: no-repeat;

  text-align: center;

  element.style {
    text-align: center;
  }

  .bt-menu {
    background: url(${iconHamburguer});
    border-radius: 10px;
    margin-right: 20px;
    height: 36px;
    margin: auto;
  }

  .animatedEdit {
    background: url(${iconEditar});
    width: 45px;
    position: relative;
    top: -427px;
    left: 70%;
  }
  ul {
    width: 100%;
    margin: 0 0 0 0;
    padding: 0;
    border-radius: 35px;
    height: 420px;
    background: #fff;
  }
  li {
    list-style-type: none;
    text-align: justify;
  }
  h1 {
    font-size: 234px;
    margin-left: 10px;
  }

  h2 {
    font-size: 16px;
    margin-left: 12px;
  }
  .bt-delete {
    visibility: hidden;
  }
  h1,
  h2 {
    text-align: left;
    color: black;
    font-size: 24px;
  }

  .bt-logout {
    background: url(${iconLogout});
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

  .bt-favs-menu {
    background: url(${iconFavs});
    width: 65px;
    height: 65px;
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .penguin-image-detail {
    background-color: rgb(255 254 254);
    box-shadow: 0 15px 6px #666;
    border: 2px solid;
    border-radius: 10px;
  }

  .penguin-detail-container {
    background-color: rgb(255 254 254);
    box-shadow: 0 15px 6px #666;
    padding: 10px 10px 150px 10px;
    margin-bottom: 10px;
    border-radius: 5px 5px 5px 5px;
    margin: auto;
    text-align: center;
    height: 430px;
    border: 2px solid;
    height: 416px;
  }

  .penguin-image-container {
    width: 100%;
    height: 220px;
    border-radius: 35px;
    border: px solid #fff;
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

    bottom: 20px;
  }
  .display-none {
    display: none;
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
  }

  .penguin-image-detail {
    border-radius: 15px;
    border: 2px solid;
  }

  .penguin-description {
    margin-top: 35px;
    padding-left: 10px;
    font-size: 16px;
  }

  .description-container {
    margin-top: 45px;
    background-color: rgb(255 254 254);
    margin-left: 18px;
    margin-right: 18px;
  }
  .image-delete {
    position: relative;
    top: -140px;
    right: -14px;
    display: flex;
    justify-content: flex-end;
    width: 104%;
  }

  .menu-container {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: -10px;
  }
  .menu-header {
    width: 100%;
  }
  .header {
    width: 100%;
    justify-content: space-between;
  }
  span {
    font-size: 20px;
    margin-left: 100px;
  }

  .category {
    background-color: #ffe02c;
    border-radius: 4px;
    flex: 1;
    margin-bottom: 25px;
    padding-left: 5px;
    box-shadow: 0 3px 6px #666;
    margin-left: 15px;
    height: fit-content;
    width: fit-content;
    font-size: 16px;
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
    display: inline-flex;
    background: #fff;
    padding: 0.5em;
    max-height: 650px;
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

  .animated {
    background-repeat: no-repeat;
    background-position: left top;
    padding-top: 95px;
    margin-bottom: 60px;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animatedLike {
    background-image: url(${iconLike});
    width: 45px;
  }

  .animatedFav {
    background-image: url(${iconMenuFavs});
    width: 45px;
  }

  .animatedDelete {
    background-image: url(${iconDelete});
    width: 45px;
    position: relative;
    top: -250px;
    left: 86%;
  }

  @-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      -webkit-transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }

  .bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
  }
  .header {
    justify-content: space-between;
  }
`;

export default DetailPageStyles;
