import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  incrementIfOdd() {
    if (this.props.totalClicks % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  componentDidUpdate(nextProps) {
    const { interval } = this.props
    if (nextProps.interval !== interval) {
      if (interval) {
        clearInterval(this.timer);
        this.delay = 5000 / this.props.interval
        this.timer = setInterval(() => this.props.onIncrement(), this.delay);
      }
    }
  }

  // componentDidMount(){
  //   this.delay = 5000 / this.props.interval
  //   this.timer = setInterval(() => this.props.onIncrement(), this.delay);
  // }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    const { totalClicks, level, interval, onIncrement, onDecrement, onLevel, onInterval} = this.props
    return (
      <p>
        Clicked: {totalClicks} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        {/* <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button> */}
        <br/>
        <button onClick={onLevel}>
          <h3>+{level}</h3>
        </button>
        {' '}
        <button onClick={onInterval}>
          <h3>Speed Up Level: {interval}</h3>
        </button>
        {' '}
        interval: {5.0/interval} seconds
      </p>
    )
  }
}

Counter.propTypes = {
  onLevel: PropTypes.func.isRequired,
  onInterval: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
      totalClicks: state.totalClicks,
      level: state.level,
      interval: state.interval
  }
}

const mapDispatchToProps = dispatch => {
  return {

onIncrement: () => dispatch({ type: "INCREMENT" }),
onDecrement: () => dispatch({ type: "DECREMENT" }),
onLevel: () => dispatch({ type: "LEVELUP" }),
onInterval: () => dispatch({ type: "INTERVAL" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);