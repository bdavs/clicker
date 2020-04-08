import React, { Component } from "react";
import { connect } from "react-redux";

import Counter from "./Counter";

import "./counters.css";

function DisplayCounter(props) {
  const { totalClicks, minClicks, name } = props;
  if (totalClicks >= minClicks) {
    return (
      <div className="counter-item">
        <Counter name={name} />
      </div>
    );
  } else {
    return null;
  }
}

class CounterContainer extends Component {
  render() {
    const { totalClicks } = this.props;

    return (
      <div className="item ">
        <div className="counter-container">
          <DisplayCounter
            name={"first"}
            totalClicks={totalClicks}
            minClicks={0}
          />
          <DisplayCounter
            name={"second"}
            totalClicks={totalClicks}
            minClicks={5}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.totalClicks,
  };
}
export default connect(mapStateToProps)(CounterContainer);
