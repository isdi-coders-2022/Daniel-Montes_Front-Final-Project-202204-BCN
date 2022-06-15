import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import Navbar from "./Navbar";

jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a Navbar component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list of 24 item", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );

      const expectedListsItems = screen.getAllByRole("listitem");

      expect(expectedListsItems.length).toBe(24);
    });
  });
});
