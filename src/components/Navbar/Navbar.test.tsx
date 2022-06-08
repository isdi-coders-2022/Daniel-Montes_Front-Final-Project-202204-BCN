import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import Navbar from "./Navbar";

describe("Given Navbar function", () => {
  describe("When it's called with to word given", () => {
    test("Then it should render two img", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );

      const expectedNavbarText = screen.getAllByRole("button");

      expect(expectedNavbarText).toHaveLength(5);
    });
  });
});
