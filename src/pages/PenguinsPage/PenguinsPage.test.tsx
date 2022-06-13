import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/redux/store/store";
import PenguinsPage from "./PenguinsPage";
import { BrowserRouter } from "react-router-dom";

const expectedResult = 7;
jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a PenguinsPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 6 buttons", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <PenguinsPage />
          </Provider>
        </BrowserRouter>
      );
      const expectedResult = "Penguins";
      const receivedResult = screen.getByText(expectedResult);
      expect(receivedResult).toHaveTextContent(expectedResult);
    });
  });
});
