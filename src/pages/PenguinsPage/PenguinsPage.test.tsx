import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/redux/store/store";
import PenguinsPage from "./PenguinsPage";
import { BrowserRouter } from "react-router-dom";

describe("Given a PenguinsPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should render 6 buttons", () => {
      const expectedResult = 6;

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
