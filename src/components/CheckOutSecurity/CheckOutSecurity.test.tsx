import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockUserLogged, mockUserNotLogged } from "../../mocks/users";
import store from "../../app/redux/store/store";
import { UserState } from "../../app/redux/types/userInterfaces/userInterfaces";
import CheckOutSecurity from "./CheckOutSecurity";

let mockuserState: UserState;

jest.mock("../../app/redux/hooks/hooks", () => ({
  ...jest.requireActual("../../app/redux/hooks/hooks"),
  useAppSelector: () => mockuserState.logged,
}));
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a CheckOutSecurity component", () => {
  describe("When its invoked and the user is not logged in", () => {
    test("Then it should call the navigate function with tue route '/login'", () => {
      mockuserState = mockUserNotLogged;
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CheckOutSecurity>
              <div>Children</div>
            </CheckOutSecurity>
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });

  describe("When its invoked and the user is logged in", () => {
    test("Then it should render it's children whit a 'children' heading", () => {
      mockuserState = mockUserLogged;
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CheckOutSecurity>
              <h1>Children</h1>
            </CheckOutSecurity>
          </BrowserRouter>
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: /children/i,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
