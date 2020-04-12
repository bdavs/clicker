
import React, { Component } from "react";
import { connect } from "react-redux";

import Scrolly from "./Scrolly";

import "./scrollers.css";


function DisplayScrolly(props) {
  const totalClicks = props.totalClicks;
  if (totalClicks > 5) {
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
      <div className="item ">
        <div className="counter-container">
          <DisplayScrolly
            name={"first"}
            totalClicks={totalClicks}
            minClicks={0}
          />
          {/* <DisplayScrolly
            name={"second"}
            totalClicks={totalClicks}
            minClicks={5}
          /> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
  };
}
export default connect(mapStateToProps)(ScrollerContainer);