import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import DetailPage from "./DetailPage";

jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a CreatePage component", () => {
  describe("When the word 'penguin' is written to the username input field", () => {
    test("Then the value of the username input field should be 'penguin'", () => {
      const ToFind = "button";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailPage />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getAllByRole(ToFind);

      expect(label.length).toBe(8);
    });
  });
});
