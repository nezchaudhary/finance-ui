import React, { Component } from 'react';
import { connect } from 'react-redux';

import { shiftInvestments, calculateSumOfAllInvestments } from '../../calculate-change/index';
import RiskPortfolios from '../../mock-data/risk-level-portfolios';
// import './compare-portfolios.css';

class ComparePortfolios extends Component {
  render() {
    const renderChanges = this.props.portfolio !== null;
    if (renderChanges) {
      const total = calculateSumOfAllInvestments(this.props.portfolio);
      if (!total) return null;
      const changes = shiftInvestments(this.props.portfolio, RiskPortfolios[this.props.riskLevel]);
      if (changes.length) {
        return (
          <div className="auto cell">
            <h5>
              To match your current portfolio to the risk portfolio, you would need to..
            </h5>
            {changes.map((change, i) => <div className="auto cell" key={i}>{change}</div>)}
          </div>
        );
      } else {
        return <div className="auto cell">Your portfolio is match to your risk level, you do not need to make any changes</div>
      }
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  portfolio: state.userPortfolio,
  riskLevel: state.selectedLevel
});
export default connect(mapStateToProps)(ComparePortfolios);