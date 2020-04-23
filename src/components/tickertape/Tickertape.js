import React, { Component } from "react";
import {connect} from "react-redux";
// import BigNumber from "bignumber"
// const BigNumber = require('bignumber.js');
import "./tickertape.css"


class Tickertape extends Component {
  render() {
    const {totalClicks} = this.props;
    // const bntc = BigNumber(totalClicks);
    // let myfmt = fmt;
    // let ending = '';
    // let result = 0;

    
    // const displayedClicks = result + ' ' + ending

    // bntc.toFormat(0,0,myfmt)
    
    return (
    <div className="marquee">
      
      <p>
      this is a shitload of text like so much juck copious amountsticker this is a shitload of text like so much juck copious amountstickerthis is a shitload of text like so much juck copious amountsticker
      </p>
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
