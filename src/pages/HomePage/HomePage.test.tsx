import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import store from "../../app/redux/store/store";
import { Provider } from "react-redux";

describe("Given a HomePage component", () => {
  describe("When its rendered", () => {
    test("Then it should render an 2 link elements", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );
      const receivedElement = screen.getByRole("heading");
      const Links = screen.getAllByRole("link");

      expect(receivedElement).toBeInTheDocument();
      expect(Links).toHaveLength(2);
    });
  });
});
