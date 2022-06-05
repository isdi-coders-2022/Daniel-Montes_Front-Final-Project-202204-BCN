import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/redux/store/store";
import PenguinsPage from "./PenguinsPage";
import { BrowserRouter } from "react-router-dom";

describe("Given a PenguinsPage Component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the text 'Name'", () => {
      const expectedResult = "Discover";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <PenguinsPage />
          </Provider>
        </BrowserRouter>
      );

      const receivedResult = screen.getByText(expectedResult);
      expect(receivedResult).toBeInTheDocument();
    });
  });
});
