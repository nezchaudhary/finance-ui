import React, { Component } from 'react';

class Header extends Component {
  render() {
    const header = this.props.header ? <h6>{this.props.header}</h6>
      : <div>This application allows you to compare your current investment portfolio against a ideal risk level portfolio 
      between 1-10 (10 is high). Select your risk tolerance..
      </div>
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