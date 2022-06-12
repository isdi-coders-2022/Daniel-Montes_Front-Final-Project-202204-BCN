import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import FavsPage from "./FavsPage";

describe("Given a FavsPage component", () => {
  describe("When it's called", () => {
    test("Then it should render a heading with the text 'Favs'", () => {
      const expectedText = "Favourites";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FavsPage />
          </BrowserRouter>
        </Provider>
      );

      const expectedRenderedHeading = screen.getByRole("button", {
        name: "Favourites",
      });

      expect(expectedRenderedHeading).toHaveTextContent(expectedText);
    });
  });
});
