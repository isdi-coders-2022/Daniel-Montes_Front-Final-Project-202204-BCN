import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import { Menu } from "./Menu";

const expectedResult = 5;
jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a Menu Component", () => {
  describe("When it's call", () => {
    test("Then it should render a Menu Component with exactly 5 buttons", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Menu isMenuOpen={true} />
          </Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons.length).toBe(expectedResult);
    });
  });
});
