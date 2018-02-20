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
      <div className="grid-x grid-padding-x">
          <div className="center small-auto medium-auto large-auto cell">
            {header}
          </div>
        </div>
    )
  }
}

export default Header;