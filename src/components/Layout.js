import React, { Component } from "react";
import { connect } from "react-redux";

import ScrollerContainer from "./scrollers/ScrollerContainer";
import CounterContainer from "./counters/CounterContainer";
import ClickCount from "./ClickCount";

import "../index.css";

class Layout extends Component {
  render() {
    const { totalClicks } = this.props;
    return (
      <div className="outer-container">
        <div className="upper-item">
          <ClickCount />
        </div>
        <div className="container">
          <CounterContainer />
          <ScrollerContainer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.totalClicks,
  };
}
export default connect(mapStateToProps)(Layout);
