import styled from "styled-components";

export const NavbarStyles = styled.nav`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    background: rgb(233, 233, 233);
  }

  .menu-header {
    display: flex;
    flex-direction: column;
  }
  text {
    margin-left: 16px;
    font-size: 28px;
    padding-bottom: 10px;
  }
  h1 {
    color: white;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  button {
    color: white;
  }

  .app {
    width: 100vw;
    height: 100vh;
  }

  .app .header {
    height: 5rem;
    width: 100%;
    background-color: #292929;
    padding: 1rem;
    box-sizing: border-box;
    color: white;
    text-align: right;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header .menu-btn {
    font-size: 1.75rem;
    cursor: pointer;
  }

  .header .nav {
    display: flex;
    gap: 1rem;
  }

  .app .body {
    height: calc(100% - 5rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .app .body button {
    padding: 0.5rem;
    font-size: 1.5rem;
    border-radius: 10px;
    cursor: pointer;
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vh;
    min-width: 20rem;
    min-height: 25rem;
    background-color: rgb(228, 228, 228);
    border-radius: 10px;
    z-index: 200;

    display: flex;
    flex-direction: column;
  }

  .modal .modal-header {
    height: 2.5rem;
    border-radius: 10px 10px 0 0;
    background-color: rgb(29, 29, 29);
    position: relative;
  }

  .modal .modal-header h2 {
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0.4rem;
    cursor: pointer;
  }

  .modal .modal-body {
    height: 100%;
    display: grid;
    place-content: center;
  }

  .app-menu {
    color: white;
    height: 100vh;
    width: 20rem;
    background-color: #292929;
    z-index: 200;

    transform: translateX(-100%);
    transition: 0.3s;

    position: fixed;
    left: 0;
    top: 0;

    display: flex;
    justify-content: left;
  }

  .menu-open {
    transform: translateX(0%);
  }
`;
