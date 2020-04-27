import React, { Component } from "react";
import { connect } from "react-redux";

import ScrollerContainer from "./scrollers/ScrollerContainer";
import CounterContainer from "./counters/CounterContainer";
import ClickCount from "./ClickCount";
import Tickertape from "./tickertape/Tickertape"
import Menu from "./menu/Menu";

import "../index.css";

class Layout extends Component {
  render() {
    // const { totalClicks } = this.props;
    return (
      <div className="outer-container">
        <div className="upper-item">
          <Tickertape />
          <ClickCount />
        </div>
        <Menu />
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
    totalClicks: state.counter.totalClicks,
  };
}
export default connect(mapStateToProps)(Layout);
