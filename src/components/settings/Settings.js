import React, { Component } from "react";
import {connect} from "react-redux";
// import BigNumber from "bignumber"
// const BigNumber = require('bignumber.js');
// import "./menu.css"


class Settings extends Component {
  render() {
    // const {totalClicks} = this.props;
    return (
    <div className="settings">
      <h1 >HELLO!!!</h1>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
  };
}
export default connect(mapStateToProps)(Settings);
