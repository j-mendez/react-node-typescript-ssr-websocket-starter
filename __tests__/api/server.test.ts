import request from "supertest";
import app from "@app/server/server";
import { closeConnection } from "@app/server/utils";

afterAll(async () => {
  await closeConnection(app);
});

describe("realtime application api", () => {
  test("root can render", async () => {
    return await request(app).get("/").expect(200);
  });

  test.todo("can connect to websocket");
});
