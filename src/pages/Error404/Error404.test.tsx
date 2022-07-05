import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import { Error404Page } from "./Error404";

describe("Given a Error404Page", () => {
  describe("when its invoked", () => {
    test("Then it should render", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Error404Page></Error404Page>
          </Provider>
        </BrowserRouter>
      );

      const altMessageLogo = "Page Not Found!";
      const expectedLogo = screen.getByText(altMessageLogo);
      const messageError = "Page Not Found!";

      const espctedMessage = screen.getByText(messageError);
      expect(expectedLogo).toBeInTheDocument();
      expect(espctedMessage).toBeInTheDocument();
    });
  });
});
