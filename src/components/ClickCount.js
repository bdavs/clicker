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
  suffix: ''
}

BigNumber.config({
  FORMAT: fmt
});

class ClickCount extends Component {
  render() {
    const {totalClicks} = this.props;
    const bntc = BigNumber(totalClicks);
    let myfmt = fmt;
    if (bntc.e > 3 ){
      myfmt.suffix = 'thousand'
    }
    return (
    <div>
      
      <h1>Clicks:<br/>{bntc.toFormat(0,0,myfmt)}</h1>
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
