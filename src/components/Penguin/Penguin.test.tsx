import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockPenguins } from "../../mocks/penguins";

import store from "../../app/redux/store/store";
import Penguin from "./Penguin";

const mockDispatch = jest.fn();

jest.mock("../../app/redux/hooks/hooks", () => ({
  ...jest.requireActual("../../app/redux/hooks/hooks"),
  useAppDispatch: () => mockDispatch,
}));
jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));
describe("Given the Penguin component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one heading element", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Penguin penguin={mockPenguins[0]} />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByText("Penguin1");

      expect(result.length).toBeGreaterThanOrEqual(1);
    });
  });
  describe("when its clicked the button", () => {
    test("then it should call dispatch", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Penguin penguin={mockPenguins[0]} />
          </BrowserRouter>
        </Provider>
      );

      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBeGreaterThan(3);
    });
  });
});
