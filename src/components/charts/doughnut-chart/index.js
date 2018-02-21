import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

import ChartLegend from './legend-data';
import getPortfolioSize from '../../../utility/portfolio-size.js';
import { generateChartData, generateChartDataObject, getHeader } from './chart-data';
import './doughnut-chart.css';

class DoughnutChart extends Component {

  collectData() {
    const total = this.props.userPortfolio ? getPortfolioSize(this.props.userPortfolio) : 0;
    const riskLevel = this.props.selectedLevel;
    const userPortfolio = this.props.userPortfolio;
    const userPortfolioValues = this.props.userPortfolio ? Object.values(this.props.userPortfolio) : null;
    const type = this.props.type;
    const investments = this.props.types;
    return { total, riskLevel, userPortfolio, userPortfolioValues, type, investments };
  }

  render() {
    let renderChart = (this.props.type === 'risk-level' && this.props.selectedLevel > 0) 
    || ((this.props.type === 'user-portfolio' || this.props.type === 'user-risk-portfolio') && this.props.userPortfolio !== null);
    if (renderChart) {
      const data = this.collectData();
      const chartData = generateChartData(data);
      const chartObject = generateChartDataObject(chartData);
      return ( 
        <div className="small-auto medium-auto large-4 cell"> 
          <div className="chart-header center">{getHeader(data.type, this.props.selectedLevel, data.total)}</div>
          <Doughnut data={chartObject} options={ { cutoutPercentage: 40, legend: { display: false } } } /> 
          <ChartLegend data={chartData} />
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