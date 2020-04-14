import React, { Component } from "react";
import { connect } from "react-redux";

import Counter from "./Counter";
import { NotificationManager } from "react-notifications";
import allCounters from "./counters.json";
import "./counters.css";

function DisplayCounters(props) {
  const { counterData } = props;
  return counterData.map((counter) => (
    <div key={counter.id} className="counter-item">
      <Counter key={counter.id} name={counter.name} id={counter.id} />
    </div>
  ));
}

class CounterContainer extends Component {
  constructor(props) {
    super(props);
    this.addNewCounter = this.addNewCounter.bind(this);
  }
  addNewCounter(counter) {
    // console.log("addnewprops", id)
    // const { id, name, cost } = props;
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
        "New Clicker Unlocked!"
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
    console.log("counterdata", allCounters[0]);
    console.log(this.props);
    if (this.props.counterData.length === 0) {
      console.log("YES!");
      this.addNewCounter(allCounters[0]);
    }
  }

  render() {
    const { counterData } = this.props;
    return (
      <div className="item ">
        <div className="counter-container">
          <DisplayCounters counterData={counterData} />
        </div>
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
