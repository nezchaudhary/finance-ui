import React, { Component } from 'react';

import RiskLevels from './risk-levels/levels';
import IdealPortfolio from './charts/ideal-chart';
import CustomPortfolio from './custom-portfolio/index';
import ComparePortfolios from './compare-portfolios/index';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>BrightPlan</h2>
        <RiskLevels />
        <IdealPortfolio />
        <CustomPortfolio />
        <ComparePortfolios />
      </div>
    );
  }
}

export default App;
