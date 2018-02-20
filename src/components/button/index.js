import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
       <div className={this.props.classes} onClick={this.props.click}>
        {this.props.text}
      </div>
    )
  }
}

export default Button;