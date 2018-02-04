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

  handleSubmit() {
    const values = Object.values(this.state);
    const payload = {
      Cash: Number(values[0]) || 0,
      Bonds: Number(values[1]) || 0,
      'Mutual Funds': Number(values[2]) || 0,
      Gold: Number(values[3]) || 0,
      Stocks: Number(values[4]) || 0,
    };
    this.props.updateUserPortfolio(payload);
    this.props.submit();
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