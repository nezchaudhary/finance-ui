import React, { Component } from 'react';
import { connect } from 'react-redux';
import RiskLevels from './risk-levels/levels';
import IdealPortfolio from './charts/ideal-chart';
import UserPortfolio from './user-portfolio/index';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>BrightPlan</h2>
        <RiskLevels />
        <IdealPortfolio />
        <UserPortfolio />
      </div>
    );
  }
}

export default App;
