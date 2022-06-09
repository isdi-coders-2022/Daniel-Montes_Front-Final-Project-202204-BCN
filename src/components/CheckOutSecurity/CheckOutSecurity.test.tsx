import { render, screen } from "@testing-library/react";
import CheckOutSecurity from "./CheckOutSecurity";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = true;

jest.mock("../../app/redux/hooks/hooks", () => ({
  useAppSelector: () => ({ logged: mockLogged }),
}));

describe("Given an CheckOutSecurity function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigate to the homepage when the user is logged", () => {
      render(
        <CheckOutSecurity>
          <h1>penguin</h1>
        </CheckOutSecurity>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/penguins");

    });
  });
});
