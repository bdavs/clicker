import React, { Component } from "react";
import { connect } from "react-redux";

import Counter from "./Counter";

import "./counters.css";

function DisplayCounter(props) {
  const { totalClicks, minClicks, name, id, counterData} = props;
  if (totalClicks >= minClicks) {
    const counter = counterData.find((p) => p.id === id);
    if (counter === undefined) {
      const newCounter = { id: id, name: name, level: 1, interval: 0 }
      props.dispatch({ type: "NEW_COUNTER", newCounter })
    }
    return (
      <div className="counter-item">
        <Counter name={name} id={id}/>
      </div>
    );
  } else {
    return null;
  }
}

class CounterContainer extends Component {
  render() {
    const { totalClicks, counterData } = this.props;

    return (
      <div className="item ">
        <div className="counter-container">
          <DisplayCounter
            name={"first"}
            id={0}
            totalClicks={totalClicks}
            minClicks={0}
            counterData={counterData}
          />
          <DisplayCounter
            name={"second"}
            id={1}
            totalClicks={totalClicks}
            minClicks={5}
            counterData={counterData}
            dispatch={this.props.dispatch}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.totalClicks,
    counterData: state.counterData,
  };
}
export default connect(mapStateToProps)(CounterContainer);
