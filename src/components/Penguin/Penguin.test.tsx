import Penguin from "../../components/Penguin/Penguin";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../app/redux/store/store";

describe("Given a RegisterForm component", () => {
  describe("When the word 'hello' is written to the username input field", () => {
    test("Then the value of the username input field should be 'hello'", () => {
      const penguin = {
        id: 3,
        name: "test",
        category: "test",
        description: "test",
        image: "test",
        imageBackup: "test",
        likes: 4,
        owner: "",
      };

      render(
        <Provider store={store}>
          {" "}
          <Penguin penguin={penguin} key={penguin.id} />
        </Provider>
      );

      const name = screen.getByRole("heading");

      expect(name).toHaveTextContent("Test");
    });
  });
});
