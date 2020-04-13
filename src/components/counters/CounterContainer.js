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
  constructor(props) {
    super(props);
    this.addNewCounter = this.addNewCounter.bind(this);
  }
  addNewCounter(id, name,cost,multiplier) {
    // console.log("addnewprops", id)
    // const { id, name, cost } = props;
    const newCounter = {
      id: id,
      name: name,
      cost: cost,
      multiplier: multiplier,
      clicks: 0,
      level: 1,
      interval: 0,
    };
    this.props.dispatch({ type: "NEW_COUNTER", newCounter });
  }

  componentDidUpdate(prevProps) {
    if (this.props.totalClicks !== prevProps.totalClicks) {
      // add any new counters to state
      allCounters.forEach((counter) => {
        if (this.props.totalClicks >= counter.minClicks) {
          const c = this.props.counterData.find((p) => p.id === counter.id);
          if (c === undefined) {
            // const newCounter = {
            //   id: counter.id,
            //   name: counter.name,
            //   cost: counter.cost,
            //   clicks: 0,
            //   level: 1,
            //   interval: 0,
            // };
            // this.props.dispatch({ type: "NEW_COUNTER", newCounter });
            // console.log("mycounter",counter)
            this.addNewCounter(counter.id, counter.name, counter.cost, counter.multiplier);
          }
        }
      });
    }
  }

  componentDidMount() {
    // empty list
    // console.log("counterdata",allCounters[0])

    if (this.props.counterData.length === 0) {
      this.addNewCounter(
        allCounters[0].id,
        allCounters[0].name,
        allCounters[0].cost,
        allCounters[0].multiplier,
      );
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
