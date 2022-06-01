import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".././App";
import { Provider } from "react-redux";
import store from ".././app/redux/store/store";
import { BrowserRouter } from "react-router-dom";

test("renders AdoptaUnPingüino.com", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/AdoptaUnPingüino.com/i);
  expect(linkElement).toBeInTheDocument();
});
