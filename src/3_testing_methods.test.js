import React from "react";
import { shallow } from "enzyme";
import MyBasicComponent from "./3_testing_methods";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("MyBasicComponent", () => {
  describe("increment", () => {
    it("increases the states count by one", () => {
      // We are going to trigger the increment method by simulating an event and then check that state updated correctly

      // ℹ️ Step 1: Create a shallow rendering of your component
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/shallow.html

      /* 💻 Your code here */

      // ℹ️ Step 2: Find the increment button on your component
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html

      /* 💻 Your code here */

      // ℹ️ Step 3: Simulate a click
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html

      /* 💻 Your code here */

      // ℹ️ Step 4: Change the assertion below to expect that state.counter has been incremented
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html
      expect(false).toBe(true);
    });
  });
  describe("decrement", () => {
    it("decreases the states count by one", () => {
      // We are going to trigger the decrement method by calling it directly from the component instance
      // NOTE: this way of testing only works with Class components

      // ℹ️ Step 1: Create a shallow rendering of your component
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/shallow.html

      /* 💻 Your code here */

      // ℹ️ Step 2: Assign an instance of your component to a variable
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/ShallowWrapper/instance.html

      /* 💻 Your code here */

      // ℹ️ Step 3: Call the decrement method from the instance
      // 💡 Hint: You can do this the same way you would call a method on any object
      // 💡 i.e. 'string'.toUpperCase, 1.toString(), {myMethod: () => {conosle.log('hello')}}.myMethod()

      /* 💻 Your code here */

      // ℹ️ Step 4: Change the assertion below to expect that state.counter has been incremented
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/ShallowWrapper/state.html
      expect(false).toBe(true);
    });
  });
  describe("yellCountAtMe", () => {
    it("calls alert with the correct sentence", () => {
      /* 
        This method is a little trickier, because it calls alert(), a function we have no control over
        in this situation we have to do something called 'mocking'  
        I am going to mock alert for you, but here are some articles on how the mock works
        here is a stack overflow post about mocking window methods like alert: https://stackoverflow.com/questions/53611098/how-can-i-mock-the-window-alert-method-in-jest
        here are the official Jest docs on mocking functions: https://jestjs.io/docs/en/mock-functions
      */

      global.alert = jest.fn();

      // ℹ️ Step 1: Create a shallow rendering of your component
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/shallow.html

      /* 💻 Your code here */

      // ℹ️ Step 2: Assign an instance of your component to a variable
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/ShallowWrapper/instance.html

      /* 💻 Your code here */

      // ℹ️ Step 3: Call the yellCountAtMe method
      // 💡 Hint: https://airbnb.io/enzyme/docs/api/ShallowWrapper/simulate.html

      /* 💻 Your code here */

      // ℹ️ Step 4: Change the assertions below to expect 2 things
      /* 
      1: that global.alert has been called the correct number of times (1)
      💡 Hint: https://jestjs.io/docs/en/expect#tohavebeencalledtimesnumber
      2: that global.alert was called with the correct argument (`THIS IS YOUR COUNT: ${shallowRenderedComponent.state("count")}!!!!`)
      💡 Hint: https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-
      */
      expect(false).toBe(true);
      expect(false).toBe(true);
    });
  });
});
