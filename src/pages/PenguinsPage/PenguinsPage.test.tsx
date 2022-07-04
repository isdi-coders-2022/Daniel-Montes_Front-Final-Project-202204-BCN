import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import PenguinsPage from "./PenguinsPage";
import PenguinsPageStyles from "../../Styles/PagesStyles";

jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a PenguinsPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'AdoptaUnPingüino.com'", () => {
      const expectedResult = "AdoptaUnPingüino.com";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PenguinsPageStyles>
              <PenguinsPage />
            </PenguinsPageStyles>
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
