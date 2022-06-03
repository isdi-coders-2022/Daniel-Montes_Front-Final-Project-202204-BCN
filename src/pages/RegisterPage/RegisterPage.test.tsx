import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given a LoginPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'Login'", () => {
      const expectedResult = "Login";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
