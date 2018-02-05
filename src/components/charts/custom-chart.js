import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

import { calculateSumOfAllInvestments } from '../../calculate-change/index';

class CustomPortfolioChart extends Component {

  createChartData() {
    const values = Object.values(this.props.portfolio);
    const total = calculateSumOfAllInvestments(this.props.portfolio);
    const percentages = values.map(value => Math.round((value/total) * 100));
    const dataToRender = this.props.types.reduce((data, type, index) => {
      if (values[index]) {
        data.labels.push(`${type.name} - $${values[index]} (${percentages[index]}%)`);
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
      <div className="small-auto medium-6 cell"> 
        <h5 className="center">Your Portfolio</h5>
      <Doughnut data={data} /> 
    </div> );
  }
}

const mapStateToProps = (state) => ({ 
  portfolio: state.userPortfolio ,
  types: state.types 
});
export default connect(mapStateToProps)(CustomPortfolioChart);