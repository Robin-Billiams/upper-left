const request = require("supertest");
const app = require("../server/index.js");


describe('dummy test to make sure jest is working', () => {
  test('checks if true is true', () => {
    expect(true).toBe(true);
  });
});

describe("Test the root path", () => {
  test("It should respond to GET request with status code 200", () => {
    return request(app)
      .get("/")
      .then( (res) => {
        expect(res.statusCode).toBe(200);
      })
      .catch( (err) => { console.log('There was an error with test: ', err)});
  });
});

describe("Test the /products/ path", () => {
  test("It should respond to a GET request with status code 200", () => {
    return request(app)
      .get("/products/0")
      .then( (res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body.imageUrls[0]).toBe("https://hrr48madisonfecbrazil.s3-sa-east-1.amazonaws.com/0.jpg");
      });
  })
});

describe("Test the /server/ path", () => {
  test("It should respond to a GET request with status code 200", () => {
    return request(app)
      .get(`/server/`)
      .then( (res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body[0].imageUrls[0]).toBe("https://hrr48madisonfecbrazil.s3-sa-east-1.amazonaws.com/0.jpg");

      });
  })
});

afterAll((done) => {
  done();
});