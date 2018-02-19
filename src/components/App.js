import React, { Component } from 'react';

import RiskLevels from './risk-levels/risk-levels';
import RiskChart from './chart/chart';
import CustomPortfolio from './custom-portfolio/index';
import ComparePortfolios from './compare-portfolios/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="company-name">
          <span className="bright-color">Investi</span>
          <span className="plan-color">Me</span>
        </h2>
        <RiskLevels />
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-6 cell chart">
            <RiskChart type="risk-level"/>
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