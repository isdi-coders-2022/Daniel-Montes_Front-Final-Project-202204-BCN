import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When its rendered", () => {
    test("Then it should render an image", () => {
      const expectedText = "AdoptaUnPingüino.com";
      render(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      );
      const receivedElement = screen.getByRole("heading");
      const Links = screen.getAllByRole("link");

      expect(receivedElement).toBeInTheDocument();
      expect(Links).toHaveLength(2);
    });
  });
});
