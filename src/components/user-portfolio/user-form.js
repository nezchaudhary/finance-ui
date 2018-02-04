import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from './input-field';

class UserPortfolioForm extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      cash: '$',
      bonds: '$',
      'mutual-funds': '$',
      gold: '$',
      stocks: '$'
    }
  }

  handleInput(e) {
    const input = e.target.name;
    this.setState({ [input]: e.target.value })

  }

  handleSubmit() {
    // handle user input hereå
  }

  renderInputs() {
    let investments = Object.keys(this.state);
    return investments.map(type => {
      return (
        <InputField
          field={type}
          key={type}
          value={this.state[type]}
          name={`${type}`}
          change={this.handleInput}
        />
      )
    });
  }
  
  render() {
    return (
      <div>
        <div>Please state your investments in USD</div>
        <form>
          {this.renderInputs()}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    level: state.selectedLevel
  }
}

export default connect(mapStateToProps)(UserPortfolioForm);