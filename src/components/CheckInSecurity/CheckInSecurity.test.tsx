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
  const mockNavigate = jest.fn();

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
  }));
  let mockedToken = "uwuwu";
  jest.mock("jwt-decode", () => () => mockedToken);

  const saveToStorage = (value: string) => {
    window.localStorage.setItem("token", value);
  };

  describe("When its invoked and receives a children JSX element and there is a token in the localStorage", () => {
    test("Then it should render the children JSX element and", () => {
      saveToStorage("token");
      render(<CheckInSecurity children={<h1>penguin</h1>} />);

      // const expectedHeading = screen.getByRole("heading", { name: "penguin" });

      expect(window.localStorage.getItem("token")).toBe("token");
    });
  });
});
