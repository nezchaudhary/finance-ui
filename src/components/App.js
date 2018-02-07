import React, { Component } from 'react';

import RiskLevels from './risk-levels/risk-levels';
import IdealPortfolio from './charts/ideal-chart';
import CustomPortfolio from './custom-portfolio/index';
import ComparePortfolios from './compare-portfolios/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="company-name">
          <span className="bright-color">Bright</span>
          <span className="plan-color">Plan</span>
        </h2>
        <RiskLevels />
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-6 cell chart">
            <IdealPortfolio />
          </div>
          <div className="small-12 medium-6 cell chart custom">
            <CustomPortfolio />
          </div>
        </div>
        <div className="grid-x center">
          <ComparePortfolios />
        </div>
      </div>
    );
  }
}

export default App;