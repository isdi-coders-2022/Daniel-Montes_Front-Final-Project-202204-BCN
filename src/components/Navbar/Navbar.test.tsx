import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list of 24 item", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar headerTitle="Detail" />
          </Provider>
        </BrowserRouter>
      );

      const expectedListsItems = screen.getAllByRole("separator");
      const submitButton = screen.getByTitle("btn-logout");
      const backButton = screen.getByTitle("btn-back");

      userEvent.click(submitButton);

      const correctAction = jest.fn().mockResolvedValue("Logged out!");
      const wrongAction = jest.fn().mockResolvedValue("Logged out!");
      const stopLoadingAction = jest.fn().mockReturnThis();
      correctAction.mockImplementationOnce(() => {
        return "Logged out!";
      });

      correctAction.mockResolvedValue(true);
      correctAction();
      expect(correctAction).toHaveBeenCalled();

      wrongAction.mockResolvedValue(true);
      wrongAction();
      expect(wrongAction).toHaveBeenCalled();

      stopLoadingAction.mockResolvedValue(true);
      stopLoadingAction();
      expect(stopLoadingAction).toHaveBeenCalled();

      expect(expectedListsItems.length).toBe(2);
    });
  });
});
