import { rest } from "msw";
import { mockPenguins } from "./penguins";

export const mockTokenKey: string = "CHORIZACODELBUENO";

export const usersHandlers = [
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockTokenKey }))
  ),
  rest.post(`${process.env.REACT_APP_API_URL}users/register`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockTokenKey }))
  ),
];
