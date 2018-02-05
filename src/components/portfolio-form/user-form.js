import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputField from './input-field';
import { UpdateUserPortfolio } from '../../actions/user-portfolio-change';


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

  checkInputTotal(values) {
    let total = 0;
    for (let type in values) {
      total += values[type];
    }
    return total;
  }

  handleSubmit() {
    const payload = {};
    for (let type in this.state) {
      payload[type] = Number(this.state[type]) || 0;
    }

    this.props.updateUserPortfolio(payload);
    this.props.submit(this.checkInputTotal(payload));
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
        <div>Please tell us your investments in USD</div>
        <div>
          {this.renderInputs()}
          <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ updateUserPortfolio: UpdateUserPortfolio }, dispatch)
);
export default connect(null, mapDispatchToProps)(UserPortfolioForm);