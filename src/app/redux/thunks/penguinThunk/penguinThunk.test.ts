import { loadPenguinsThunk } from "./penguinThunk";
import { server } from "../../../../mocks/server";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("axios", () =>
  jest.fn().mockResolvedValue([
    {
      name: "Penguin1",
      category: "Penguin",
      description: "Cal is a penguin",
      likes: 2,
      Image: "image.jpg",
    },
  ])
);

const dispatch = jest.fn();

describe("Given a penguinThunk", () => {
  describe("When it's invoked", () => {
    test("Then the dispatch function is called", async () => {
      const thunk = loadPenguinsThunk();

      await thunk(dispatch());

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
