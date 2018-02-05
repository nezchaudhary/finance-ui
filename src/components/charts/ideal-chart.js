import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import Portfolios from '../../data/portfolio';

class IdealPortfolio extends Component {

  createChartData() {
    const portfolio = Portfolios[this.props.level];
    const values = Object.values(portfolio);
    const dataToRender = this.props.types.reduce((data, type, index) => {
      if (values[index]) {
        data.labels.push(`${type.name} - ${values[index]}%`);
        data.colors.push(type.color);
        data.values.push(values[index]);
      }
      return data;
    }, { labels: [], colors:[], values: [] });

    const chartData = {
      datasets:[{
        data: dataToRender.values,
        backgroundColor: dataToRender.colors
      }],
      labels: dataToRender.labels
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

const mapStateToProps = (state) => ({ 
  level: state.selectedLevel, 
  types: state.types 
});
export default connect(mapStateToProps)(IdealPortfolio);