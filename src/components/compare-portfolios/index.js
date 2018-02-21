import React, { Component } from 'react';
import { connect } from 'react-redux';

import { calculateHowToMoveInvestments } from '../../calculate-portfolio-shift/index';
import getPortfolioSize from '../../utility/portfolio-size.js';
import RiskPortfolios from '../../mock-data/risk-level-portfolios';
import formatDollarString from '../../utility/format-dollar-string';
import Header from '../headers';
import './compare-portfolio.css';

class ComparePortfolios extends Component {
  render() {
    const renderChanges = this.props.portfolio !== null;
    if (renderChanges) {
      const total = getPortfolioSize(this.props.portfolio);
      if (!total) return null;
      const changes = calculateHowToMoveInvestments(this.props.portfolio, RiskPortfolios[this.props.riskLevel]);
      if (changes.length) {
        return (
          <div className="center portfolio-change-container">
            <Header type="portfolio-size" class="portfolio-size text-bold" header={`Your portfolio size: $${total}`} />
            <Header type="compare" class="portfolio-change-header" header="To match your portfolio to the risk portfolio, you need to.." />
            {changes.map((change, i) => (<div className="auto cell" key={i}>{`Move $${formatDollarString(change.value)} from ${change.from} to ${change.to}`}</div>))}
          </div>
        );
      } else {
        return <Header type="compare" class="compare-header" header="Your portfolio is match to your risk level, you do not need to make any changes" />
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