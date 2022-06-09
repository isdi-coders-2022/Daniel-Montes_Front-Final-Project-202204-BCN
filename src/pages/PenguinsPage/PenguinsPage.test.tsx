import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/redux/store/store";
import PenguinsPage from "./PenguinsPage";
import { BrowserRouter } from "react-router-dom";

describe("Given a PenguinsPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'Name'", () => {
      const expectedResult = 5;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PenguinsPage />
          </Provider>
        </BrowserRouter>
      );

      const receivedResult = screen.getAllByRole("button");
      expect(receivedResult.length).toBe(expectedResult);
    });
  });
});
