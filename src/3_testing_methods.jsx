import React, { Component } from "react";

class MyBasicComponent extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };
  decrement = () => {
    this.setState(({ counter }) => ({ counter: counter - 1 }));
  };

  yellCountAtMe = () => {
    alert(`THIS IS YOUR COUNT: ${this.state.count}!!!!`);
  };

  render() {
    return (
      <main>
        <section class="happy-section">
          <h1>Hello World</h1>
          <div>
            <button class="button decrement" onClick={this.decrement}>
              -
            </button>
            <p>{this.state.counter}</p>
            <button class="button increment" onClick={this.increment}>
              +
            </button>
          </div>
          <button onClick={this.yellCountAtMe}>Yell Count at Me</button>
        </section>
      </main>
    );
  }
}

export default MyBasicComponent;
