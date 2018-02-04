import React, { Component } from 'react';

class InputField extends Component {
  parseField() {
    let value = this.props.field.split('-');
    return value.map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
  }

  render() {
    return (
      <div>
        <label>{this.parseField()}
          <input type="text" name={this.props.name} placeholder="$0" value={this.props.value} onChange={this.props.change} />
        </label>
      </div>     
    )
  }
}

export default InputField;