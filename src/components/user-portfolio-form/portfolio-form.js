import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputField from './input-field';
import { updateCustomPortfolio } from '../../actions/update-custom-portfolio';
import getPortfolioSize from '../../utility/portfolio-size.js';
import Button from '../button';

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
    const payload = {};
    for (let type in this.state) {
      let amount = (this.state[type]).match(/\d+/);
      amount = amount ? amount[0]: 0;
      amount = Number(amount);
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
        <div className="form-header center">Please tell us your investments in USD</div>
        {this.renderInputs()}
        <div className="grid-x">
          <Button 
            classes="small-6 medium-6 cell button expand form-button" 
            type="button" 
            click={this.handleSubmit.bind(this)}
            text="Show My Portfolio" 
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ updateCustomPortfolio: updateCustomPortfolio }, dispatch)
);
export default connect(null, mapDispatchToProps)(UserPortfolioForm);