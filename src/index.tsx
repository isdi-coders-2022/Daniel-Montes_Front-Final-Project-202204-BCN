import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./app/redux/store/store";
import reportWebVitals from "./reportWebVitals";

import styled from "styled-components";

const IndexStyles = styled.div`
  h1 {
    text-align: center;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IndexStyles>
        <Provider store={store}>
          <App />
        </Provider>
      </IndexStyles>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
