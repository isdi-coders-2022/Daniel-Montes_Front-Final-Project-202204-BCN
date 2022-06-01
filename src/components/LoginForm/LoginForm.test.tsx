import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../app/redux/store/store";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";

describe("Given a SignUpForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 2 labels", () => {
      const expectedText = "Login";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedRenderedHeading = screen.getByRole("heading", { level: 2 });

      const inputUsername = screen.getByPlaceholderText("Username");
      const inputPassword = screen.getByPlaceholderText("Password");
      const button = screen.getByRole("button");

      expect(inputUsername).toBeInTheDocument();
      expect(inputPassword).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      expect(expectedRenderedHeading).toHaveTextContent(expectedText);
    });
  });

  describe("When the user doesn't write in all inputs", () => {
    test("Then the button are disabled", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: "Log In" });

      expect(button).toBeDisabled();
    });
  });
});
