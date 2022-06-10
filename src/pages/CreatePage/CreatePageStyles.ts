import styled from "styled-components";
import image from "../../images/background2Heart.png";

const CreatePageStyles = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  background-image: url(${image});
  background-size: 200%;
  background-position-x: 97px;
  background-position-y: 30px;
  background-repeat: no-repeat;
  height: 690px;
  text-align: center;
  a {
    color: white;
  }
  h1 {
    font-size: 10px;
  }
`;

export default CreatePageStyles;
