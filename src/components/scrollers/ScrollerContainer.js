
import React, { Component } from "react";
import { connect } from "react-redux";

import Scrolly from "./Scrolly";

import "./scrollers.css";


function DisplayScrolly(props) {
  const totalClicks = props.totalClicks;
  if (props.enabled && totalClicks > props.minClicks) {
    return (
      <div className="item">
        <div id="scrolly" className="scrolly">
          <Scrolly />
        </div>
      </div>
    );
  } else {
    return null;
  }
}


class ScrollerContainer extends Component {
  render() {
    const { totalClicks } = this.props;

    return (
      // <div className="item ">
      //   <div className="scroller-container">
          <DisplayScrolly
            enabled = {false}
            totalClicks={totalClicks}
            minClicks={5000}
          />
      //   </div>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
  };
}
export default connect(mapStateToProps)(ScrollerContainer);