const request = require("supertest");
const app = require("./Server");

describe("Server", () => {
  let server;

  beforeAll(() => {
    server = app.listen(4001);
    console.log("Server is running on Port: 4001");
  });

  afterAll((done) => {
    console.log("Server is closing...");
    server.close(done);
  });

  it("should return 200 OK", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
  });
});
