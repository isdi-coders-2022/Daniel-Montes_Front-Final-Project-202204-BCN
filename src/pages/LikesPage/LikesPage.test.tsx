import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import LikesPage from "./LikesPage";

describe("Given a LikesPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'AdoptAPenguin.com'", () => {
      const expectedResult = "AdoptAPenguin.com";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LikesPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
