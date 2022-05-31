import styled from "styled-components";

export const LoginFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;

  .container {
    background-color: #0cc8d0;
    padding: 20px;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    h2 {
      color: white;
      text-align: center;
      font-size: 30px;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      row-gap: 20px;
      .link {
        font-weight: bolder;
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 0 0 20px 0;
        a {
          text-decoration: none;
          color: #7b8a8a;
        }
      }
      label {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 60px;
        padding-bottom: 10px;
        font-size: 20px;
        color: #7b8a8a;

        input {
          ::placeholder {
            color: #9d9c9c;
            font-weight: bolder;
            padding-left: 20px;
          }
          width: 100%;
          align-items: center;
          justify-content: center;
          background-color: #b6dadc;
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
          background-color: #c9e265;
          color: white;
          padding: 14px 20px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          width: 50%;
          opacity: 0.9;
          display: flex;
          justify-content: center;
          font-size: 20px;
          border-radius: 15px;
          align-items: center;
        }
      }
    }
  }
`;
