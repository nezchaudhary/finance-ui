import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

import { calculateSumOfAllInvestments, parseDollars } from '../../calculate-change/index';

class CustomPortfolioChart extends Component {

  createChartData() {
    const values = Object.values(this.props.portfolio);
    const total = calculateSumOfAllInvestments(this.props.portfolio);
    const percentages = values.map(value => Math.round((value/total) * 100));
    const dataToRender = this.props.types.reduce((data, type, index) => {
      if (values[index]) {
        data.labels.push(`${type.name} - $${parseDollars(values[index])} (${percentages[index]}%)`);
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

  render() {
    const data = this.createChartData();
    return ( 
      <div> 
        <h5 className="center">Your Portfolio</h5>
      <Doughnut data={data} options={{ cutoutPercentage: 40 }} /> 
    </div> );
  }
}

const mapStateToProps = (state) => ({ 
  portfolio: state.userPortfolio ,
  types: state.types 
});
export default connect(mapStateToProps)(CustomPortfolioChart);