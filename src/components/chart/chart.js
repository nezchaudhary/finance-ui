import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

import RiskLevelPortfolios from '../../mock-data/risk-level-portfolios';
import getPortfolioSize from '../../utility/portfolio-size.js';
import formatDollarString from '../../utility/format-dollar-string';


class IdealPortfolioChart extends Component {

  getRiskLevelChartInfo() {
    const portfolio = RiskLevelPortfolios[this.props.level];
    const values = Object.values(portfolio);
    const dataToRender = this.props.types.reduce((data, type, index) => {
      if (values[index]) {
        data.labels.push(`${type.name} - ${values[index]}%`);
        data.colors.push(type.color);
        data.values.push(values[index]);
      }
      return data;
    }, { labels: [], colors: [], values: [] });

    const chartData = {
      datasets: [{
        data: dataToRender.values,
        backgroundColor: dataToRender.colors
      }],
      labels: dataToRender.labels
    };
    return chartData;
  }

  getUserPortfolioChartData() {
    const values = Object.values(this.props.userPortfolio);
    const total = getPortfolioSize(this.props.userPortfolio);
    const percentages = values.map(value => Math.round((value / total) * 100));
    const dataToRender = this.props.types.reduce((data, type, index) => {
      if (values[index]) {
        data.labels.push(`${type.name} - $${formatDollarString(values[index])} (${percentages[index]}%)`);
        data.colors.push(type.color);
        data.values.push(values[index]);
      }
      return data;
    }, { labels: [], colors: [], values: [] });

    const chartData = {
      datasets: [{
        data: dataToRender.values,
        backgroundColor: dataToRender.colors
      }],
      labels: dataToRender.labels
    };
    return chartData;
  }

  createChartData() {
    if (this.props.type ==='risk-level') {
      return this.getRiskLevelChartInfo();
    } else if (this.props.type ==='user-portfolio') {
      return this.getUserPortfolioChartData();
    }
  }

  render() {
    let renderChart = (this.props.level > 0 && this.props.type === 'risk-level') 
      || (this.props.type === 'user-portfolio' && this.props.userPortfolio !== null);
    if (renderChart) {
      const data = this.createChartData();
      return ( 
        <div className="small-auto medium-auto large-4 cell"> 
          <h5 className="center"> Risk Level {this.props.level} Portfolio</h5>
          <Doughnut data={data} options={{ cutoutPercentage: 40 }} /> 
        </div> );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({ 
  level: state.selectedLevel, 
  types: state.types ,
  userPortfolio: state.userPortfolio
});
export default connect(mapStateToProps)(IdealPortfolioChart);