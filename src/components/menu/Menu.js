import React, { Component } from "react";
import {connect} from "react-redux";
// import BigNumber from "bignumber"
// const BigNumber = require('bignumber.js');
import "./menu.css"


class Menu extends Component {
  render() {
    const {totalClicks} = this.props;
    return (
    <div className="menu">
      <button className="menu-btn" >Main</button>
      <button className="menu-btn" >Settings</button>
      <button className="menu-btn" >Achievements</button>
      {/* <button >Main</button> */}
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
  };
}
export default connect(mapStateToProps)(Menu);
