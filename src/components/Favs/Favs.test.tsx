import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/redux/store/store";
import Favs from "./Favs";
import Navbar from "../Navbar/Navbar";
import { mockPenguins } from "../../mocks/penguins";
import { mockUser } from "../../mocks/users";

jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("Given a Favs component", () => {
  describe("When the word 'penguin1' is written to the username input field", () => {
    test("Then the value of the username input field should be 'user1'", () => {
      const labelToFind = "Penguin2";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar headerTitle="test" />
            <Favs idUser={mockUser.id} allPenguins={mockPenguins} />
          </BrowserRouter>
        </Provider>
      );

      const label = screen.getByAltText(labelToFind);

      expect(label).toBeInTheDocument();
    });
  });
});
