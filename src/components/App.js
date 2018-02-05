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
        <div className="grid-x">
          <IdealPortfolio />
          <CustomPortfolio />
        </div>
        <ComparePortfolios />
      </div>
    );
  }
}

export default App;

// small - 10 small - offset - 1 medium - 6 medium - offset - 3 large - 4 large - offset - 4 cell

// small - 12 medium - 8 medium - offset - 2 large - 6 large - offset - 3 