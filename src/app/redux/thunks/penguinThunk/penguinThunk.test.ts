import { mockPenguin } from "../../../../mocks/penguins";
import {
  createFavThunk,
  deletePenguinThunk,
  loadFavsThunk,
} from "./penguinThunk";

jest.mock("chalk", () => ({
  green: jest.fn(),
  white: jest.fn(),
  red: jest.fn(),
  yellow: jest.fn(),
}));

describe("When it's called and there's no token", () => {
  test("Then it should not call dispatch", async () => {
    const dispatch = jest.fn();

    const thunk = loadFavsThunk();
    await thunk(dispatch);

    expect(dispatch).not.toHaveBeenCalled();
  });
});

describe("when it's called with no token", () => {
  test("Then it should not call the dispatch function", async () => {
    const dispatch = jest.fn();

    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

    const thunk = createFavThunk(mockPenguin);
    await thunk(dispatch);

    expect(dispatch).not.toHaveBeenCalled();
  });
});

describe("when it's called with an placeId with no token", () => {
  test("Then it should not call the dispatch function", async () => {
    const id = "222";
    const dispatch = jest.fn();

    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

    const thunk = deletePenguinThunk(id);
    await thunk(dispatch);

    expect(dispatch).not.toHaveBeenCalled();
  });
});
