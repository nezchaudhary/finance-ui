import React, { Component } from 'react';
import { connect } from 'react-redux';

import RiskLevels from './risk-levels/risk-levels';
import DoughnutChart from './chart/chart';
import UserPortfolio from './user-portfolio-form/index';
import ComparePortfolios from './compare-portfolios/index';
import Header from './headers';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="company-name">
          <span className="bright-color">Investi</span>
          <span className="plan-color">Me</span>
        </h2>
        <Header 
          type="main" 
          header="Compare your investment portfolio with a ideal investment portfolio for risk levels
            between 1-10"
        />
        <RiskLevels />
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-6 large-6 cell chart">
            <DoughnutChart type={this.props.userPortfolio ? "user-risk-portfolio" : "risk-level"} />
          </div>
          <div className="small-12 medium-6 large-6 cell chart">
            <UserPortfolio />
          </div>
        </div>
          <ComparePortfolios />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ selectedLevel: state.selectedLevel, userPortfolio: state.userPortfolio });
export default connect(mapStateToProps)(App);
