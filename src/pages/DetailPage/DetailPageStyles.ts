import styled from "styled-components";
import iconHamburguer from "../../images/menu_hamburguer.png";
import iconBack from "../../images/icon-back.png";
import iconFavs from "../../images/icon-stars.png";
import iconMenuFavs from "../../images/fav-add-32.png";
import iconMenuFavsDelete from "../../images/fav-delete-32.png";
import iconLike from "../../images/heartLike.png";
import iconAddFav from "../../images/icon-add_plus.png";
import iconHome from "../../images/icon-home.png";
import iconLogout from "../../images/icon-logout-white.png";
import iconDelete from "../../images/delete-32.png";
import iconSoundOff from "../../images/icon-sound-off.png";
import iconEdit from "../../images/icon-editar32.png";
import iconLikeInit from "../../images/icon-likes-empty.png";

const DetailPageStyles = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  text-align: justify;

  element.style {
    text-align: center;
  }

  button {
    cursor: pointer;
  }

  .bt-menu {
    background: url(${iconHamburguer});
    border-radius: 10px;
    margin-right: 20px;
    height: 36px;
    margin: auto;
  }

  ul {
    width: 100%;
    margin: 0 0 0 0;
    padding: 0;
    border-radius: 35px;
    height: fit-content;
    background: #fff;
  }

  li {
    list-style-type: none;
    text-align: justify;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
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

  .modal-message {
    color: black;
    text-align: center;
  }

  .detail-image {
    background-color: rgb(255 254 254);
    box-shadow: 0 15px 6px #666;
    border: 2px solid;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    max-width: 730px;

    margin-top: -30px;
  }

  .penguin--container {
    background-color: rgb(255 254 254);
    box-shadow: 0 15px 6px #666;
    padding: 10px 10px 150px 10px;
    margin-bottom: 10px;
    border-radius: 5px 5px 5px 5px;
    margin: auto;
    text-align: center;
    height: 430px;
    border: 2px solid;
    height: fit-content;
    width: auto;
    margin-top: 5remx;
  }

  .detail-container {
    background-color: rgb(255 254 254);
    padding: 10px 10px 150px 10px;
    margin-bottom: 10px;
    border-radius: 5px 5px 5px 5px;
    margin: auto;
    width: auto;
    margin-top: 5rem;
  }

  .penguin-image-container {
    width: 100%;
    height: 100%;
    border-radius: 35px;
    border: px solid #fff;
  }

  .detail-buttons-container {
    display: flex;
    justify-content: space-between;
    align-content: space-around;
    height: 50px;
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

  .bt-edit {
    top: 50px;
    flex: 2;
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

  .detail-name,
  .bt-likes {
    flex: 2;
  }

  .likes {
    flex: 2;
    margin-top: 7px;
    text-align: right;

    margin: auto;
  }

  .bt-likes {
    width: 32px;
    height: 32px;
    background: url(${iconLike});
    background-repeat: no-repeat;
    padding: 0 0 0 0;
  }

  .detail-info {
    display: flex;
    margin-top: 10px;
  }

  .detail-description {
    margin-top: 35px;
    padding-left: 10px;
    font-size: 16px;
  }

  .description-container {
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

  .category {
    background-color: #ffe02c;
    border-radius: 4px;

    padding: 5px;
    box-shadow: 0 3px 6px #666;

    height: fit-content;
    width: fit-content;
    font-size: 16px;
    margin: auto;
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
    background-position: left top;
    background: none;

    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .animatedLike {
    display: none;
  }

  .animatedLikeInit {
    display: none;
  }
  .detail-animatedLikeInit {
    width: 45px;
    height: 45px;
    background-image: url(${iconLikeInit});
    background-repeat: no-repeat;
    background-position: center;
  }

  .detail-animatedLike {
    width: 45px;
    height: 45px;
    background-image: url(${iconLike});
    background-repeat: no-repeat;
    background-position: center;
  }

  .animatedFav {
    background-image: url(${iconMenuFavs});
    background-repeat: no-repeat;
    width: 45px;
    height: 45px;
    margin-left: 10px;
    background-position: center;
    position: relative;
    left: 250px;
  }

  .animatedFavDelete {
    background-image: url(${iconMenuFavsDelete});
    background-repeat: no-repeat;
    background-position: center;
    width: 45px;
    height: 45px;
    position: relative;
    left: 305px;
  }

  .animatedDelete {
    width: 45px;
    height: 45px;
    position: relative;
    left: -330px;
    background-image: url(${iconDelete});
    background-repeat: no-repeat;
    background-position: center;
  }

  .animatedEdit {
    width: 45px;
    height: 45px;

    background: url(${iconEdit});
    background-repeat: no-repeat;
    margin: auto;
    margin-left: 10px;
  }

  .form-detail-animatedEdit {
    background: url(${iconEdit});
    background-repeat: no-repeat;
    background-position: left;
    width: 70%;
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

  @keyframes bounce2 {
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
  .bounce2 {
    -webkit-animation-name: bounce2;
    animation-name: bounce2;
  }
  .header {
    justify-content: space-between;
  }
`;

export default DetailPageStyles;
