import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

import RiskLevelPortfolios from '../../mock-data/risk-level-portfolios';
import getPortfolioSize from '../../utility/portfolio-size.js';
import formatDollarString from '../../utility/format-dollar-string';
import ChartLegend from './chart-legend';

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

  getChartData() {
    let chartData;
    if (this.props.type === 'risk-level') {
      const values = Object.values(RiskLevelPortfolios[this.props.selectedLevel]);
      chartData = this.createChartDataSet(values);
      
    } else if (this.props.type === 'user-portfolio') {
      const values = Object.values(this.props.userPortfolio);
      const total = getPortfolioSize(this.props.userPortfolio);
      const percentages = values.map(value => Math.round((value / total) * 100));
      chartData = this.createChartDataSet(percentages, values);
    }
    return chartData;
  }

  getHeader() {
    let header;
    if (this.props.type === 'risk-level') {
      header = `Risk Portfolio`;
    } else if (this.props.type === 'user-portfolio') {
      header = 'Your Portfolio';
    }
    return header;
  }

  render() {
    let renderChart = (this.props.type === 'risk-level' && this.props.selectedLevel > 0) 
      || (this.props.type === 'user-portfolio' && this.props.userPortfolio !== null);
    if (renderChart) {
      const data = this.getChartData();
      const chartData = this.formatChartDataSet(data);
      return ( 
        <div className="small-auto medium-auto large-4 cell"> 
          <div className="chart-header center">{this.getHeader()}</div>
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