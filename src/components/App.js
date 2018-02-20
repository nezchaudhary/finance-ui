import React, { Component } from 'react';
import { connect } from 'react-redux';

import RiskLevels from './risk-levels/risk-levels';
import DoughnutChart from './chart/chart';
import UserPortfolio from './user-portfolio-form/index';
import ComparePortfolios from './compare-portfolios/index';
import Header from './headers/header';

import './App.css';

class App extends Component {
  // getChartClasses() {
  //   if (this.props.userPortfolio) {
  //     return "small-12 medium-6 large-6 cell chart";
  //   }
  //   return "small-12 medium-8 medium-offset-2 large-8 large-offset-2 cell chart"
  // }

  render() {
    return (
      <div>
        <h2 className="company-name">
          <span className="bright-color">Investi</span>
          <span className="plan-color">Me</span>
        </h2>
        <Header type="main"/>
        <RiskLevels />
        <div className="grid-x grid-padding-x">
          <div className="small-12 medium-6 large-6 cell chart">
            <DoughnutChart type="risk-level"/>
          </div>
          <div className="small-12 medium-6 large-6 cell chart">
            <UserPortfolio />
          </div>
        </div>
        <div className="grid-x center">
          <ComparePortfolios />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ selectedLevel: state.selectedLevel, userPortfolio: state.userPortfolio });
export default connect(mapStateToProps)(App);
