const request = require("supertest");
const server = require("../server");

const api = request(server);

describe("API", () => {
  test("successful POST request", () => {
    const url = "http://www.google.com";
    const expected = "3Yu";
    return api
      .post("/set_url")
      .send({ url })
      .then(res => {
        expect(res.text).toEqual(expected);
      })
      .catch(err => {
        console.error(err);
      });
  });
});
