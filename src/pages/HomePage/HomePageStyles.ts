import styled from "styled-components";

const HomePageStyles = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  text-align: center;

  body {
    background-image: url("../images/background2Heart.png");
  }

  .bt-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 475px;
    width: 100%;
  }

  .bt-login,
  .bt-register {
    height: 60px;
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
    top: 25px;
    position: relative;
    width: 100%;
    font-size: 18px;
  }

  .link {
    margin: auto;
  }

  a {
    text-decoration: none;
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    width: 100%;
    margin: auto;
    padding-top: 180px;
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

export default HomePageStyles;
