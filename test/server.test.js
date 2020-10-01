const request = require("supertest");
const app = require("../server/index.js");

describe('dummy test to make sure jest is working', () => {
  test('checks if true is true', () => {
    expect(true).toBe(true);
  });
});


describe("Test the root path", () => {
  test("It should respond to GET request on root path with status code 200", () => {
    return request(app)
      .get("/")
      .then( (res) => {
        expect(res.statusCode).toBe(200);
      });
  });
});


afterAll(async () => {
	await new Promise( (resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
});