import React, { Component } from "react";
import {connect} from "react-redux";
// import BigNumber from "bignumber"
// const BigNumber = require('bignumber.js');
import "./menu.css"


class Menu extends Component {
  render() {
    return (
    <div className="menu">
      <button className="menu-btn" onClick={() => this.props.setMain()}>Main</button>
      <button className="menu-btn" onClick={() => this.props.setSettings()}>Settings</button>
      <button className="menu-btn" onClick={() => this.props.setAchievements()}>Achievements</button>
      {/* <button >Main</button> */}
    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSettings: () => dispatch({ type: "SET_SETTINGS"}),
    setMain: () => dispatch({ type: "SET_MAIN" }),
    setAchievements: () => dispatch({ type: "SET_ACHIEVEMENTS" }),
  };
};

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);
