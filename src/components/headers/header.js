import React, { Component } from 'react';

class Header extends Component {
  render() {
    let header;
    if (this.props.type === 'main') {
      header = <div>Compare your investment portfolio with a ideal investment portfolio for risk levels
      between 1-10. Select your risk tolerance..
      </div>
    } else if (this.props.type === 'risk-level') {
      header = <h6>{this.props.header}</h6>
    } else if (this.props.type == 'risk-level-type') {
      header = <div>{this.props.header}</div>
    }
    return (
        <div className="grid-x">
          <div className="center small-10 small-offset-1 medium-6 medium-off-3 large-6 large-offset-3 cell">
            {header}
          </div>
        </div>
    )
  }
}

export default Header;