import React, { Component } from "react";
import { connect } from "react-redux";

import Counter from "./Counter";
import { NotificationManager } from "react-notifications";
import allCounters from "./counters.json";
import "./counters.css";

function DisplayCounters(props) {
  const { counterData } = props;
  return counterData.map((counter) => (
    // <div key={counter.id}>
      <Counter key={counter.id} name={counter.name} id={counter.id} />
    // </div>
  ));
}

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.addNewCounter = this.addNewCounter.bind(this);
  }
  addNewCounter(counter) {
    const newCounter = {
      id: counter.id,
      name: counter.name,
      cost: counter.cost,
      multiplier: counter.multiplier,
      clicks: 0,
      level: 1,
      interval: 0,
    };
    this.props.dispatch({ type: "NEW_COUNTER", newCounter });
    if (counter.id !== 0) {
      NotificationManager.info(
        "Unlocked " + counter.name + "!",
        "New Clicker Unlocked!",
        //5000, () => {
          // alert("callback");
        // }
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.totalClicks !== prevProps.totalClicks) {
      // add any new counters to state
      allCounters.forEach((counter) => {
        if (this.props.totalClicks >= counter.minClicks) {
          const c = this.props.counterData.find((p) => p.id === counter.id);
          if (c === undefined) {
            this.addNewCounter(counter);
          }
        }
      });
    }
  }

  componentDidMount() {
    // empty list
    if (this.props.counterData.length === 0) {
      this.addNewCounter(allCounters[0]);
    }
  }

  render() {
    const { counterData } = this.props;
    return (
      <div className="item counter-container">
        {/* <div className=""> */}
          <DisplayCounters counterData={counterData} />
        {/* </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
    counterData: state.counter.counterData,
  };
}
export default connect(mapStateToProps)(CounterContainer);
