import React, { Component } from "react";
import { connect } from "react-redux";
import tickertapeList from "./tickertape.json";

import "./tickertape.css";

// function
class Tickertape extends Component {
  constructor(props) {
    super(props);
    this.state = { ticktext: <p>Hello</p> };
  }

  tickerText() {
    // const text = "this is a shitload of text like so much juck copious amountsticker this is a shitload of text like so much juck copious amountstickerthis is a shitload of text like so much juck copious amountsticker"
    // const text = "hi"
    const text =
      tickertapeList[Math.floor(Math.random() * tickertapeList.length)]; //maybe change the length of the news list to reveal more items as things are unlocked
    const tickerTime = Math.max(text.length / 30, 20);
    const tickerStyle = { animationDuration: tickerTime + "s" };
    this.setState({
      ticktext: <p style={tickerStyle}>{text}</p>,
    });
    setTimeout(() => this.tickerText(), tickerTime*1000);
  }

  componentDidMount() {
    this.tickerText();
    // this.ticktext = <p>goodbye</p>
  }

  render() {
    // const {totalClicks} = this.props;

    return (
      <div className="marquee">
        {/* {this.tickerText()} */}
        {this.state.ticktext}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalClicks: state.counter.totalClicks,
  };
}
export default connect(mapStateToProps)(Tickertape);
