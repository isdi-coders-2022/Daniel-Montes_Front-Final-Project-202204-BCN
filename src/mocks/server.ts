import { setupServer } from "msw/node";
import { usersHandlers } from "../mocks/handlers";

export const server = setupServer(...usersHandlers);
