import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import Portfolios from '../../data/portfolio';

class IdealPortfolio extends Component {

  createChartData() {
    const portfolio = Portfolios[this.props.level];
    const values = Object.values(portfolio);
    const types = ['Cash', 'Bonds', 'Mutual Funds', 'Gold', 'Stocks']
      .map((type, index) => `${type} - ${values[index]}%`);
    
    const chartData = {
      datasets:[{
        data: values,
        backgroundColor: ['red', 'blue', 'green', 'orange', 'yellow']
      }],
      labels: types
    };
  return chartData;
  }

  render() {
    let renderChart = this.props.level > 0;
    if (renderChart) {
      const data = this.createChartData();
      const headline = <div>Ideal portfolio for risk level - {this.props.level} </div>
      return ( <div> {headline} <Doughnut data={data} /> </div> );
    }
    return null;
  }
}

const mapStateToProps = (state) => ( { level: state.selectedLevel } );
export default connect(mapStateToProps)(IdealPortfolio);