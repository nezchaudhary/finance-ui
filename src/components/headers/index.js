import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="grid-x grid-padding-x">
        <div className="center small-auto medium-auto large-auto cell">
          <div className={this.props.class}>
            {this.props.header}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;