import { setupServer } from "msw/node";
import { usersHandlers } from "../mocks/handlers";

const server = setupServer(...usersHandlers);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

export default server;
