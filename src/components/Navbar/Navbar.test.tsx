import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Given Navbar function", () => {
  describe("When it's called with to word given", () => {
    test("Then it should render two headings", () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );

      const expectedNavbarText = screen.getAllByRole("heading");

      expect(expectedNavbarText).toHaveLength(2);
    });
  });
});
