import React, { Component } from 'react';
import { connect } from 'react-redux';
import RiskToleranceLevels from './risk-tolerance/levels';
import IdealPortfolio from './charts/ideal-portfolio';

class App extends Component {
  render() {
    return (
      <div>
        <RiskToleranceLevels />
        <IdealPortfolio />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedLevel: state.selectedLevel
  }
}

export default connect(mapStateToProps)(App);
