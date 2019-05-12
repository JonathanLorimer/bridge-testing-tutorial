import React from "react";
import { create } from "react-test-renderer";
import MyBasicComponent from "./1_testing_components";

describe("MyBasicComponent", () => {
  it("renders component correctly with react", () => {
    // Fill in the test using react test renderer to test how the component renders

    // ℹ️ Step 1: Create a rendering of your component
    // 💡 Hint: https://reactjs.org/docs/test-renderer.html#testrenderercreate

    /* 💻 Your code here */

    // ℹ️ Step 2: Convert your rendered component to JSON
    // 💡 Hint: https://reactjs.org/docs/test-renderer.html#testrenderertojson

    /* 💻 Your code here */

    // ℹ️ Step 3: Change the assertion below so that the JSON matches what your component previously looked like
    // 💡 Hint: https://jestjs.io/docs/en/snapshot-testing
    expect(false).toBe(true);
  });
});
