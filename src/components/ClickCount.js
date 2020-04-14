import React, { Component } from "react";
import {connect} from "react-redux";

class ClickCount extends Component {
  render() {
    const {totalClicks} = this.props;

    return (
    <div>
      
      <h1>Clicks:<br/>{totalClicks}</h1>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
  };
}
export default connect(mapStateToProps)(ClickCount);
