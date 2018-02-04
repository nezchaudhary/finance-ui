import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserForm from './user-form.js'

class UserPortfolioForm extends Component {
  constructor() {
    super()
    this.state = {
      renderForm: false,
    }
  }

  handleClickToRenderForm() {
    this.setState({renderForm: true});
  }

  render() {

    let riskSelected = this.props.level > 0;

    if (riskSelected && !this.state.renderForm) {
      return (
        <div onClick={this.handleClickToRenderForm.bind(this)}>Compare with current portfolio..</div>
      );
    } else if (riskSelected && this.state.renderForm) {
      return (
        <UserForm />
      )
    }

    return null;
  }
}

function mapStateToProps(state) {
  return {
    level: state.selectedLevel
  }
}

export default connect(mapStateToProps)(UserPortfolioForm);