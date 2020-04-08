import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types'

class Counter extends Component {
  componentDidUpdate(nextProps) {
    const { interval } = this.props
    if (nextProps.interval !== interval) {
      if (interval) {
        clearInterval(this.timer);
        this.delay = Math.round(5000 / this.props.interval)
        this.timer = setInterval(() => this.props.onIncrement(), this.delay);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  render() {
    const { totalClicks, level, interval, onIncrement, onLevel, onInterval, name} = this.props
    return (
      <p>
        Name: {name} <br/>
        Clicked: {totalClicks} times
        {' '}
        <button onClick={onIncrement} >
          <h2>CLICK HERE</h2>
        </button>
        {' '}

        <br/>
        <button onClick={onLevel}>
          <h3>+{level}</h3>
        </button>
        {' '}
        <button onClick={onInterval}>
          <h3>Speed Up Level: {interval}</h3>
        </button>
        {' '}
        ticks: {Math.round(5000/interval)} 
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