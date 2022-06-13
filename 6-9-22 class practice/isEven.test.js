const isEven = require("./isEven.js");

describe("isEven.js", () => {
  test("Returns true if divisible by 2", () => {
    expect(isEven(2)).toEqual(true);
  });

  test("Return false if not divisible by 2", () => {
    expect(isEven(3)).toEqual(false);
  });
});
