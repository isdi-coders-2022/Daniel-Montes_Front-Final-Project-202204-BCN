import axios from "axios";
import { mockPenguin, mockPenguins } from "../../../../mocks/penguins";
import { loadPenguinsActionCreator } from "../../features/penguinSlice/penguinSlice";

import {
  createFavThunk,
  editPenguinThunk,
  getPenguinThunk,
  loadFavsThunk,
  loadPenguinsThunk,
  resetPenguinsThunk,
  resetPenguinThunk,
} from "./penguinThunk";

describe("Given the loadPenguinsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the load penguins action with penguins received from axios request", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({
        data: { mockPenguin },
        status: 200,
      });

      const thunk = loadPenguinsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});

describe("Given the loadFavsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the load penguins action with penguins received from axios request", async () => {
      const dispatch = jest.fn();
      loadPenguinsActionCreator(mockPenguins);
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({
        data: { penguins: mockPenguins },
        status: 200,
      });

      const thunk = loadFavsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});

describe("Given createFavThunk", () => {
  describe("when it's called with no token", () => {
    test("Then it should not call the dispatch function", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");

      const thunk = createFavThunk({ mockPenguin });
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});

describe("Given the getPenguinThunk function", () => {
  describe("When it's called with an user", () => {
    test("Then it should call dispatch with the set notes to show action with the notes received from the axios request", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest
        .fn()
        .mockResolvedValue({ data: { penguin: mockPenguin } });

      const thunk = getPenguinThunk(mockPenguin.id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});

describe("Given the resetPenguinsThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the load penguins action with penguins received from axios request", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({
        data: { penguin: mockPenguin },
        status: 200,
      });

      const thunk = resetPenguinsThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});

describe("Given the resetPenguinThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the load penguins action with penguins received from axios request", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.get = jest.fn().mockResolvedValue({
        data: { penguin: mockPenguin },
        status: 200,
      });

      const thunk = resetPenguinThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});

describe("Given the editPenguinThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch with the load penguins action with penguins received from axios request", async () => {
      const dispatch = jest.fn();

      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");
      axios.put = jest.fn().mockResolvedValue({
        data: { penguin: mockPenguin },
        status: 200,
      });

      const thunk = editPenguinThunk(mockPenguin, "update");
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});
