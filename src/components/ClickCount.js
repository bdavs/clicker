import React, { Component } from "react";
import {connect} from "react-redux";
// import BigNumber from "bignumber"
const BigNumber = require('bignumber.js');

const fmt = {
  // string to prepend
  prefix: '',
  // decimal separator
  decimalSeparator: '.',
  // grouping separator of the integer part
  groupSeparator: ',',
  // primary grouping size of the integer part
  groupSize: 3,
  // secondary grouping size of the integer part
  secondaryGroupSize: 0,
  // grouping separator of the fraction part
  fractionGroupSeparator: ' ',
  // grouping size of the fraction part
  fractionGroupSize: 0,
  // string to append
  suffix: 'Sv'
}

BigNumber.config({
  DECIMAL_PLACES: 2,
  FORMAT: fmt
});

class ClickCount extends Component {
  render() {
    const {totalClicks} = this.props;
    const bntc = BigNumber(totalClicks);
    // let myfmt = fmt;
    let ending = '';
    let result = 0;
    const x = bntc.e;
    switch (true) {
      case (x < 3):
          ending = 'nSv'
          result = bntc.toNumber()
          break;
      case (x < 6):
          ending = 'uSv'
          result = bntc.div(1e3)
          break;
      case (x < 9):
          ending = 'mSv'
          result = bntc.div(1e6)
          break;
      default:
          ending = 'Sv'
          result = bntc.div(1e9)
          break;
    }
    
    const displayedClicks = result + ' ' + ending

    // bntc.toFormat(0,0,myfmt)
    
    return (
    <div>
      
      <h1>Clicks:<br/>{displayedClicks}</h1>
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
