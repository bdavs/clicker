import React, { Component } from "react";
import { connect } from "react-redux";

import ScrollerContainer from "./scrollers/ScrollerContainer";
import CounterContainer from "./counters/CounterContainer";
import ClickCount from "./ClickCount";
import Tickertape from "./tickertape/Tickertape";
import Menu from "./menu/Menu";
import Settings from "./settings/Settings"

import "../index.css";

function SetLayout(props) {
  if (props.menu === "main") {
    return (
      <div className="main container">
        <CounterContainer />
        <ScrollerContainer />
      </div>
    );
  } else if (props.menu === "settings") {
    return (
      <div className="settings container">
        <Settings />
      </div>
    );
  } else if (props.menu === "achievements") {
    return (
      <div className="achievements container">
        <CounterContainer />
        <ScrollerContainer />
      </div>
    );
  } else {
    return null
  }
}

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

        <SetLayout menu={this.props.menu} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
    menu: state.menu,
  };
}
export default connect(mapStateToProps)(Layout);
