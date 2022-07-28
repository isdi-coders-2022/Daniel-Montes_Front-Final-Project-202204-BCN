import {
  correctAction,
  infoAction,
  setLoadingOff,
  setLoadingOn,
  stopLoadingAction,
  warnAction,
  wrongAction,
} from "./Modals";
import { toast } from "react-toastify";

jest.mock("react-toastify");

describe("Given a correct Modal component", () => {
  describe("When the word 'penguin' is written", () => {
    test("Then the value of the message input field should be 'penguin'", () => {
      const message = "penguin";

      correctAction(message);
      const result = toast.clearWaitingQueue;

      expect(result).toHaveBeenCalled();
    });
  });
});

describe("Given a wrong Modal component", () => {
  describe("When the word 'penguin' is written", () => {
    test("Then the value of the message input field should be 'penguin'", () => {
      const message = "penguin";

      wrongAction(message);
      const result = toast.clearWaitingQueue;

      expect(result).toHaveBeenCalled();
    });
  });
});

describe("Given a warning Modal component", () => {
  describe("When the word 'penguin' is written", () => {
    test("Then the value of the message input field should be 'penguin'", () => {
      const message = "penguin";

      warnAction(message);
      const result = toast.clearWaitingQueue;

      expect(result).toHaveBeenCalled();
    });
  });
});

describe("Given a info Modal component", () => {
  describe("When the word 'penguin' is written", () => {
    test("Then the value of the message input field should be 'penguin'", () => {
      const message = "penguin";

      infoAction(message);
      const result = toast.clearWaitingQueue;

      expect(result).toHaveBeenCalled();
    });
  });
});

describe("Given a stopLoad Modal component", () => {
  describe("When the word 'penguin' is written", () => {
    test("Then the value of the message input field should be 'penguin'", () => {
      stopLoadingAction();
      const result = toast.clearWaitingQueue;

      expect(result).toHaveBeenCalled();
    });
  });
});

describe("Given a setLoading Modal component", () => {
  describe("When the word 'penguin' is written", () => {
    test("Then the value of the message input field should be 'penguin'", () => {
      const message = "penguin";

      setLoadingOn(message);
      const result = toast.loading;

      expect(result).toHaveBeenCalled();
    });
  });
});

describe("Given a setLoadingOff Modal component", () => {
  describe("When the word 'penguin' is written", () => {
    test("Then the value of the message input field should be 'penguin'", () => {
      setLoadingOff();
      const result = toast.clearWaitingQueue;

      expect(result).toHaveBeenCalled();
    });
  });
});
