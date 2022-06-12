import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import Navbar from "./Navbar";

describe("Given a NavBar Component", () => {
  describe("When it's call", () => {
    test("Then it should render a HeaderComponent with exactly 5 buttons", () => {
      const expectedResult = 7;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar title="testing" />
          </Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons.length).toBe(expectedResult);
    });
  });
});

describe("Given the Navigation component", () => {
  describe("When its invoked", () => {
    test("Then it should render a list with 5 listitems", () => {
      const expectedNumerOfListItems = 5;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar title="Testing" />
          </Provider>
        </BrowserRouter>
      );
      const numberOfListItems = screen.getAllByRole("listitem");
      const list = screen.getAllByRole("list");

      expect(list.length).toBe(2);
      expect(numberOfListItems).toHaveLength(expectedNumerOfListItems);
    });
  });
});
