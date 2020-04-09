import React, { Component } from "react";
import { connect } from "react-redux";

import Counter from "./Counter";

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
  componentDidUpdate(prevProps) {
    if (this.props.totalClicks !== prevProps.totalClicks) {
      // add any new counters to state
      allCounters.forEach((counter) => {
        if (this.props.totalClicks >= counter.minClicks) {
          const c = this.props.counterData.find((p) => p.id === counter.id);
          if (c === undefined) {
            const newCounter = {
              id: counter.id,
              name: counter.name,
              clicks: 0,
              level: 1,
              interval: 0,
            };
            this.props.dispatch({ type: "NEW_COUNTER", newCounter });
          }
        }
      });
    }
  }

  componentDidMount() {
    const newCounter = {
      id: allCounters[0].id,
      name: allCounters[0].name,
      clicks: 0,
      level: 1,
      interval: 0,
    };
    this.props.dispatch({ type: "NEW_COUNTER", newCounter });
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
    totalClicks: state.totalClicks,
    counterData: state.counterData,
  };
}
export default connect(mapStateToProps)(CounterContainer);
