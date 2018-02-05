import React, { Component } from 'react';
import { connect } from 'react-redux';

import { shiftInvestments } from '../../calculate-change/index';
import RiskPortfolios from '../../mock-data/risk-level-portfolios';
import './compare-portfolios.css';

class ComparePortfolios extends Component {
  render() {
    const renderChanges = this.props.portfolio !== null;
    if (renderChanges) {
      const changes = shiftInvestments(this.props.portfolio, RiskPortfolios[this.props.riskLevel]);
      console.log('changes', changes);
      if (changes.length) {
        return (
          <div>
            To match your current portfolio to the ideal risk level distribution
            {changes.map((change, i) => <div key={i}>{change}</div>)}
          </div>
        );
      } else {
        return <div>Your portfolio is match to your risk level, you do not need to make any changes</div>
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