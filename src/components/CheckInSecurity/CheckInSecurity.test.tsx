import { render, screen } from "@testing-library/react";

import CheckInSecurity from "./CheckInSecurity";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = false;

jest.mock("../../app/redux/hooks/hooks", () => ({
  useAppSelector: () => ({ logged: mockLogged }),
}));

describe("Given a CheckInSecurity function", () => {
  describe("When it's invoked", () => {
    test("Then it should navigate to the login when the user is not logged", () => {
      render(
        <CheckInSecurity>
          <h1>Penguin</h1>
        </CheckInSecurity>
      );

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
