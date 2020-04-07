import React, { Component } from "react";
import { connect } from "react-redux";

import Scrolly from "./Scrolly";
import CountrContainer from "./counters/CounterContainer";
import ClickCount from "./ClickCount";

import "../index.css";

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

class Layout extends Component {
  render() {
    const { totalClicks } = this.props;
    return (
      <div className="outer-container">
        <div className="upper-item">
          <ClickCount />
        </div>
        <div className="container">
          <div className="item ">
            <CountrContainer/>
          </div>
          <DisplayScrolly totalClicks={totalClicks} />
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
