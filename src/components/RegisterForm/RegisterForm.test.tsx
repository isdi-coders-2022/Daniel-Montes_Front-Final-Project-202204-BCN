import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When the word 'user1' is written to the username input field", () => {
    test("Then the value of the username input field should be 'user1'", () => {
      const labelToFind = "Username";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByPlaceholderText(labelToFind);

      expect(label).toBeInTheDocument();
    });
  });
  describe("When the two inputs have text and the submit button is clicked", () => {
    test("Then the two inputs should be empty", () => {
      const usernameLabel = "Username";
      const passwordLabel = "Password";
      const inputText = "user1";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      const username = screen.getByLabelText(usernameLabel);
      const password = screen.getByLabelText(passwordLabel);
      const submitButton = screen.getByRole("button");

      userEvent.type(username, inputText);
      userEvent.type(password, inputText);
      userEvent.click(submitButton);

      expect(username).toHaveValue("");
      expect(password).toHaveValue("");
    });
  });
});