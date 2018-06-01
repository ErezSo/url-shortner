const { encode, decode } = require("./url_shortner");

it("should return the encoded ID", () => {
  const id = 10004;
  const expected = "3Yu";
  const actual = encode(id);
  expect(actual).toEqual(expected);
});

it("should return the decoded ID", () => {
  const encodedId = "3Yu";
  const expected = 10004;
  const actual = decode(encodedId);
  expect(actual).toEqual(expected);
});
