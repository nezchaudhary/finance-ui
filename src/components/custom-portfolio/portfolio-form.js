import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputField from './input-field';
import { updateCustomPortfolio } from '../../actions/update-custom-portfolio';
import getPortfolioSize from '../../utility/portfolio-size.js';


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
      let amount = Number(this.state[type])
      payload[type] = amount > 0 ? amount : 0;
    }

    this.props.updateCustomPortfolio(payload);
    this.props.submit(getPortfolioSize(payload));
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
  bindActionCreators({ updateCustomPortfolio: updateCustomPortfolio }, dispatch)
);
export default connect(null, mapDispatchToProps)(UserPortfolioForm);