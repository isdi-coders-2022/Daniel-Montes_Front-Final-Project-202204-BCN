import styled from "styled-components";

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

  .category {
    background-color: #f4ba26;
    border-radius: 4px;
    flex: 1;
    margin-bottom: 25px;
    padding-left: 5px;
  }

  .likes {
    text-align: right;
    flex: 3;
  }

  img {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }

  .star-image {
    width: 32px;
    height: 32px;
    margin-top: 20px;
  }

  .container {
    width: 100%;
  }
  .penguin-container {
    border: 1px solid #e4e4e4;
    border-radius: 8px;
    margin-bottom: 20px;
    padding: 16px;
    padding: 0 10px 15px;
  }

  .penguin-datalist,
  .penguin-title {
    display: flex;
  }

  .penguin-name,
  .likes-image {
    flex: 3;
  }

  .image-container {
    text-align: right;
    margin-right: 5px;
    width: 32px;
    height: 32px;
  }

  .likes-image {
    width: 32px;
    height: 32px;
  }
  .link {
    margin: auto;
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

  input ::placeholder {
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

export default PenguinsPageStyles;
