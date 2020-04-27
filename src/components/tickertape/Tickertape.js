import React, { Component } from "react";
import { connect } from "react-redux";

import "./tickertape.css";

function tickerText() {
  const text = "this is a shitload of text like so much juck copious amountsticker this is a shitload of text like so much juck copious amountstickerthis is a shitload of text like so much juck copious amountsticker"
  // const text = "hi"
  const tickerTime = Math.max(text.length / 30, 20)
  const tickerStyle = {animationDuration: tickerTime+"s"}
  return (
    <p style={tickerStyle}>
      {text}
    </p>
  );
}
class Tickertape extends Component {
  render() {
    // const {totalClicks} = this.props;
    return <div className="marquee">
      {tickerText()}
    </div>;
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
  };
}
export default connect(mapStateToProps)(Tickertape);
