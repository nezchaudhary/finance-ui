import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

import RiskLevelPortfolios from '../../mock-data/risk-level-portfolios';
import getPortfolioSize from '../../utility/portfolio-size.js';
import formatDollarString from '../../utility/format-dollar-string';
import ChartLedger from './chart-ledger';

import './chart.css';


class DoughnutChart extends Component {

  formatChartDataSet(data) {
    return {
      datasets: [{
        data: data.values,
        backgroundColor: data.colors
      }]
      // labels: data.labels
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
      console.log('data', data);
      const chartData = this.formatChartDataSet(data);
      return ( 
        <div className="small-auto medium-auto large-4 cell"> 
          <h5 className="center">{this.getHeader()}</h5>
          <Doughnut data={chartData} options={{ cutoutPercentage: 40 }} /> 
          <div className="grid-x grid-padding-x">
          
            <div className="center" style={ { margin: 'auto' }}>
              {data.labels.map((value, index) => {
                const style = { 'backgroundColor': `${data.colors[index]}` };
                return (
                  <span className="legend-main" key={value}>
                   <div className="legend-color" style={style}></div>
                    <span className="legend-data"> - {value}</span>
                  </span>
                );
              })}
            </div>    
          </div>
        </div> );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({ 
  selectedLevel: state.selectedLevel, 
  types: state.types ,
  userPortfolio: state.userPortfolio
});
export default connect(mapStateToProps)(DoughnutChart);