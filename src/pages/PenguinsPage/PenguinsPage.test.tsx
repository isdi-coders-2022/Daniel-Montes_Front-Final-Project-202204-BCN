import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
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
    test("Then it should show the role 'penguins-page'", () => {
      const expectedResult = "penguins-page";

      render(
        <Provider store={store}>
          <PenguinsPageStyles role={"penguins-page"}>
            <PenguinsPage />
          </PenguinsPageStyles>
        </Provider>
      );

      const receivedResult = screen.getByRole(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
