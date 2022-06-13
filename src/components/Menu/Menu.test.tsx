import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import { Menu } from "./Menu";

const expectedButtons = 5;

jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a Menu Component", () => {
  describe("When it's call", () => {
    test("Then it should render a Menu Component with exactly 5 buttons", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Menu isMenuOpen={true} />
          </Provider>
        </BrowserRouter>
      );

      const buttons = screen.getAllByRole("button");
      const bthome = screen.getByTitle("bt-home");
      const btlogout = screen.getByTitle("bt-logout");
      const btfav = screen.getByTitle("bt-fav");
      const btfavs = screen.getByTitle("bt-favs");
      const btsound = screen.getByTitle("bt-sound");

      const loadHome = jest.fn();
      const logOut = jest.fn();
      const loadFavs = jest.fn();
      const addFav = jest.fn();
      const toggleSound = jest.fn();

      loadHome();
      logOut();
      toggleSound();
      addFav();
      loadFavs();

      userEvent.click(bthome);
      userEvent.click(btlogout);
      userEvent.click(btfavs);
      userEvent.click(btfav);
      userEvent.click(btsound);

      expect(buttons.length).toBe(expectedButtons);

      expect(loadHome).toHaveBeenCalled();
      expect(logOut).toHaveBeenCalled();
      expect(toggleSound).toHaveBeenCalled();
      expect(addFav).toHaveBeenCalled();
      expect(loadFavs).toHaveBeenCalled();
    });
  });
});
