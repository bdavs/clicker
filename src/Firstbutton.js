import React from "react";

class Firstbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ff",
      counter: 0
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevstate => ({
      counter: prevstate.counter + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <h3>{this.state.name}</h3>
        </button>
        <h2> {this.state.counter} </h2>
      </div>
    );
  }
}

export default Firstbutton;
