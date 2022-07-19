import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import { createFavThunk } from "../../app/redux/thunks/penguinThunk/penguinThunk";
import { mockPenguins } from "../../mocks/penguins";
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

      const label = screen.getByPlaceholderText(labelToFind);
      userEvent.type(label, inputText);

      expect(label).toBeInTheDocument();
    });
  });
  describe("When the two inputs have text and the submit button is clicked", () => {
    test("Then the two inputs should be empty", async () => {
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

      const name = screen.getByPlaceholderText(nameLabel);
      const category = screen.getByPlaceholderText(catLabel);
      const submitButton = screen.getByPlaceholderText("bt-save");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { penguins: mockPenguins }, status: 200 });
      const dispatch = jest.fn();

      userEvent.type(name, inputText);
      userEvent.type(category, inputText);
      userEvent.click(submitButton);

      expect(name).toHaveValue("");
      expect(category).toHaveValue("");
      await dispatch(createFavThunk);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
