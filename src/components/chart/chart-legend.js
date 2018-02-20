import React, { Component } from 'react';

class ChartLegend extends Component {

  render() {
    return (
      <div className="grid-x grid-padding-x">
        <div className="center" style={ { margin: 'auto' }}>
          {this.props.data.labels.map((value, index) => {
            const style = { 'backgroundColor': `${this.props.data.colors[index]}` };
            return (
              <div className="legend-main" key={value}>
                <div className="legend-color" style={style}></div>
                <div className="legend-data">{value}</div>
              </div>
            );
          })}
        </div>    
      </div>
    );
  }
}

export default ChartLegend;
