import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputField from './input-field';
import { UpdateUserPortfolio } from '../../actions/user-portfolio-change';
import { calculateSumOfAllInvestments } from '../../calculate-change/index';


class UserPortfolioForm extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      cash: '',
      bonds: '',
      'mutual-funds': '',
      gold: '',
      stocks: ''
    }
  }

  handleInput(e) {
    const input = e.target.name;
    this.setState({ [input]: e.target.value })
  }
  
  handleSubmit() {
    const payload = {};
    for (let type in this.state) {
      payload[type] = Number(this.state[type]) || 0;
    }

    this.props.updateUserPortfolio(payload);
    this.props.submit(calculateSumOfAllInvestments(payload));
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
        <h5 className="form-heading center">Please tell us your investments in USD</h5>
        {this.renderInputs()}
        <div className="grid-x">
          <button className="small-6 medium-6 cell button expand form-button" type="submit" onClick={this.handleSubmit.bind(this)}>Show My Portfolio</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ updateUserPortfolio: UpdateUserPortfolio }, dispatch)
);
export default connect(null, mapDispatchToProps)(UserPortfolioForm);