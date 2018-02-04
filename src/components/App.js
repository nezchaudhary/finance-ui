import React, { Component } from 'react';
import { connect } from 'react-redux';
import RiskToleranceLevels from './risk-tolerance/levels';
import IdealPortfolio from './charts/ideal-portfolio';
import UserPortfolioForm from './user-portfolio/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <h2>BrightPlan</h2>
        <RiskToleranceLevels />
        <IdealPortfolio />
        <UserPortfolioForm />
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
