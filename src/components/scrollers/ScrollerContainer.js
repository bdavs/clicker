
import React, { Component } from "react";
import { connect } from "react-redux";

import Scrolly from "./Scrolly";

import "./scrollers.css";


function DisplayScrolly(props) {
  const totalClicks = props.totalClicks;
  if (totalClicks > props.minClicks) {
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
            name={"first"}
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