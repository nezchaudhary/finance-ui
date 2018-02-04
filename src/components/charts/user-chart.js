import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

class UserPortfolio extends Component {

  createChartData() {
    const values = Object.values(this.props.portfolio);
    const total = values.reduce((total, value) => total + value, 0);
    const percentages = values.map(value => Math.round((value/total) * 100));
    const types = Object.keys(this.props.portfolio).map((type, index) => `${type} (${percentages[index]}%)`);

    const chartData = {
      datasets: [{
        data: percentages,
        backgroundColor: ['red', 'blue', 'green', 'orange', 'yellow']
      }],
      labels: types
    };
    return chartData;
  }

  render() {
    const data = this.createChartData();
    const headline = <div>Your Portfolio</div>
    return ( <div> {headline} <Doughnut data={data} /> </div> );
  }
}

const mapStateToProps = (state) => ( { portfolio: state.userPortfolio } );
export default connect(mapStateToProps)(UserPortfolio);