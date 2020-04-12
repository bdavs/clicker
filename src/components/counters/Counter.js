import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
      level,
      interval,
      onIncrement,
      onLevel,
      onInterval,
    } = this.props;
    return (
      <p>
        Name: {name} <br />
        Clicked: {clicks} times{" "}
        <button onClick={() => onIncrement(id)}>
          <h2>CLICK HERE</h2>
        </button>{" "}
        <br />
        <button onClick={() => onLevel(id)}>
          <h3>+{level}</h3>
        </button>{" "}
        <button onClick={() => onInterval(id)}>
          <h3>Speed Up Level: {interval}</h3>
        </button>{" "}
        ticks: {Math.round(5000 / interval)}
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
  return {
    totalClicks: state.counter.totalClicks,
    clicks: state.counter.counterData.find((p) => p.id === ownProps.id).clicks,
    level: state.counter.counterData.find((p) => p.id === ownProps.id).level,
    interval: state.counter.counterData.find((p) => p.id === ownProps.id).interval,
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
