import styled from "styled-components";

export const LoginFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 20px;

    label {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 60px;
      padding-bottom: 10px;
      font-size: 20px;

      input {
        ::placeholder {
          font-weight: bolder;
          padding-left: 20px;
        }

        width: 100%;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        border: 0;
        box-sizing: border-box;
        color: white;
        font-size: 18px;
        height: 100%;
      }
    }
    .submitContainer {
      display: flex;
      width: 100%;
      justify-content: center;

      button {
        color: white;
        background-color: black;
        padding: 14px 20px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
        display: flex;
        justify-content: center;
        font-size: 20px;
        border-radius: 15px;
        align-items: center;
      }
    }
  }
`;
