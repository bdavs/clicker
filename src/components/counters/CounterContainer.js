import React, { Component } from "react";
import { connect } from "react-redux";

import Counter from "./Counter";

import "./counters.css";

function DisplayCounter(props) {
  const totalClicks = props.totalClicks;
  if (totalClicks > 3) {
    return (
      <div className="counter-item">
        <Counter test={"thisistest"} />
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
      <div className="counter-container">
        <div className="counter-item">
          <Counter test={"thisistest"} />
        </div>
        <DisplayCounter totalClicks={totalClicks}/>
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
