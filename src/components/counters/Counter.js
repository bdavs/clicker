import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./counters.css";

class Counter extends Component {

  setCounterInterval(interval) {
    if (interval > 0) {
      clearInterval(this.timer);
      this.delay = Math.round(5000 / interval);
      this.timer = setInterval(() => this.props.onIncrement(this.props.id), this.delay);
    }
  }

  componentDidUpdate(prevProps) {
    const { interval } = this.props;
    if (prevProps.interval !== interval) {
      this.setCounterInterval(interval);
    }
  }

  componentDidMount() {
    const { interval } = this.props;
    this.setCounterInterval(interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    const {
      clicks,
      name,
      id,
      cost,
      level,
      multiplier,
      interval,
      onIncrement,
      onLevel,
      onInterval,
    } = this.props;

    return (
      <p>
        <div className="counter-name" >
          {name}:   
        </div>
        <div className="multiplier">
          Multiplier: {multiplier}
        </div>
        <div className="clicks">
          Clicked: {clicks} times
        </div>
        <button className="click-btn btn" onClick={() => onIncrement(id)}>
          <h2>CLICK HERE {level} x {multiplier} = {level * multiplier}</h2>
        </button>
        <button className="level-btn btn" onClick={() => onLevel(id)}>
          <h3>+{level } cost: {cost}</h3>
        </button>
        <button className="tick-btn btn" onClick={() => onInterval(id)}>
          <h3>Speed Up Level: {interval} ticks: {Math.round(5000 / interval)}</h3>
        </button>
      </p>
    );
  }
}

Counter.propTypes = {
  onLevel: PropTypes.func.isRequired,
  onInterval: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  // console.log("state",state)
  // console.log("ownstate",ownProps)
  return {
    totalClicks: state.counter.totalClicks,
    clicks: state.counter.counterData.find((p) => p.id === ownProps.id).clicks,
    level: state.counter.counterData.find((p) => p.id === ownProps.id).level,
    interval: state.counter.counterData.find((p) => p.id === ownProps.id).interval,
    cost: state.counter.counterData.find((p) => p.id === ownProps.id).cost,
    multiplier: state.counter.counterData.find((p) => p.id === ownProps.id).multiplier,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: (id) => dispatch({ type: "INCREMENT", id }),
    onDecrement: (id) => dispatch({ type: "DECREMENT", id }),
    onLevel: (id) => dispatch({ type: "LEVELUP", id }),
    onInterval: (id) => dispatch({ type: "INTERVAL", id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
