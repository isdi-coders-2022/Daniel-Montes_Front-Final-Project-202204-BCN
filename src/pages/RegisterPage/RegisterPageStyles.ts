import styled from "styled-components";
import image from "../../images/background2Heart.png";

const RegisterPageStyles = styled.div`
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

  .container {
    width: 100%;
  }

  h1 {
    top: 5px;
    position: absolute;
    width: 100%;
    font-size: 18px;
  }

  .link {
    margin: auto;
  }

  a {
    text-decoration: none;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    width: 100%;
    margin: auto;
    padding-top: 210px;
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

  .display-none {
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
  }

  input:placeholder {
    font-weight: bolder;
    padding-left: 20px;
    text-align: center;
  }

  .submitContainer {
    display: flex;
    width: 100%;
  }

  button {
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
`;

export default RegisterPageStyles;
