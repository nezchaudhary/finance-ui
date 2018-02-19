import React, { Component } from 'react';
import { connect } from 'react-redux';

import RiskLevels from './risk-levels/risk-levels';
import DoughnutChart from './chart/chart';
import CustomPortfolio from './custom-portfolio/index';
import ComparePortfolios from './compare-portfolios/index';
import Header from './main-header/header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2 className="company-name">
          <span className="bright-color">Investi</span>
          <span className="plan-color">Me</span>
        </h2>
          <Header />
        <RiskLevels />
        <div className="grid-x grid-padding-x">
          <div className="small-auto medium-auto cell chart">
            <DoughnutChart type="risk-level"/>
          </div>
          
          <div className="small-auto medium-auto cell chart custom">
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

const mapStateToProps = (state) => ({ selectedLevel: state.selectedLevel });
export default connect(mapStateToProps)(App);

/* div className="small-auto medium-auto cell chart">
<DoughnutChart type="user-portfolios" />
          </div >

          */