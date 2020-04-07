import React, { Component } from "react";
import {connect} from "react-redux";

class ClickCount extends Component {
  render() {
    const {totalClicks} = this.props;

    return <h1>{totalClicks}</h1>;
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.totalClicks,
  };
}
export default connect(mapStateToProps)(ClickCount);
