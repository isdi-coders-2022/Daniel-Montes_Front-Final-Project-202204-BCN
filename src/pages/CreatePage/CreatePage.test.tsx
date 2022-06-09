import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import CreatePage from "./CreatePage";

describe("Given a CreatePage component", () => {
  describe("When the word 'penguin' is written to the username input field", () => {
    test("Then the value of the username input field should be 'penguin'", () => {
      const labelToFind = "Name";
      const inputText = "penguin1";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreatePage />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toBeInTheDocument();
    });
  });
  describe("When the two inputs have text and the submit button is clicked", () => {
    test("Then the two inputs should be empty", () => {
      const nameLabel = "Name";
      const catLabel = "Category";
      const inputText = "penguin";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreatePage />
          </BrowserRouter>
        </Provider>
      );

      const username = screen.getByLabelText(nameLabel);
      const password = screen.getByLabelText(catLabel);
      const submitButton = screen.getByPlaceholderText("bt-register");
      const buttons = screen.getAllByRole("button");

      userEvent.type(username, inputText);
      userEvent.type(password, inputText);
      userEvent.click(submitButton);

      expect(username).toHaveValue("");
      expect(password).toHaveValue("");
      expect(buttons).toHaveLength(13);
    });
  });
});
