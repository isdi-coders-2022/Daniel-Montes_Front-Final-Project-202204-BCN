import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import FavsPage from "./FavsPage";

jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a  FavsPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'AdoptAPenguin.com'", () => {
      const expectedResult = "AdoptAPenguin.com";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FavsPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
