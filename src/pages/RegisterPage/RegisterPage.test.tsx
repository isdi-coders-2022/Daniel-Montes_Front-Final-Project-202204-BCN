import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import RegisterPage from "./RegisterPage";
import RegisterPageStyles from "./RegisterPageStyles";

describe("Given a RegisterPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'Register'", () => {
      const expectedResult = "Register";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPageStyles>
              <RegisterPage />
            </RegisterPageStyles>
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
