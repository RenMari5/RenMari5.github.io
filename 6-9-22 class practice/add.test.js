const add = require("./add.js");

describe("add.js", () => {
  test("adds the numbers correctly", () => {
    expect(add(1, 2)).toEqual(3);
  });

  test("does not add correctly", () => {
    expect(add(1, 2)).not.toEqual(4);
  });
});
