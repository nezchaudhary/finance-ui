import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import RiskLevelPortfolios from '../../mock-data/risk-level-portfolios';

class IdealPortfolioChart extends Component {

  createChartData() {
    const portfolio = RiskLevelPortfolios[this.props.level];
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
      return ( 
        <div className="small-auto medium-auto large-4 cell"> 
          <h5 className="center"> Risk Level {this.props.level} Portfolio</h5>
          <Doughnut data={data} options={{ cutoutPercentage: 40 }} /> 
        </div> );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({ 
  level: state.selectedLevel, 
  types: state.types 
});
export default connect(mapStateToProps)(IdealPortfolioChart);