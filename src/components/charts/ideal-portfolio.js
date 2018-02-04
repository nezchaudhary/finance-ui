import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import Portfolios from '../../portfolios/index';

class IdealPortfolio extends Component {

  createChartData() {
    const portfolio = Portfolios[this.props.level];
    const values = Object.values(portfolio);
    const investments = Object.keys(portfolio);
    const details = {
      datasets:[{
        data: values,
        backgroundColor: ['red', 'blue', 'green', 'orange', 'yellow']
      }],
      labels: investments
    };

    return details;
  }

  render() {
    let renderChart = this.props.level > 0;
    if (renderChart) {
      const data = this.createChartData();
      return (
        <div>
          <Doughnut 
            data={data}
          />
        </div>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    level: state.selectedLevel
  }
}

export default connect(mapStateToProps)(IdealPortfolio);