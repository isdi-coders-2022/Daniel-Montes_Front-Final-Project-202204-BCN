import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import FavsPage from "./FavsPage";

const expectedText = "Favourites";
jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a FavsPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'Favs'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <FavsPage />
          </BrowserRouter>
        </Provider>
      );
      const expectedText = "Favs";
      const expected = screen.getByText(expectedText);

      expect(expected).toHaveTextContent(expectedText);
    });
  });
});
