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
        <h2 className="company-name center">BrightPlan</h2>
        <RiskLevels />
        <div className="grid-x grid-margin-x">
          <div className="small-12 medium-6 cell chart center">
            <IdealPortfolio />
          </div>
          <div className="small-12 medium-6 cell chart center">
            <CustomPortfolio />
          </div>
        </div>
        <div className="grid-x grid-margin-x">
          <ComparePortfolios />
        </div>
      </div>
    );
  }
}

export default App;