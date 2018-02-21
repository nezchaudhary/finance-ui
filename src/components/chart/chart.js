import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

import RiskLevelPortfolios from '../../mock-data/risk-level-portfolios';
import getPortfolioSize from '../../utility/portfolio-size.js';
import formatDollarString from '../../utility/format-dollar-string';
import ChartLegend from './chart-legend';
import { calculateHowToMoveInvestments } from '../../calculate-portfolio-shift';

import './chart.css';


class DoughnutChart extends Component {

  formatChartDataSet(data) {
    return {
      datasets: [{
        data: data.values,
        backgroundColor: data.colors
      }],
      labels: data.labels
    };
  }

  createChartDataSet(percentages, portfolio) {
    let label;
    return this.props.types.reduce((data, type, index) => {
      label = portfolio ? `${type.name} - $${formatDollarString(portfolio[index])} (${percentages[index]}%)`
        : `${type.name} (${percentages[index]}%)`;
      if (percentages[index]) {
        data.labels.push(label);
        data.colors.push(type.color);
        data.values.push(percentages[index]);
      }
      return data;
    }, { labels: [], colors: [], values: [] });
  }

  getChartData(riskPortfolio, riskValues, userPortfolioValues, total) {
    let chartData;
    if (this.props.type === 'risk-level') {
      chartData = this.createChartDataSet(riskValues);
    } else {
      if (this.props.type === 'user-risk-portfolio') {
        if (!total) {
          chartData = this.createChartDataSet(riskValues);
        } else {
          const changes = calculateHowToMoveInvestments(this.props.userPortfolio, riskPortfolio);
          const portfolio = this.props.types.reduce((result, type, i) => {
            result[type.name] = userPortfolioValues[i];
            return result;
          }, {});
          changes.map(change => {
            portfolio[change.from] -= change.value;
            portfolio[change.to] += change.value;
          });
          const adjustedPortfolio = Object.values(portfolio);
          const percentages = adjustedPortfolio.map(value => Math.round((value / total) * 100));
          chartData = this.createChartDataSet(percentages, adjustedPortfolio);
        } 
      } else if (this.props.type === 'user-portfolio') {
        const percentages = userPortfolioValues.map(value => Math.round((value / total) * 100));
        chartData = this.createChartDataSet(percentages, userPortfolioValues);
      }
    }
    return chartData;
  }

  getHeader(total) {
    let header;
    if (this.props.type === 'risk-level') {
      header = `Risk Portfolio`;
    } else if (this.props.type === 'user-portfolio') {
      header = 'Your Current Portfolio';
    } else if (this.props.type === 'user-risk-portfolio' && total) {
      header = `Ideal Risk ${this.props.selectedLevel} Portfolio for you`;
    } else if (this.props.type === 'user-risk-portfolio' && !total) {
      header = 'Risk Portfolio';
    }
    return header;
  }

  render() {
    let renderChart = (this.props.type === 'risk-level' && this.props.selectedLevel > 0) 
      || ((this.props.type === 'user-portfolio' || this.props.type === 'user-risk-portfolio') && this.props.userPortfolio !== null);
    if (renderChart) {
      const total = this.props.userPortfolio ? getPortfolioSize(this.props.userPortfolio) : 0;
      const riskPortfolio = RiskLevelPortfolios[this.props.selectedLevel]
      const riskValues = Object.values(RiskLevelPortfolios[this.props.selectedLevel]);
      const userPortfolioValues = this.props.userPortfolio ? Object.values(this.props.userPortfolio) : null;
      const data = this.getChartData(riskPortfolio, riskValues, userPortfolioValues, total);
      const chartData = this.formatChartDataSet(data);
      return ( 
        <div className="small-auto medium-auto large-4 cell"> 
          <div className="chart-header center">{this.getHeader(total)}</div>
          <Doughnut data={chartData} options={{ cutoutPercentage: 40, legend: { display: false } }} /> 
          <ChartLegend data={data} />
        </div> );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  const { selectedLevel, types, userPortfolio } = state;
  return { selectedLevel, types, userPortfolio };
};

export default connect(mapStateToProps)(DoughnutChart);