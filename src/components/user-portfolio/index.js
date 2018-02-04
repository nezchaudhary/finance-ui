import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserForm from './user-form.js';
import UserChart from '../charts/user-chart';

class UserPortfolio extends Component {
  constructor() {
    super()
    this.state = {
      renderForm: false,
      renderChart: false
    }
  }

  handleClickToRenderForm() {
    this.setState({ renderForm: true });
  }

  handlePortfolioSubmit() {
    this.setState({ renderChart: true, renderForm: false });
  }

  createDataTypes() {
    const compare = (
      <div onClick={this.handleClickToRenderForm.bind(this)}>
        Compare with your current portfolio..
      </div>
    )
    const form = <UserForm submit={this.handlePortfolioSubmit.bind(this)} />;
    const chart = <UserChart />;
    const riskSelected = this.props.level > 0;
    return { compare, form, chart, riskSelected };
  }

  render() {
    const { compare, form, chart, riskSelected } = this.createDataTypes();
    if (riskSelected && !this.state.renderForm && !this.state.renderChart) {
      return compare;
    } else if (this.state.renderForm) {
      return form;
    } else if (this.state.renderChart) {
      return chart;
    }
    return null;
  }
}

const mapStateToProps = (state) => ( { level: state.selectedLevel } );
export default connect(mapStateToProps)(UserPortfolio);