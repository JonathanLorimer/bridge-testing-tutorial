// This file is supposed to demonstrate a good use case for snapshots
// Generally you don't test functions that you didn't write, but we will be doing so as an example here

describe("use case for snapshot test", () => {
  describe("Array.map", () => {
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const double = num => num * 2;
    it("doubles array of numbers when given the double function", () => {
      // ℹ️ Step 1: Assert that doubledArray is testArray doubled, without writing out another array (i.e. using snapshots)
      // 💡 Hint: https://jestjs.io/docs/en/snapshot-testing

      const doubledArray = testArray.map(double);

      expect(false).toBe(true);
    });
  });
  describe("Spread operator for objects", () => {
    const testObject1 = { a: 1, b: 2, c: 3 };
    const testObject2 = { 1: "a", 2: "b", 3: "c" };
    it("combines objects when they are spread into a new object", () => {
      // ℹ️ Step 1: Assert that spread Object is the combination of testObject1 and testObject 2 without writing out another object (i.e. using snapshots)
      // 💡 Hint: https://jestjs.io/docs/en/snapshot-testing

      const spreadObject = { ...testObject1, ...testObject2 };

      expect(false).toBe(true);
    });
  });
});
