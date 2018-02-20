import React, { Component } from 'react';

class InputField extends Component {
  parseField() {
    let value = this.props.field.split('-');
    return value.map(word => word.slice(0, 1).toUpperCase() + word.slice(1)).join(' ');
  }

  render() {
    return (
      <div className="grid-x">
        <label className="small-4 small-offset-1 medium-3 medium-offset-1 large-3 large-offset-1 cell form-label">{`${this.parseField()}:`}</label>
        <input className="small-6 medium-6 large-6 cell form-input" type="text" name={this.props.name} placeholder="$0" value={this.props.value} onChange={this.props.change} />
      </div>     
    )
  }
}

export default InputField;