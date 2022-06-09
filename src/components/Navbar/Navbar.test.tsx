import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import {
  createFavThunk,
  loadFavsThunk,
} from "../../app/redux/thunks/penguinThunk/penguinThunk";
import NavBar from "./Navbar";
import axios from "axios";
import { logOutActionCreator } from "../../app/redux/features/userSlice/userSlice";

describe("Given a NavBar Component", () => {
  describe("When it's call", () => {
    test("Then it should render a HeaderComponent with 2 li item", () => {
      const expectedResult = 6;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <NavBar />
          </Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");

      expect(buttons.length).toBe(expectedResult);
    });
    test("Then if buttons were clicked they should call dispatch", async () => {
      const dispatch = jest.fn();

      render(
        <Provider store={store}>
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        </Provider>
      );

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");
    });
  });
});
