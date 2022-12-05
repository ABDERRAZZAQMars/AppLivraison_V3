const supertest = require('supertest');

const app = require('../server');


describe("POST /api/auth/register", () => {
  it("should response with a 400 status code", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      name: "",
      email: "",
      password: "",
      role: ""
    });
    expect(response.statusCode).toBe(400);
  });
});


describe("POST /api/auth/register", () => {
  it("should response with a 200 status code", async () => {
    const response = await supertest(app).post("/api/auth/register").send({
      name: "ccc",
      email: "vhsssccgsshe@gmail.com",
      password: "azazaz",
      role: "client"
    });
    expect(response.statusCode).toBe(200);
  });
});
