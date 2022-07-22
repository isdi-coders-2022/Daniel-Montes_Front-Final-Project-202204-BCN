import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import { mockPenguin, mockPenguins } from "../../mocks/penguins";
import PenguinDetail from "./PenguinDetail";

jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a CreatePage component", () => {
  describe("When the word 'penguin' is written to the username input field", () => {
    test("Then the value of the username input field should be 'penguin'", () => {
      const ToFind = "button";
      const expectedButtons = 7;
      const handleDelete = jest.fn();

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PenguinDetail allPenguins={mockPenguins} penguin={mockPenguin} />
          </BrowserRouter>
        </Provider>
      );

      const bt = screen.getAllByRole(ToFind);
      const btDelete = screen.getByTitle("btn-delete");
      userEvent.click(btDelete);
      handleDelete();

      expect(bt.length).toBe(expectedButtons);
      expect(handleDelete).toHaveBeenCalled();
    });
  });
});
