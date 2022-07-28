import { rest } from "msw";

export const mockTokenKey: string = "xxx";

export const usersHandlers = [
  rest.post(`${process.env.REACT_APP_API_URL}users/login`, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({ token: mockTokenKey }))
  ),
];
